import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { todos: [], loading: false }

const actions = {
    addTodo({ commit }, todo) {
        commit('setLoading', true)
        return new Promise(resolve => {
            setTimeout(() => {
                todo.id = Date.now()
                commit('addTodo', todo)
                commit('setLoading', false)
                resolve(todo)
            }, 500)
        })
    },

    toggleTodo({ commit }, todo) {
        commit('toggleTodo', todo)
    },

    removeTodo({ commit }, todo) {
        commit('removeTodo', todo)
    },

    checkAll({ commit, state }) {
        const uncheckedsIds = state.todos.filter(i => !i.checked).map(i => i.id)
        commit('toggleList', uncheckedsIds)
    },

    uncheckAll({ commit, state }) {
        const checkeds = state.todos.filter(i => i.checked).map(i => i.id)
        commit('toggleList', checkeds)
    },

    removeAllCheckeds({ commit, state }) {
        const checkeds = state.todos.filter(i => i.checked).map(i => i.id)
        commit('removeList', checkeds)
    }
}

const getters = {
    uncheckeds(state) {
        return state.todos.filter(todo => todo.checked === false)
    },

    checkeds(state) {
        return state.todos.filter(todo => todo.checked)
    }
}

const mutations = {
    addTodo(state, payload) {
        state.todos.push(payload)
    },

    setLoading(state, payload) {
        state.loading = payload
    },

    toggleTodo(state, payload) {
        const index = state.todos.findIndex(item => item.id === payload.id);
        if (index > -1) {
            const checked = !state.todos[index].checked;
            Vue.set(state.todos, index, { ...state.todos[index], checked });
        }
    },

    removeTodo(state, payload) {
        state.todos = state.todos.filter(item => item.id !== payload.id)
    },

    toggleList(state, todosIds) {
        const todos = state.todos.map(item => {
            return todosIds.includes(item.id) ? { ...item, checked: !item.checked } : item
        })
        state.todos = todos
    },

    removeList(state, todosIds) {
        const todos = state.todos.filter(item => !todosIds.includes(item.id))
        state.todos = todos
    }
}

const store = new Vuex.Store({ state, actions, mutations, getters })

export default store
