<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld />
    <second></second>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Second from './components/Second.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Initial Text',
    };
  },
  components: {
    HelloWorld,
    Second,
  },
  methods: {
    changeParent(e) {
      this.msg = e;
    },
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
