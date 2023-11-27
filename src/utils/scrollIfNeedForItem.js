export const scrollIfNeedForItem = (element, checkMobile = false) => {
  const { y, height } = element.getBoundingClientRect();
  const checkIsMobile =
    checkMobile && window && window.matchMedia('(max-width: 767px)').matches;
  console.log({ y, height, checkIsMobile });
  if (checkIsMobile || y < 0) {
    console.log('Scroll');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
