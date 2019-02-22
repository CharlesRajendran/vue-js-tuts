<template>
  <div>
      Second Component - {{received}}
  </div>
</template>

<script>
import { eBus } from '../main';

export default {
  name: 'Second',
  data() {
    return {
      received: 'Not Emitter Yet',
    };
  },
  props: {

  },
  methods: {

  },
  created() {
    eBus.$on('EventBus', (eventData) => {
      this.received = eventData;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
