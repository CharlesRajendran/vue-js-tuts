<template>
    <div>
        <h2> Un Finished Todos </h2>
        <ul>
            <li v-for="todo in unFinishedTodos">
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
      unFinishedTodos() {
          return this.$store.getters.unfinishedTodos;
      }
  }
})
export default class UnFinishedTodos extends Vue {

}
</script>

<style scoped>
    
</style>

