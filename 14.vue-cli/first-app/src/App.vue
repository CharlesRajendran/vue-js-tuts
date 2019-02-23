<template>
  <div id="app">
    <FormSlot>
      <template v-slot:name>
        <h4>Dilip</h4>
      </template>
      <h4 slot="age">26</h4>
    </FormSlot>
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
