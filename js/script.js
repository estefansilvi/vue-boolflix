var app = new Vue({
  el: '#search-bar',
  data: {
    listMovies:[],
    searchInput:''
  },
  methods:{

    search: function () {
      const self = this;
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=c040985640a2d910494ec5b91989dd26&query=' + self.searchInput)
      .then(function(resp) {
          self.listMovies = resp.data.results;
      });
    }
  }
});


Vue.config.devtools = true;
