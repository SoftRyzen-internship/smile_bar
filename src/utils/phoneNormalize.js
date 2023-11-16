const phoneNormalize = value => {
  const input = value.replace(/[^\d]/g, '').split('');
  return '+DD DDD DDD DD DD'
    .split('')
    .reduce((acc, elem, index, arr) => {
      if (input.length > 0) {
        if (elem === 'D') {
          acc.push(input.shift());
        } else {
          acc.push(elem);
        }
      }
      return acc;
    }, [])
    .join('');
};

export default phoneNormalize;
