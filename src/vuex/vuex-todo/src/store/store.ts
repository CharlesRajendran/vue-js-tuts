import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: [
            { id: 1, task: 'Wake up', status: false },
            { id: 2, task: 'Breakfast', status: false },
            { id: 3, task: 'Morning Bus Session', status: true },
            { id: 4, task: 'IFS Work', status: false },
        ],
    },
    getters: {
        finishedTodos: state => {
            return state.todos.filter(todo => {
                return (todo.status == true)
            })
        }
    }
});