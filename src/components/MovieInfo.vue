<template>
  <div>
        <div class="movie">
            <img class="movie__poster" v-if="movie.Poster !== 'N/A'" v-bind:src="movie.Poster" alt="movie poster">
            <img class="movie__poster" v-else src="../assets/stock-poster.jpg" alt="movie poster">
            <div class="movie__details">
                <h1 class="movie__title">{{ movie.Title }}</h1>
                <ul>
                    <li class="movie__info"><span>Released:</span> {{ movie.Released }}</li>
                    <li class="movie__info"><span>Country:</span> {{ movie.Country }}</li>
                    <li class="movie__info"><span>Genre:</span> {{ movie.Genre }}</li>
                    <li class="movie__info"><span>Runtime:</span> {{ movie.Runtime }}</li>
                    <li class="movie__info"><span>Director:</span> {{ movie.Director }}</li>
                    <li class="movie__info"><span>Actors:</span> {{ movie.Actors }}</li>
                    <li class="movie__info"><a v-bind:href='"https://www.imdb.com/title/" +  movie.imdbID + "/?ref_=tt_rec_tt"' target="_blank"><img src="../assets/imdb-logo.png" alt="imdb logo" title="Visit IMDB"></a><span>{{ movie.imdbRating }}</span></li>
                </ul>
                </div>
                <div class="movie__plot">
                    <h3 class="movie__plot-heading">Plot:</h3>
                    <p class="movie__plot-details">{{ movie.Plot }}</p>
                </div>  
        </div>
        <router-link to="/"><button class="btn-back">GO BACK</button></router-link>
 </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: {}
    }
  },
  created() {
      this.$http.get('http://www.omdbapi.com/?i=' + this.id + '&apikey=da3367ce').then(response => {
        this.movie = response.body;
        //console.log(this.movie);
      });
    }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .movie {
        color: white;
        max-width: 900px; 
        margin: 100px auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        justify-content: space-between;
        background-color: #111111;
        background-image: linear-gradient(to bottom right, #111 75%, #313131 25%);
        box-shadow: 0 4px 8px 0 
        rgba(247, 232, 96, 0.5) ,0 6px 20px 0 
        rgba(247, 232, 96, 0.5);
        border-bottom: 7px solid #f7e860;
    }

    .movie__poster {
        grid-column: 1 / 2;
        height: 450px;
    }

    .movie__details {
        grid-column: 2 / 4;
    }

    .movie__plot {
        grid-column: 1 / 4;
        padding: 20px;
    }

    .movie__title {
        color: #f7e860;
        padding: 30px;
        margin: 0 auto;
        text-align: center;
    }

    .movie__details ul {
        list-style-type: none;
        padding: 30px;
    }

    .movie__info {
        letter-spacing: 1px;
        line-height: 1.7rem;
    } 

    .movie__info span {
        text-transform: uppercase;
        color: #f7e860;
    }

    .movie__info img {
        width: 100px;
        height: 50px;
    }

    .movie__info:last-child {
        margin-top: 30px;
        position: relative;
    }

    .movie__info:last-child span {
        display: inline-block;
        font-size: 1.6rem;
        position: relative;
        top: -15px;
        margin-left: 10px;
    }

    .movie__plot-heading {
        text-transform: uppercase;
        color: #f7e860;
        letter-spacing: 1px;
        line-height: 1.7rem;
        margin-bottom: 10px;
    }

    .movie__plot-details {
        letter-spacing: 1px;
        line-height: 1.5rem;
        padding-bottom: 20px;
    }

    .btn-back {
        font-family: 'Armata', sans-serif;
        border: 0px;
        border-radius: 5px;
        display: block;
        width: 200px;
        height: 50px;
        margin: -65px auto 50px;
        color: white;
        background-color: #111111;
        box-shadow: 0 4px 8px 0 
        rgba(247, 232, 96, 0.5) ,0 6px 20px 0 
        rgba(247, 232, 96, 0.5);
        transition: all 300ms ease-out;
        text-decoration: none;
    }

    .btn-back:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px 0 
        rgba(247, 232, 96, 1)
        ,0 6px 20px 0 
        rgba(247, 232, 96, 1);
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {

        .movie {
            max-width: 400px;   
        }    
            
        .movie__poster {
            grid-column: 1 / 4;
            height: 450px;
            width: 100%;
        }

        .movie__details {
            grid-column: 1 / 4;
        }

        .movie__plot {
            grid-column: 1 / 4;
            padding: 20px;
        }

        .btn-back {
            max-width: 400px;
        }

    }

    @media only screen and (max-width: 450px) {
        
        .movie__poster {
            height: 500px;
        }

        .btn-back {
            width: 100%;
        }
    }
</style>
