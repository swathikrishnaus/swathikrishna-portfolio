import { handmadeItems } from "./handmade";
import { projects } from "./projects";
import { travelPhotos } from "./travel";

export { site } from "./site";
export { worlds, getWorld } from "./worlds";
export type * from "./types";

export async function getSelectedProjects() {
  return projects;
}

export async function getHandmadeItems() {
  return handmadeItems;
}

export async function getTravelPhotos() {
  return travelPhotos;
}
