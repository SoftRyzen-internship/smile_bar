const textareaNormalize = value => {
  return value.replace(/[^A-Za-zА-Яа-яЇїІіЄєҐґ'`\d.,:;?!() \-\n]+/g, '');
};

export default textareaNormalize;
