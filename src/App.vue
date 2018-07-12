<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import SearchPage from './components/SearchPage.vue'
import MovieInfo from './components/MovieInfo.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Header,
    SearchPage,
    MovieInfo
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Knewave|Titillium+Web|Ubuntu|Orbitron|Monoton|Armata');

  body {  
    background-image: url('./assets/bkg-photo2.jpeg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #f7e860;
    font-family: 'Armata', sans-serif;
  }
</style>
