const punteggio ='voto_average';
var app = new Vue({
  el: '#root',
  data: {
    searchInput:'',
    arrayFlags:['it','fr','en','es','ja'],
    listMovies:[],
    listSerieTV: [],
    isSearchingMovies: false,
    isSearchingSeries: false,
    apiMoviesErrorMessage: '',
    apiSeriesErrorMessage: ''
  },
  methods:{

  /* creo le funzione per la ricerca dei film e delle serie tv */
  search: function () {
    this.listMovies = [];
    this.listSerieTV = [];
    this.searchMovie();
    this.searchSerieTv();
  },

  searchMovie: function(){

    this.isSearchingMovies = true;
    this.apiMoviesErrorMessage = '';
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=c040985640a2d910494ec5b91989dd26&query=' + this.searchInput)
    .then((resp) => {
      this.listMovies = resp.data.results;
      this.isSearchingMovies = false;
    })
    .catch(e => {
      this.apiMoviesErrorMessage = e.message;
      this.isSearchingMovies = false;
    });
  },

  searchSerieTv: function(){
    this.isSearchingSeries = true;
    this.apiSeriesErrorMessage = '';
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=c040985640a2d910494ec5b91989dd26&query=' + this.searchInput)
    .then((resp) => {
        this.listSerieTV = resp.data.results;
        this.isSearchingSeries = false;
    })
    .catch(e => {
      this.apiSeriesErrorMessage = e.message;
      this.isSearchingSeries = false;
    });
  },

  /* creo la funzione per svuotare l'input dopo aver cliccato il bottone o aver premuto enter */
  resetInput:function(){
    this.searchInput='';
  },

  /* creo la funzione per arrotondare ad un numero intero il voto */
  assegnoVoto: function(voto){
    return parseInt(voto / 2);
  },
  }
});


Vue.config.devtools = true;
