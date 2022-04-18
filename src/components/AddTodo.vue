<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="submit">Add ToDo</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            console.log('Submit', this.title);
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
                this.$emit('add-todo', newTodo)
                this.title=''
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        justify-content: center;
    }
    input {
        width: 200px;
    }
    button {
       background: green; 
       color: #fff;
       border-radius: .5rem;
       font-weight: bold;
       padding: .5rem;
       margin: 0 .5rem;
    }
    button:hover {
        cursor: pointer;
    }
</style>