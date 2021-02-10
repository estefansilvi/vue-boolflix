const punteggio ='voto_average';
var app = new Vue({
  el: '#search-bar',
  data: {
    listMovies:[],
    searchInput:'',
    arrayFlags:['it','fr','en','es','ja'],
    serieTvList:[]

  },
  methods:{

  /* creo la funzione per la ricerca dei film e delle serie tv */
  search: function () {
    const self = this;
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=c040985640a2d910494ec5b91989dd26&query=' + self.searchInput)
    .then(function(resp) {
      self.listMovies = resp.data.results;
    });
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=c040985640a2d910494ec5b91989dd26&query=' + self.searchInput)
    .then(function(resp) {
        self.serieTvList = resp.data.results;
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
