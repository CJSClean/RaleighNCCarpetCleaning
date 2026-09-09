// The cleaning process and the task comparison shown on /our-process. The
// steps are operational and shared; page copy around them is unique.

export interface ProcessStep {
  name: string;
  text: string;
}

export const processSteps: ProcessStep[] = [
  {
    name: "Walkthrough and inspection",
    text: "The technician walks each area with you, notes fiber type, stains, pet spots, and wear patterns, and confirms the price before any equipment comes in.",
  },
  {
    name: "Dry soil removal",
    text: "A commercial vacuum with a beater bar pulls out dry soil, grit, and pet hair. Skipping this step turns dirt into mud during extraction, so we never skip it.",
  },
  {
    name: "Pre-treatment",
    text: "A fiber-safe pre-spray is applied to traffic lanes and soiled areas to loosen oils and bonded soil. Spots and pet areas get their own targeted treatment.",
  },
  {
    name: "Agitation",
    text: "A counter-rotating brush or grooming tool works the pre-spray into the pile so it reaches the base of the fiber instead of sitting on top.",
  },
  {
    name: "Hot water extraction",
    text: "A high-powered professional extraction unit rinses the carpet with heated water and recovers it immediately with strong vacuum, lifting soil and residue out of the pile.",
  },
  {
    name: "Spot treatment",
    text: "Anything that survived the main pass gets treated individually with the right chemistry for that stain, then rinsed again.",
  },
  {
    name: "Grooming and speed drying",
    text: "Pile is groomed in one direction to lift it and even out the appearance. Air movers are placed on request to cut dry time.",
  },
  {
    name: "Final walkthrough",
    text: "You inspect the finished areas with the technician before they leave. Anything you are not happy with gets addressed on the spot.",
  },
];

export interface ComparisonRow {
  task: string;
  standard: boolean;
  deep: boolean;
  pet: boolean | "n/a";
}

export interface ComparisonGroup {
  group: string;
  rows: ComparisonRow[];
}

export const comparison: ComparisonGroup[] = [
  {
    group: "Preparation",
    rows: [
      { task: "Pre-inspection and fiber identification", standard: true, deep: true, pet: true },
      { task: "Furniture moved and replaced (sofas, chairs, small tables)", standard: true, deep: true, pet: true },
      { task: "Thorough dry vacuuming", standard: true, deep: true, pet: true },
      { task: "Corner and edge detailing along baseboards", standard: false, deep: true, pet: true },
    ],
  },
  {
    group: "Treatment",
    rows: [
      { task: "Traffic lane pre-spray", standard: true, deep: true, pet: true },
      { task: "Mechanical agitation", standard: true, deep: true, pet: true },
      { task: "Whole-room heavy-soil pre-treatment", standard: false, deep: true, pet: true },
      { task: "Enzyme treatment of pet urine areas", standard: false, deep: false, pet: true },
      { task: "UV inspection to map hidden pet spots", standard: false, deep: false, pet: true },
      { task: "Sub-surface treatment of the pad", standard: false, deep: false, pet: true },
    ],
  },
  {
    group: "Cleaning",
    rows: [
      { task: "Hot water extraction rinse", standard: true, deep: true, pet: true },
      { task: "Second extraction pass on traffic lanes", standard: false, deep: true, pet: true },
      { task: "Individual spot treatment", standard: true, deep: true, pet: true },
      { task: "Odor neutralizer", standard: false, deep: false, pet: true },
    ],
  },
  {
    group: "Finish",
    rows: [
      { task: "Pile grooming", standard: true, deep: true, pet: true },
      { task: "Air movers for faster drying", standard: true, deep: true, pet: true },
      { task: "Fiber protector (optional add-on)", standard: false, deep: false, pet: "n/a" },
      { task: "Final walkthrough with you", standard: true, deep: true, pet: true },
    ],
  },
];
