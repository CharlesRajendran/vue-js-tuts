<template>
    <div>
        <h2>All ToDos</h2>
        <ul>
            <li v-for="todo in todos"> 
                <input type="checkbox" v-bind:checked="todo.status" />
                {{ todo.task }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    
  },
  computed: {
      todos() {
          return this.$store.state.todos;
      }
  }
})
export default class TodoList extends Vue {

}
</script>

<style scoped>
   
</style>

