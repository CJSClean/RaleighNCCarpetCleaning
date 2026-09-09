import type { AreaContent, CountyContent } from "../types";
import { northRaleigh } from "./north-raleigh";
import { cary } from "./cary";
import { apex } from "./apex";
import { morrisville } from "./morrisville";
import { wakeForest } from "./wake-forest";
import { garner } from "./garner";
import { knightdale } from "./knightdale";
import { hollySprings } from "./holly-springs";
import { fuquayVarina } from "./fuquay-varina";
import { durham } from "./durham";
import { clayton } from "./clayton";
import { wakeCounty } from "./wake-county";
import { durhamCounty } from "./durham-county";
import { johnstonCounty } from "./johnston-county";

const areaContent: AreaContent[] = [
  northRaleigh,
  cary,
  apex,
  morrisville,
  wakeForest,
  garner,
  knightdale,
  hollySprings,
  fuquayVarina,
  durham,
  clayton,
];

const countyContent: CountyContent[] = [wakeCounty, durhamCounty, johnstonCounty];

export function getAreaContent(key: string): AreaContent | undefined {
  return areaContent.find((a) => a.key === key);
}

export function getCountyContent(key: string): CountyContent | undefined {
  return countyContent.find((c) => c.key === key);
}
