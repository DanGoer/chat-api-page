import { rolesBE } from "@/data/RolesBE";

export const roleHandler = (role: string) => {
  return rolesBE.filter((roleType) => roleType.role === role)[0];
};
