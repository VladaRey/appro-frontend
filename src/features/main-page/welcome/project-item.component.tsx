import classes from "./project-item.module.scss";
import { Overlay } from "@/components/ui/overlay/overlay.component";
import { ProjectDetails } from "./project-details.component";
import { ProjectDto } from "@/api/model";

interface PropsType {
  project: ProjectDto;
}

export const ProjectItem = ({ project }: PropsType) => {
  return (
    <div>
      <div className={classes["welcome__project-image"]}>
        <img src={project.mainImage?.path} alt="slide 1" />
        <Overlay />
      </div>
      <div className={classes["welcome__project-details-wrapper"]}>
        <ProjectDetails project={project} />
      </div>
    </div>
  );
};
