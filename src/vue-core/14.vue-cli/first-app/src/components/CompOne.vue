<template>
    <button v-on:click="abc('Component 1')">Button 1 Click - {{ name }}</button>
</template>
<script>
import CommonCode from '../mixin/CommonCode.js';

export default {
  data(){
    return {
      name: this.$route.query.test
    }
  },
  mixins: [CommonCode],
};
</script>
<style>

</style>
