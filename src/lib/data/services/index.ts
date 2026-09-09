import type { Service } from "../types";
import { carpetCleaning } from "./carpet-cleaning";
import { upholsteryCleaning } from "./upholstery-cleaning";
import { areaRugCleaning } from "./area-rug-cleaning";
import { petStainOdorRemoval } from "./pet-stain-odor-removal";
import { tileGroutCleaning } from "./tile-and-grout-cleaning";
import { commercialCarpetCleaning } from "./commercial-carpet-cleaning";

export type { Service } from "../types";

// Order here drives the services menu, the cards on the home page, and the
// footer list.
export const services: Service[] = [
  carpetCleaning,
  upholsteryCleaning,
  areaRugCleaning,
  petStainOdorRemoval,
  tileGroutCleaning,
  commercialCarpetCleaning,
];

export function getServiceByKey(key: string): Service | undefined {
  return services.find((s) => s.key === key);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
