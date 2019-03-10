<template>
    <div id="page-container">
        <SearchBar v-on:searchpost="searchValue($event)"></SearchBar>
        <div id="post-section">
            <div class="post" v-if="getPost.length > 0" v-for="post in getPost">
                <h3> {{ post.title}} </h3>
                <p> {{ post.body }}</p>
            </div>
            <div v-if="getPost.length <= 0">
                <h3>No post matches the search...</h3>
            </div>
        </div>
    </div>
</template>
<script>
import SearchBar from './SearchBar.vue'

export default {
    name: 'article',
    data() {
        return {
            searchData: '',
            posts: []
        }
    },
    methods: {
        searchValue: function(e) {
            this.searchData = e;
        }
    },
    computed: {
        getPost: function() {
            // computed properties will change whenever something inside changes
            return this.posts.filter(post => {
                return post.title.match(this.searchData)
            })
        }
    },
    components: {
        SearchBar
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.posts = response.body;
            })
    }
}
</script>

<style scoped>
#page-container {
    display: grid;
    width: 30%;
    margin: 2em auto;
}

#post-section {
    text-align: left;
}

.post {
    border-bottom: 1px solid #333;
}
</style>
