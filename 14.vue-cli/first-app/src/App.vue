<template>
  <div id="app">
    <http></http>
  </div>
</template>

<script>
import HttpModule from './components/HTTP.vue';

export default {
  name: 'app',
  data() {
    return {
      
    };
  },
  components: {
    'http': HttpModule
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
</style>
