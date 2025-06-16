export const getItems = async () => {
  const promises = [];
  for (let i = 1; i < 21; i++) {
    promises.push(
      fetch(
        `https://picsum.photos/v2/list?page=${i <= 10 ? i : i - 10}&limit=100`,
      ).then((response) => response.json()),
    );
  }
  const data = Promise.all(promises).then((response) => {
    return response.reduce((getItems, current) => {
      return [...getItems, ...current];
    }, []);
  });
  return data.then((data) => data);
};
