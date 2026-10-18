export type AddOn = {
  id: string;
  name: string;
  description: string;
  monthly: number;
};

export const addOns: AddOn[] = [
  { id: "online", name: "Online service", description: "Access to multiplayer games", monthly: 1 },
  { id: "storage", name: "Larger storage", description: "Extra 1TB of cloud save", monthly: 2 },
  { id: "profile", name: "Customizable profile", description: "Custom theme on your profile", monthly: 2 },
];
