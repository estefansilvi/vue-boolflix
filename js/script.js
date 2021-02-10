const punteggio ='voto_average';
var app = new Vue({
  el: '#search-bar',
  data: {
    listMovies:[],
    searchInput:'',
    voteList:[1,2,3,4,5]
  },
  methods:{

  search: function () {
    const self = this;
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=c040985640a2d910494ec5b91989dd26&query=' + self.searchInput)
    .then(function(resp) {
      self.listMovies = resp.data.results;

    });
  },
  coloredStars: function(element, index) {
    const averageVote = Math.ceil(element.vote_average/2);
      if (index + 1 <= averageVote) {
          return 'light-star'
      } else {
          return 'white'
      }
    }
  }
});


Vue.config.devtools = true;
