export type Plan = {
  id: string;
  name: string;
  monthly: number;
};

export const plans: Plan[] = [
  { id: "arcade", name: "Arcade", monthly: 9 },
  { id: "advanced", name: "Advanced", monthly: 12 },
  { id: "pro", name: "Pro", monthly: 15 },
];
