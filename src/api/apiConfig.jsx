const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "b0864090b7055e2ea3a88f6a0f9dbf93",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
