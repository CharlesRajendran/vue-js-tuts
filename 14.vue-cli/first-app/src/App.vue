<template>
  <div id="app">
    <button @click="component = 'HelloWorld'">Hello Component</button>
    <button @click="component = 'FormSlot'">Form Component</button>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Second from './components/Second.vue';
import FormSlot from './components/FormSlot.vue';

export default {
  name: 'app',
  data() {
    return {
      msg: 'Initial Text',
      component: 'FormSlot'
    };
  },
  components: {
    HelloWorld,
    Second,
    FormSlot
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
