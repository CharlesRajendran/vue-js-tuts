# Post Search
- A basic vue application to test some vue features
- In this application, I have three components,
  - App
  - Article
  - Search Box
- App is the main component, Article component will have a section to display articles and the searchbar component

### Search Bar Component
- A basic component, which has a custom styled input field.
- I will add this component inside the article component, and this is the component that will take the user input, therefore I have to pass the value entered in the input field to the artcile component, that has been done through `event binding`.
  - I have emited an searchpost event inside the keyup event and passed just the value as the event data.
~~~
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
~~~

### Article Component
- App is the main component, but this component have all the ingredients, such as the search box and the articles.
- In this component I have to do certains tasks
    1. Take the post from server, for this I have used `vue-resource` library and registered it in the `main.js` file and used it to fetch the post from `jsonplaceholder.typicode.com`.
        - I used the created lifecycle hook to fetch the post 
    2. Take the input from the search component and make it available to other places in the component to use, for example we need the search term to filter posts.
        - For this, I have imported and registerd the component and included it
        - I have created a data attribute call `searchData` and set it to search input value using the `searchpost` event
    3. Render post based on the search term,
        - For this, I have used a computed property, the posts rendered are whatever I returned from the computed property `getPost`
          - I used computed property, because, the posts needs to be updated based on the search term, computed properties are watched properties, meaning, whatever that effects the state of that property will be watch, in this case the `getPost` property is watched for searchData term, since it is using it. So whenever the searchData changed this property will be updated.
#### main.js
~~~
import VueResource from 'vue-resource'
...
...
Vue.use(VueResource)
~~~

#### Article.vue
~~~
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
~~~
