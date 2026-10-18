import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

export type Plan = {
  id: string;
  name: string;
  monthly: number;
  icon: string;
};

export const plans: Plan[] = [
  { id: "arcade", name: "Arcade", monthly: 9, icon: arcadeIcon },
  { id: "advanced", name: "Advanced", monthly: 12, icon: advancedIcon },
  { id: "pro", name: "Pro", monthly: 15, icon: proIcon },
];