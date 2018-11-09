<template>
  <div>
    <div class="heading">
      <span class="heading__small">If it's filmed we probably know about it</span>
      <span class="heading__big">Let's find it</span>
    </div>
    <form>
      <input type="text" placeholder="Search..." v-model="searchText" v-on:keyup="searchMovies" class="search">
    </form>
    <span class="no-results-text" v-if="show">No movie found. Please check your spelling.</span>
    <ul class="search-container">
     <li class="search-container__item" v-for="movie in movieResults" title="Click for More Info"><router-link v-bind:to="'/movie/' + movie.imdbID">
        <img class="search-container__poster" v-if="movie.Poster !== 'N/A'" v-bind:src="movie.Poster" alt="movie-poster">
        <img class="search-container__poster" v-else src="../assets/stock-poster.jpg" alt="movie-stock-poster">
        <h2 class="search-container__title">{{ movie.Title }}</h2></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: '',
      movieId: '',
      show: false,
      result: '',
      movieResults: []
    }
  },
  methods: {
    searchMovies() {
      this.$http.get('http://www.omdbapi.com/?s=' + this.searchText.trim() + '&apikey=da3367ce').then(response => {
        this.movieResults = response.body.Search;
        this.movieResults === undefined && this.searchText !== '' ? this.show = true : this.show = false;
      }); 
    }
  }
}
</script>

<style scoped>

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  .heading {
    font-family: 'Monoton', cursive;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin: 4rem auto;
    max-width: 800px;
    text-align: center;
  }

  .heading__small {
    display: block;
    font-size: 2.5vw;
  }

  .heading__big {
    display: block;
    font-size: 4vw;
  }

  .search {
    display: block;
    height: 40px;
    width: 70%;
    margin: 0 auto;
    padding: 1rem;
    border: 3px solid #f7e860;
    border-radius: 5px;
    background-color: #f7e860;
    font-family: 'Armata', sans-serif;
    font-weight: 900;
    outline: none;
  }

  .search-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    align-content: space-around;
    list-style-type: none;
    margin: 4rem auto;
  }

  .search-container__item {
    display: block;
    margin: 20px;
    flex-basis: 250px;
    height: 420px;
    background-color: #111111;
    background-image: linear-gradient(to bottom right, #111 80%, #313131 20%);
    box-shadow: 0 4px 8px 0 
    rgba(247, 232, 96, 0.3)
    , 0 6px 20px 0 
    rgba(247, 232, 96, 0.3)
    ;
    transition: transform 500ms ease-out,
                box-shadow 500ms ease-out;
    border-bottom: 7px solid #f7e860;
  }

  .search-container__item:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 8px 0 
    rgba(247, 232, 96, 1)
    , 0 6px 20px 0 
    rgba(247, 232, 96, 1)
    ;
    cursor: pointer;
    }

  .search-container__poster {
    width: 100%;
    height: 300px;
  }

  .search-container__title {
    text-align: center;
    height: 100px;
    padding: 0 20px;
    margin-top: 20px;
    font-weight: 300;
    font-family: 'Titillium Web', sans-serif;
    line-height: 1.7rem; 
    letter-spacing: 0.07rem;
    color: #f7e860;
    font-size: 1.2rem;
  }

  .no-results-text {
    display: block;
    text-align: center;
    margin-top: 50px;
    font-size: 1.2rem;
    padding: 10px 20px;
    position: relative;
  }

  .no-results-text::before {
    content: '';
    position: absolute;
    display: block;
    width: 10%;
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f7e860;
  }

  @media only screen and (max-width: 600px) {
      
      .heading {
        margin-bottom: 3rem;
      }

      .heading__small {
        font-size: 4.5vw;
        padding: 10px 20px;
      }

      .heading__big {
        font-size: 6vw;
      }

      .search {
        width: 90%;
      }

      .search-container__item {
         margin: 20px 10px;
      }

      .search-container__title {
        font-size: 1rem;
        margin-top: 20px;
        overflow: hidden;
        line-height: 1.3rem;
      }
  }

</style>
