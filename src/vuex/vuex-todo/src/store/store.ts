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
        },
        unfinishedTodos: state => {
            return state.todos.filter(todo => {
                return (todo.status == false)
            })
        },
    },
    mutations: {
        addTask: (state, task) => {
            state.todos.push({ id: state.todos.length + 1, task: task, status: false });
        },
        changeTaskStatus: (state, taskid) => {
            state.todos.forEach(todo => {
                if (todo.id == taskid) {
                    todo.status = !(todo.status);
                }
            })
        },
    },
    actions: {
        addTaskAction: (context, task) => {
            context.commit('addTask', task)
        },
        changeStatusAction: (context, taskid) => {
            context.commit('changeTaskStatus', taskid);
        },
    }
});