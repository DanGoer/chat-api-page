import { moodsBE } from "@/data/moodsBE";
import { rolesBE } from "@/data/rolesBE";

export const roleHandler = (role: string) => {
  return rolesBE.filter((roleType) => roleType.role === role)[0];
};

export const moodHandler = (mood: string) => {
  return moodsBE.filter((moodType) => moodType.mood === mood)[0];
};

export const customHandler = (custom: string) => {};
