import { rolesBE } from "@/data/rolesBE";

export const roleHandler = (role: string) => {
  return rolesBE.filter((roleType) => roleType.role === role)[0];
};

export const moodHandler = (mood: string) => {
  return rolesBE.filter((moodType) => moodType.role === mood)[0];
};
