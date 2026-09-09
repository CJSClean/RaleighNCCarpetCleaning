export interface Location {
  key: string; // short key, e.g. cary
  slug: string; // service-area page slug
  name: string;
  county: string;
  zipCodes: string[];
  neighborhoods: string[];
  href: string;
  mapQuery: string;
}

const make = (
  key: string,
  name: string,
  county: string,
  zipCodes: string[],
  neighborhoods: string[],
  mapQuery: string
): Location => ({
  key,
  name,
  county,
  zipCodes,
  neighborhoods,
  slug: `carpet-cleaning-${key}-nc`,
  href: `/service-areas/carpet-cleaning-${key}-nc`,
  mapQuery,
});

export const locations: Location[] = [
  make(
    "north-raleigh",
    "North Raleigh",
    "Wake County",
    ["27609", "27613", "27614", "27615", "27616", "27617"],
    [
      "North Hills",
      "Midtown",
      "Six Forks",
      "Falls of Neuse",
      "Brier Creek",
      "Wakefield",
      "Bedford at Falls River",
      "Falls River",
      "North Ridge",
      "Stonehenge",
      "Leesville",
      "Durant Road",
    ],
    "North Raleigh, Raleigh, NC"
  ),
  make(
    "cary",
    "Cary",
    "Wake County",
    ["27511", "27513", "27518", "27519"],
    [
      "Downtown Cary",
      "Preston",
      "MacGregor Downs",
      "Lochmere",
      "Kildaire Farm",
      "Weston",
      "Amberly",
      "Cary Park",
      "Carpenter Village",
      "Stone Creek",
      "Regency Park",
      "Parkway",
    ],
    "Cary, NC"
  ),
  make(
    "apex",
    "Apex",
    "Wake County",
    ["27502", "27523", "27539"],
    [
      "Downtown Apex",
      "Bella Casa",
      "Scotts Mill",
      "Haddon Hall",
      "Abbington",
      "Salem Village",
      "Beaver Creek",
      "Sweetwater",
      "Peakway",
      "Olive Chapel",
      "Kelly Road",
      "Hunter Street",
    ],
    "Apex, NC"
  ),
  make(
    "morrisville",
    "Morrisville",
    "Wake County",
    ["27560"],
    [
      "Town Center",
      "Breckenridge",
      "Providence Place",
      "Kitts Creek",
      "Savannah",
      "Church Street",
      "Park West Village",
      "Twin Lakes",
      "Weston Estates",
      "Cedar Fork",
      "Airport Boulevard",
      "Carpenter Fire Station Road",
    ],
    "Morrisville, NC"
  ),
  make(
    "wake-forest",
    "Wake Forest",
    "Wake County",
    ["27587", "27588"],
    [
      "Downtown Wake Forest",
      "Heritage",
      "Traditions",
      "Wakefield Plantation",
      "Holding Village",
      "Bowling Green",
      "Hasentree",
      "Crenshaw Hall",
      "Richland Hills",
      "Falls Lake",
      "Capital Boulevard",
      "Rolesville Road",
    ],
    "Wake Forest, NC"
  ),
  make(
    "garner",
    "Garner",
    "Wake County",
    ["27529"],
    [
      "Downtown Garner",
      "White Oak",
      "Timber Drive",
      "Cleveland",
      "Adams Point",
      "Vandora Springs",
      "McCullers",
      "Lake Benson",
      "Heather Hills",
      "Eagle Ridge",
      "Bryan Road",
      "Auburn",
    ],
    "Garner, NC"
  ),
  make(
    "knightdale",
    "Knightdale",
    "Wake County",
    ["27545"],
    [
      "Downtown Knightdale",
      "Knightdale Station",
      "Mingo Creek",
      "Widewaters",
      "Churchill",
      "Princeton Manor",
      "Poplar Creek",
      "Emerald Pointe",
      "Hodge Road",
      "Smithfield Road",
      "Old Milburnie",
      "Forestville Road",
    ],
    "Knightdale, NC"
  ),
  make(
    "holly-springs",
    "Holly Springs",
    "Wake County",
    ["27540"],
    [
      "Downtown Holly Springs",
      "Sunset Ridge",
      "12 Oaks",
      "Holly Glen",
      "Braxton Village",
      "Somerset",
      "Wescott",
      "Morgan Park",
      "Stonemont",
      "Bass Lake",
      "Avent Ferry Road",
      "Main Street",
    ],
    "Holly Springs, NC"
  ),
  make(
    "fuquay-varina",
    "Fuquay-Varina",
    "Wake County",
    ["27526"],
    [
      "Downtown Fuquay",
      "Varina",
      "South Lakes",
      "Bengal Estates",
      "Sippihaw",
      "Kennebec",
      "Wake Chapel",
      "Purfoy Road",
      "Judd Parkway",
      "Sunset Lake",
      "Willow Spring",
      "Hilltop",
    ],
    "Fuquay-Varina, NC"
  ),
  make(
    "durham",
    "Durham",
    "Durham County",
    ["27701", "27703", "27704", "27705", "27707", "27712", "27713"],
    [
      "Downtown Durham",
      "Trinity Park",
      "Old West Durham",
      "Duke Forest",
      "Hope Valley",
      "Woodcroft",
      "Southpoint",
      "Brightleaf",
      "Ninth Street",
      "Forest Hills",
      "Croasdaile",
      "Treyburn",
    ],
    "Durham, NC"
  ),
  make(
    "clayton",
    "Clayton",
    "Johnston County",
    ["27520", "27527"],
    [
      "Downtown Clayton",
      "Flowers Plantation",
      "Riverwood",
      "Cobblestone",
      "Glen Laurel",
      "Portofino",
      "Winston Pointe",
      "East Clayton",
      "Amelia Church Road",
      "Cleveland",
      "Powhatan",
      "Neuse River",
    ],
    "Clayton, NC"
  ),
];

export interface CountyPage {
  key: string;
  name: string;
  slug: string;
  href: string;
  mapQuery: string;
}

export const countyPages: CountyPage[] = [
  {
    key: "wake-county",
    name: "Wake County",
    slug: "wake-county-nc",
    href: "/service-areas/wake-county-nc",
    mapQuery: "Wake County, NC",
  },
  {
    key: "durham-county",
    name: "Durham County",
    slug: "durham-county-nc",
    href: "/service-areas/durham-county-nc",
    mapQuery: "Durham County, NC",
  },
  {
    key: "johnston-county",
    name: "Johnston County",
    slug: "johnston-county-nc",
    href: "/service-areas/johnston-county-nc",
    mapQuery: "Johnston County, NC",
  },
];

export function getLocationByKey(key: string): Location | undefined {
  return locations.find((l) => l.key === key);
}

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByCounty(county: string): Location[] {
  return locations.filter((l) => l.county === county);
}

export function getCountyBySlug(slug: string): CountyPage | undefined {
  return countyPages.find((c) => c.slug === slug);
}

export const allServiceAreas = [
  { name: "Raleigh", href: "/" },
  ...locations.map((l) => ({ name: l.name, href: l.href })),
];
