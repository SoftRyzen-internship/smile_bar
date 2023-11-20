export const textareaNormalize = value => {
  return value
    .replace(/[^A-Za-zА-Яа-яЇїІіЄєҐґ'`\d.,:;?!() \-\n]+/g, '')
    .replaceAll('`', "'");
};
