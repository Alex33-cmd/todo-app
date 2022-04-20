<template>
    <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo
        @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="filterTodos.length"
        v-bind:todosData="filterTodos"
        @remove-todo="removeTodo"
    />
    <p v-else>No to-dos!</p>
    </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import AddTodo from '../components/AddTodo.vue'
import Loader from '../components/Loader.vue'

export default {
  name: 'app',
  // application data storage
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },

  // when component added to DOM
  mounted(){
    // fetch data and fill todo array with it
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(json => {
          // delay to demonstrate loading animation
          setTimeout(()=> {
            this.todos = json
            this.loading = false
          }, 1000)
          
          })
  },

  components: {TodoList, AddTodo, Loader},

  methods: {
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id != id)
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  },

  computed: {
    // computed functions used as variables and MUST return variable!
    filterTodos() {
      switch (this.filter) {
        case 'completed':
          return this.todos.filter(t => t.completed === true)
          break;
        case 'not-completed':
          return this.todos.filter(t => t.completed === false)
          break;
        default:
          return this.todos
          break;
      }
    }
  }
}
</script>

<style scoped>
select {
  padding: .5rem;
  margin-top: 1rem;
}
</style>