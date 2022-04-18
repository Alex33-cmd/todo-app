<template>
    <div>
    <h2>Todo application</h2>
    <AddTodo
        @add-todo="addTodo"
    />
    <hr>
    <TodoList
        v-bind:todosData="todos"
        @remove-todo="removeTodo"
    />
    </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'
import AddTodo from '../components/AddTodo.vue'

export default {
  name: 'app',
  // application data storage
  data() {
    return {
      todos: []
    }
  },

  // when component added to DOM
  mounted(){
    // fetch data and fill todo array with it
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {this.todos = json})
  },

  components: {TodoList, AddTodo},

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