<template>
  <div id="app">
    <todo-list></todo-list>
    <finished-todos></finished-todos>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList.vue';
import FinishedTodos from './components/FinishedTodos.vue';
@Component({
  components: {
    'todo-list': TodoList,
    'finished-todos': FinishedTodos
  },
})
export default class App extends Vue {
  
}
</script>

<style>
  * {
        font-family: consolas;
    }

    h2 {
        color: #333;
    }

    ul > li {
        list-style: none;
    }
</style>
