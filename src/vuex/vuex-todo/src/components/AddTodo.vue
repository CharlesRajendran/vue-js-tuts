<template>
    <div>
      <form>
        <input v-model="newTask" />
        <button v-on:click.prevent="addTask()">Add</button>
      </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    
  },
})
export default class AddTodo extends Vue {
    newTask:string='';
    addTask() {
      // this.$store.commit('addTask', this.newTask); // for mutations
      this.$store.dispatch('addTaskAction', this.newTask);
    }
}
</script>

<style lang="scss" scoped>

</style>
