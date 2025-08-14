"use client";

//import { Welcome } from "@/features/main-page/welcome/welcome-page.component";
//import { Popular } from "./Popular/Popular";
//import { Principles } from "./Principles/Principles";
//import { Feedback } from "./Feedback/Feedback";
import { About } from "@/features/main-page/about/about.component";
import { useSelector } from "react-redux";
import {
  getPopularCategories,
  getPrinciplesData,
  getProjects,
} from "../../redux/selectors";
import { useGetAllProjects } from "../../api/use-get-all-projects";
import { Project } from "@/entity/Project/project";

export default function Home() {
  const { data: projects } = useGetAllProjects();
  const mockProjects = useSelector(getProjects);
  const popularCategories = useSelector(getPopularCategories);
  const principlesData = useSelector(getPrinciplesData);

  if (!projects) return <div>Loading...</div>;

  const welcomeProjects = projects.filter((project: Project) => project.projectConfig.showOnMain);
  return (
    <>
      {/*<Welcome mockProjects={welcomeProjects} /> */}
      {/* <Popular popularCategories={popularCategories} /> */}
      <About /> 
      {/* <Principles principlesData={principlesData} /> */}
      {/* <Feedback /> */}
    </>
  );
};
