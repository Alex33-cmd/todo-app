<template>
    <li>
        <span v-bind:class="{done: todoItem.completed}">
            <input type="checkbox" v-on:change="todoItem.completed = !todoItem.completed">
            <strong>{{index + 1}}</strong>
            {{todoItem.title}}
        </span>
        <button v-on:click ="$emit('remove-todo', todoItem.id)">&times;</button>
    </li>
</template>

<script>
export default {
    // receive application data
    props: {
        
        todoItem: {
            // data type validation
            type: Object,
            // if no data - component doesn't work
            required: true
        },
        index: Number
    },
}
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem;
        margin: .5rem 0;
    }
    button {
       background: red; 
       color: #fff;
       border-radius: 50%;
       font-weight: bold;
    }
    button:hover {
        cursor: pointer;
    }
    input {
        margin-right: 1rem;
    }
    .done {
        text-decoration: line-through;
    }
</style>