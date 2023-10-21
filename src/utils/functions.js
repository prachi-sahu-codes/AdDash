export const getTotal = (arr, str) => {
  return arr?.reduce((acc, curr) => (acc = acc + curr[str]), 0);
};

export const formatTableData = (keys) => {
  const removedId = keys.filter((key) => key !== "_id");
  const capitalFirstLetter = removedId.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  return capitalFirstLetter;
};
