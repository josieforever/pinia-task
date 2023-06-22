<template>
    <form @submit.prevent="addTask">
        <input type="text" v-model="title" placeholder="i have too...">
        &nbsp;
        <button>add task</button>
    </form>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore';
import { ref } from 'vue';
export default {
    setup() {
        const title = ref('') 
        const taskStore = useTaskStore()
        const addTask =()=> {
            taskStore.addTask({
                id: new Date,
                title: title.value,
                isFav: false
            })
            title.value = ''
        }

        return {
            title, addTask
        }
    }
}

</script>

<style scoped>
    form {
        padding: 1rem;
    }   
    input {
        border: none;
        outline: none;
        height: 2rem;
        border-radius: 5px;
        padding: 0.5rem;
    }  
    button {
        background: yellow;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
    } 
</style>