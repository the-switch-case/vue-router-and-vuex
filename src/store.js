import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { todos: [] }

const actions = {
    addTodo({ commit }, todo) {
        return new Promise(resolve => {
            setTimeout(() => {
                todo.id = Date.now()
                commit('addTodo', todo)
                resolve(todo)
            }, 1000)
        })
    }
}

const mutations = {
    addTodo(state, payload) {
        state.todos.push(payload)
    }
}

const store = new Vuex.Store({ state, actions, mutations })

export default store
