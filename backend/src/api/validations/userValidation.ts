export const isNewUserValid = (data: any): boolean => {
  if (data.username == null || data.username == undefined) return false;
  if (data.email == null || data.email == undefined) return false;
  if (data.password == null || data.password == undefined) return false;
  return true;
};
