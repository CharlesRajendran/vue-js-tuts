<template>
  <div>
    <p>Hi There, This is HelloWorld Component</p>
  </div>
</template>

<script>

import { eBus } from '../main';

export default {
  name: 'HelloWorld',
  methods: {
    emitEvent() {
      eBus.$emit('EventBus', 'Event Emitted Bro...');
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
