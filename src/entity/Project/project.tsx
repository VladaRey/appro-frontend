import { Floor } from "../Floor/floor";
import { ImageInfo } from "../../api/model";

export interface Project {
  id: number;
  title: string;
  description: string;
  generalArea: number;
  timeToCreate: number;
  projectPrice: number;
  livingArea: number;
  buildingArea: number;
  wallMaterial: string;
  wallThickness: number;
  foundation: string;
  ceiling: string;
  roof: string;
  buildingPrice: number;
  mainImage: ImageInfo;
  images: ImageInfo[];
  photos?: ImageInfo[];
  insulation: string;
  insulationThickness: number;
  length: number;
  width: number;
  style: string;
  isGaragePresent: boolean;
  bedroomCount: number;
  floorList: Floor[];
  popularity: number;
  projectConfig: ProjectConfig;
}

export interface ProjectConfig {
  showOnMain?: boolean;
  isFinished?: boolean;
}
