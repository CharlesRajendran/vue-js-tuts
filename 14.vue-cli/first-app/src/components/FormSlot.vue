<template>
    <div>
        <h1>This is normal</h1>
        <h3>Name</h3>
        <slot name="name"></slot>
        <h3>Age</h3>
        <slot name="age"></slot>
    </div>
</template>
<script>
export default {
    name: 'FormSlot'
}
</script>
<style scoped>

</style>
