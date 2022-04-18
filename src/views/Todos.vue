<template>
    <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodo
        @add-todo="addTodo"
    />
    <hr>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="todos.length"
        v-bind:todosData="todos"
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
      loading: true
    }
  },

  // when component added to DOM
  mounted(){
    // fetch data and fill todo array with it
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
          setTimeout(()=> {
            this.todos = json
            this.loading = false
          }, 2000)
          
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
  }
}
</script>