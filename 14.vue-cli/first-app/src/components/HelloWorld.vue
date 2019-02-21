<template>
  <div>
    <button v-on:click="changeMessage()">Change Message</button>
    Text is change : {{message}}
    <hr />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
    },
  },
  methods: {
    changeMessage() {
      this.$emit('onmsgchanged', 'Changed Bro...');
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
