<template>
    <button v-on:click="abc('Component 2')">Button 2 Click - {{ name }}</button>
</template>
<script>
import CommonCode from '../mixin/CommonCode.js';

export default {
  data(){
    return {
      name: this.$route.params.name
    }
  },
  mixins: [CommonCode],
};
</script>
<style>

</style>
