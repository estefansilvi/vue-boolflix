const punteggio ='voto_average';
var app = new Vue({
  el: '#root',
  data: {
    results:[],
    searchInput:'',
    arrayFlags:['it','fr','en','es','ja'],
    listMovies:[],
    listSerieTV: []

  },
  methods:{

  /* creo le funzione per la ricerca dei film e delle serie tv */
  search: function () {
    this.results = [];
    this.searchMovie();
    this.searchSerieTv();
  },

  searchMovie: function(){
    const self = this;
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=c040985640a2d910494ec5b91989dd26&query=' + self.searchInput)
    .then((resp) => {
      self.listMovies = resp.data.results;
      self.results = [...self.results,...self.listMovies];
    });
  },

  searchSerieTv: function(){
    const self = this;
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=c040985640a2d910494ec5b91989dd26&query=' + self.searchInput)
    .then((resp) => {
        self.listSerieTV = resp.data.results;
        self.results = [...self.results, ...self.listSerieTV]
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
