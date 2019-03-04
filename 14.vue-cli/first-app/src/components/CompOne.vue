<template>
    <button v-on:click="abc('Component 1')">Button 1 Click</button>
</template>
<script>
import CommonCode from '../mixin/CommonCode.js';
export default {
    mixins: [CommonCode]
}
</script>
<style>

</style>
