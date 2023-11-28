export const scrollIfNeedForItem = (element, checkMobile = false) => {
  const { y, height } = element.getBoundingClientRect();
  const checkIsMobile =
    checkMobile && window && window.matchMedia('(max-width: 767px)').matches;

  if (checkIsMobile || y < 0) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
