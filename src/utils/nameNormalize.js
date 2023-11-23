export const nameNormalize = value => {
  return value.replace(/[`’‘]/gm, "'");
};
