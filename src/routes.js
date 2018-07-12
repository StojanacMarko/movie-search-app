import SearchPage from './components/SearchPage.vue'
import MovieInfo from './components/MovieInfo.vue'

export default [
    { path: '/', component: SearchPage },
    { path: '/movie/:id', component: MovieInfo }
]