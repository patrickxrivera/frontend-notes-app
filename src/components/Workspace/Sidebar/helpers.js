export const format = (name) => {
  const titleCasedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  const initial = titleCasedName[0];
  return { name: titleCasedName, initial };
};
