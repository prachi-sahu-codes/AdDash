export const getTotal = (arr, str) => {
  return arr?.reduce((acc, curr) => (acc = acc + curr[str]), 0);
};
