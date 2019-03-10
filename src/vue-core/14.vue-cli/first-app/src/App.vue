<template>
  <div id="app">
    <div id="navbar">
      <span>
        <router-link v-bind:to="'/?test=' + queryParam">One</router-link>
      </span>
      <span>
        <router-link v-bind:to="'/two/' + id">Two</router-link>
      </span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      id: 'Charles',
      queryParam: 'testing-query'
    };
  },
  components: {
  },
  methods: {

  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#navbar span {
  display: inline-block;
  margin: 1em;
}

#navbar span a {
  text-decoration: none;
  color: red;
  font-weight: bold;
}

.router-link-exact-active {
  background: #666;
  padding: 0.7em 1em;
  border-radius: 25%;
}

</style>
