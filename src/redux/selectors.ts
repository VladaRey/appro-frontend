import { RootState } from "@/redux/configure-store";

export const getProjects = (state: RootState) => state.projects;

export const getViewProjects = (state: RootState) => state.viewProjects;
export const getPopularCategories = (state: RootState) =>
  state.popularCategories;
export const getPrinciplesData = (state: RootState) => state.principlesData;
