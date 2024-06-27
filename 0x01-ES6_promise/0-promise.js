function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = { data: 'My sample data' };
      resolve(response);
    }, 1000);
  });
}

export default getResponseFromAPI;
