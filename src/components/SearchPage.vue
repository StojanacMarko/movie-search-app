<template>
  <div>
    <div id="main-heading">
      <h2>If it's filmed we probably know about it</h2>
      <h1>Let's find it</h1>
    </div>
    <form>
      <input type="text" placeholder="Search..." v-model="searchText" v-on:keyup="searchMovies" id="search-input">
    </form>
    <ul id="flex-container">
     <li v-for="movie in movieResults" title="Click for More Info"><router-link v-bind:to="'/movie/' + movie.imdbID">
        <img v-bind:src="movie.Poster" alt="movie-poster">
        <h2>{{ movie.Title }}</h2>
        <p v-show="show">{{ movie.imdbID }}</p></router-link>
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
      //console.log(this.movieResults);

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

  #main-heading {
    font-family: 'Monoton', cursive;
    letter-spacing: .1rem;
    text-transform: uppercase;
    margin: 4rem auto;
    max-width: 800px;
    text-align: center;
  }

  #main-heading h2 {
    font-size: 2.5vw;
  }

  #main-heading h1 {
    font-size: 4vw;
  }

  #search-input {
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
  }

  #flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    align-content: space-around;
    list-style-type: none;
    margin: 4rem auto;
  }

  #flex-container li {
    display: block;
    margin: 20px;
    flex-basis: 250px;
    height: 420px;
    background-color: #111111;
    box-shadow: 0 4px 8px 0 
rgba(247, 232, 96, 0.3)
, 0 6px 20px 0 
rgba(247, 232, 96, 0.3)
;
transition: transform 500ms ease-out,
            box-shadow 500ms ease-out;
border-bottom: 7px solid #f7e860;
}

#flex-container li:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 8px 0 
rgba(247, 232, 96, 1)
, 0 6px 20px 0 
rgba(247, 232, 96, 1)
;
cursor: pointer;
}

  #flex-container li img {
    width: 100%;
    height: 300px;
  }

  #flex-container li h2 {
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

  @media only screen and (max-width: 600px) {
      
      #main-heading {
        margin-bottom: 3rem;
      }

      #main-heading h2 {
        font-size: 4.5vw;
        padding: 10px 20px;
      }

      #main-heading h1 {
        font-size: 6vw;
      }

      #search-input {
        width: 90%;
      }

      #flex-container li {
         margin: 20px 10px;
      }

      #flex-container li h2 {
        font-size: 1rem;
        margin-top: 20px;
        overflow: hidden;
        line-height: 1.3rem;
      }
  }

</style>
