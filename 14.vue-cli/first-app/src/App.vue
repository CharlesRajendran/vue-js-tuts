<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-bind:message="msg" v-on:onmsgchanged="changeParent($event)" />
    <HelloWorld v-bind:message="msg" v-on:onmsgchanged="changeParent($event)" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Initial Text',
    };
  },
  components: {
    HelloWorld,
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
