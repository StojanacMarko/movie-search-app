<template>
  <div>
        <div id="movie-details">
            <img id="grid-item-1" v-bind:src="movie.Poster" alt="movie poster">
            <div id="grid-item-2">
                <h1>{{ movie.Title }}</h1>
                <ul>
                    <li><span>Released:</span> {{ movie.Released }}</li>
                    <li><span>Country:</span> {{ movie.Country }}</li>
                    <li><span>Genre:</span> {{ movie.Genre }}</li>
                    <li><span>Runtime:</span> {{ movie.Runtime }}</li>
                    <li><span>Director:</span> {{ movie.Director }}</li>
                    <li><span>Actors:</span> {{ movie.Actors }}</li>
                    <li><a v-bind:href='"https://www.imdb.com/title/" +  movie.imdbID + "/?ref_=tt_rec_tt"' target="_blank"><img src="../assets/imdb-logo.png" alt="imdb logo" title="Visit IMDB"></a><span>{{ movie.imdbRating }}</span></li>
                </ul>
                </div>
                <div id="grid-item-3">
                    <h3>Plot:</h3>
                    <p>{{ movie.Plot }}</p>
                </div>  
        </div>
        <router-link to="/"><button id="btn-back">GO BACK</button></router-link>
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

    #movie-details {
        color: white;
        max-width: 900px; 
        margin: 100px auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
        justify-content: space-between;
        background-color: #111111;
        box-shadow: 0 4px 8px 0 
        rgba(247, 232, 96, 0.5) ,0 6px 20px 0 
        rgba(247, 232, 96, 0.5);
    }

    #grid-item-1 {
        grid-column: 1 / 2;
        height: 450px;
    }

    #grid-item-2 {
        grid-column: 2 / 4;
    }

    #grid-item-3 {
        grid-column: 1 / 4;
        padding: 20px;
    }

    #grid-item-2 h1 {
        color: #f7e860;
        padding: 30px;
        margin: 0 auto;
        text-align: center;
    }

    #grid-item-2 ul {
        list-style-type: none;
        padding: 30px;
    }

    #grid-item-2 ul li {
        letter-spacing: 1px;
        line-height: 1.7rem;
    } 

    #grid-item-2 ul li span {
        text-transform: uppercase;
        color: #f7e860;
    }

    #grid-item-2 ul li img {
        width: 100px;
        height: 50px;
    }

    #grid-item-2 ul li:last-child {
        margin-top: 30px;
        position: relative;
    }

    #grid-item-2 ul li:last-child span {
        display: inline-block;
        font-size: 1.6rem;
        position: relative;
        top: -15px;
        margin-left: 10px;
    }

    #grid-item-3 h3 {
        text-transform: uppercase;
        color: #f7e860;
        letter-spacing: 1px;
        line-height: 1.7rem;
        margin-bottom: 10px;
    }

    #grid-item-3 p {
        letter-spacing: 1px;
        line-height: 1.5rem;
        padding-bottom: 20px;
    }

    #btn-back {
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
        transition: transform 500ms ease-out;
    }

    #btn-back:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px 0 
        rgba(247, 232, 96, 1)
        ,0 6px 20px 0 
        rgba(247, 232, 96, 1);
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {

        #movie-details {
            max-width: 400px;   
        }    
            
        #grid-item-1 {
            grid-column: 1 / 4;
            height: 450px;
            width: 100%;
        }

        #grid-item-2 {
            grid-column: 1 / 4;
        }

        #grid-item-3 {
            grid-column: 1 / 4;
            padding: 20px;
        }

        #btn-back {
            max-width: 400px;
        }

    }

    @media only screen and (max-width: 450px) {
        
        #btn-back {
            width: 100%;
    }
    }
</style>
