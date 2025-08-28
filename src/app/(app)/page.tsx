"use client";

import { Welcome } from "@/features/main-page/welcome/welcome-page.component";
import { Popular } from "@/features/main-page/popular/popular.component";
import { Principles } from "@/features/main-page/principles/principles.component";
import { Feedback } from "@/features/main-page/feedback-form/feedback-form.component";
import { About } from "@/features/main-page/about/about.component";
import { useSelector } from "react-redux";
import {
  getPopularCategories,
  getPrinciplesData,
  getProjects,
} from "../../redux/selectors";
import { useGetAllProjects } from "../../api/use-get-all-projects";
import { ProjectDto } from "@/api/model";

export default function Home() {
  const { data: projects } = useGetAllProjects();
  const mockProjects = useSelector(getProjects);
  const popularCategories = useSelector(getPopularCategories);
  const principlesData = useSelector(getPrinciplesData);

  if (!projects) return <div>Loading...</div>;

  const welcomeProjects = projects.filter((project: ProjectDto) => project.showOnMain);
  return (
    <>
      <Welcome mockProjects={welcomeProjects} />
      <Popular popularCategories={popularCategories} />
      <About /> 
      <Principles principlesData={principlesData} />
      <Feedback />
    </>
  );
};
