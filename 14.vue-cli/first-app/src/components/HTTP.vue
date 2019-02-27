<template>
    <div id="container">
        <div v-for="post in posts" class="post">
            <h3> {{ post.title }}</h3>
            <p> {{ post.body }} </p>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default {
    name: 'HttpModule',
    data() {
        return {
            posts: []
        }
    },
    methods: {
        
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                this.posts = result.body;
            }).catch((err) => {
                console.log(err);
            });
    }
}
</script>
<style scoped>
#container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.post {
    background-color: lightcyan;
}
</style>
