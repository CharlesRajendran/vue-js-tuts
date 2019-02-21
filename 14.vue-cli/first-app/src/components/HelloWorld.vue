<template>
  <div>
    <button v-on:click="changeMessage()">Change Message</button>
    My Fav Legends:
    <ul>
      <li v-for="l in legends"> {{ l }}</li>
    </ul>

    <hr />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    legends: {
      type: Array,
    },
  },
  methods: {
    changeMessage() {
      this.legends.push('Siraj');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style: none;
  }
</style>
