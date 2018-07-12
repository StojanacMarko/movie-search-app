<template>
  <div>
      <nav>
      <router-link to="/"><h4 id="logo-link">movieFinder<i class="material-icons">
videocam
</i></h4></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    nav {
        border-bottom: 2px solid #f7e860;
    }

    #logo-link {
        color: #f7e860;
        text-decoration: none;
        display: block;
        margin: 1rem;
        font-family: 'Knewave', cursive;
        letter-spacing: .1rem;
        font-size: 1.2rem;
        transition: font-size 500ms ease-in;
        width: 170px;
    }

    #logo-link:hover {
        color: #f4f3e3; 
        font-size: 1.1rem;
    }

    #logo-link i {
        display: inline-block;
        position: relative;
        top: 6px;
        transition: transform 1000ms ease-out;
        margin-left: 5px;
        border: 2px solid #f7e860;
        border-radius: 50%;
    }

    #logo-link:hover i {
        transform: rotate(180deg);
        border: 2px solid #f4f3e3;
    }

</style>