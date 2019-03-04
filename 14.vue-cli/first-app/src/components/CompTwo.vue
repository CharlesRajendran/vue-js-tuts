<template>
    <button v-on:click="abc('Component 2')">Button 2 Click</button>
</template>
<script>
import CommonCode from '../mixin/CommonCode.js';

export default {
    mixins: [CommonCode]
}
</script>
<style>

</style>
