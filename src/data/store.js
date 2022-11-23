import {reactive} from 'vue'

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiUrlMoviesTop: "https://api.themoviedb.org/3/movie/top_rated",
  apiUrlTvTop: "https://api.themoviedb.org/3/tv/top_rated",
  apiKey: "7f8a147d0517705a1c160386fb5f5e96",
  searchedTitle: "",
  movie: {},
  tv: {},
  firstApi:true,
  movieCast: [],
  tvCast: [],
  movieGenres: [],
  tvGenres: [],
  movieFilter: "",
  tvFilter: "",
});