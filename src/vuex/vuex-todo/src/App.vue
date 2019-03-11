<template>
  <div id="app">
    <add-task-form></add-task-form>
    <todo-list></todo-list>
    <finished-todos></finished-todos>
    <unfinished-todos></unfinished-todos>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList.vue';
import FinishedTodos from './components/FinishedTodos.vue';
import UnFinishedTodos from './components/UnFinishedTodos.vue';
import AddTodo from './components/AddTodo.vue';

@Component({
  components: {
    'todo-list': TodoList,
    'finished-todos': FinishedTodos,
    'unfinished-todos': UnFinishedTodos,
    'add-task-form': AddTodo
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
