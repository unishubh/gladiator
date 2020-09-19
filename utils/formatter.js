const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const approximate = (value) => {
  if (value <= 1000) {
    return Math.round(value);
  }
  if (value >= 1000 && value < 100000) {
    return `${Math.round((value / 1000) * 100) / 100}K`;
  }
  if (value >= 100000 && value < 10000000) {
    return `${Math.round((value / 100000) * 100) / 100} L`;
  }
  if (value >= 10000000) {
    return `${Math.round((value / 10000000) * 100) / 100} Cr`;
  }
};
export { numberWithCommas, approximate };
