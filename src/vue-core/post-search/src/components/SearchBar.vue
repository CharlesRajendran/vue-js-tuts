<template>
    <div>
        <input placeholder="search blog post" v-on:keyup="passValue($event)" />
    </div>    
</template>

<script>
export default {
    name:'searchbox',
    methods: {
        passValue: function(e) {
            this.$emit('searchpost', e.target.value)
        }
    }

}
</script>

<style scoped>
    div input {
        width: 100%;
        height: 2.5em;
        padding: 1em;
        font-size: 1rem;
        color: #444;
    }

    input:focus {
        border: 2px solid black;
    }
</style>
