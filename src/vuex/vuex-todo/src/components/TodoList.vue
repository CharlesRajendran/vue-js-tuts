<template>
    <div>
        <h2>All ToDos</h2>
        <ul>
            <li v-for="todo in todos"> 
                <input type="checkbox" v-bind:checked="todo.status" v-on:click="updateStatus(todo.id)" />
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
  },
  methods: {
      updateStatus(taskid) {
          this.$store.dispatch('changeStatusAction', taskid);
      }
  }
})
export default class TodoList extends Vue {

}
</script>

<style scoped>
   
</style>

