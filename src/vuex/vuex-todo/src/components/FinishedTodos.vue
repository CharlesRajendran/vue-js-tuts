<template>
    <div>
        <h2> Finished Todos </h2>
        <ul>
            <li v-for="todo in finishedTodos">
                {{todo.task}}
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
      finishedTodos() {
          return this.$store.getters.finishedTodos;
      }
  }
})
export default class FinishedTodos extends Vue {

}
</script>

<style scoped>
    
</style>

