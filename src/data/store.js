import {reactive} from 'vue'

export const store = reactive({
  apiUrlMovies: "https://api.themoviedb.org/3/search/movie",
  apiKey: "7f8a147d0517705a1c160386fb5f5e96",
  searchedTitle: "Ritorno al futuro",
  moviesListData: {}
});