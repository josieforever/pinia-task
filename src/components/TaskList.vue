<template>
     <menu>
        <button class="all-tasks" @click="filter = 'all'">All Tasks</button>
        <button class="fav-tasks" @click="filter = 'favs'">Fav Tasks</button>
    </menu>
    <section class="task-list">
        <div class="shared-styles" v-if="filter === 'all'">
            <p>you have {{ taskStore.totalCount }} tasks</p>
            <div class="task" v-for="task in taskStore.tasks" :key="task.id" >
                <h3>{{ task.title }}</h3>
                <div class="icons">
                    <i :class="{'material-icons': true}" @click="taskStore.deleteTask(task.title)">delete</i>
                    &nbsp;
                    <i :class="{'active': task.isFav, 'material-icons': true}" @click="taskStore.addToFavs(task.title)">favorite</i>
                </div>
            </div>
        </div>
        <div class="shared-styles" v-if="filter === 'favs'">
            <p>you have {{ taskStore.favCount }} favorite tasks</p>
            <div  class="task" v-for="task in taskStore.favs" :key="task.id">
                <h3>{{ task.title }}</h3>
                <div class="icons">
                    <i  :class="{ 'material-icons': true }" @click="taskStore.deleteTask(task.title)">delete</i>
                    &nbsp;
                    <i  :class="{'active': task.isFav, 'material-icons': true}" @click="taskStore.deleteTask(task.title)">favorite</i>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { ref } from 'vue'
    import { useTaskStore } from '../stores/TaskStore.js'
    export default {
        setup() {
            const taskStore = useTaskStore()
            const filter = ref('all')
            taskStore.getTasks()
            return {
                taskStore, 
                filter,
            }
        }
    }
</script>

<style scoped>

    section, .shared-styles {
        width: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
        padding: 0.5rem;
        gap: 0.5rem;
        cursor: pointer;
    }
    button {
        padding: 0.2rem;
        border-radius: 5px;
    }
    
    .task {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border-radius: 5px;
        background: white;
    }

    h3 {
        font-size: 1rem;
    }
    .material-icons {
        font-size: 1.2rem;
        color: rgb(216, 216, 216);
        transition: 0.3s;
    }
    .material-icons:hover {
        font-size: 1.2rem;
        color: red;
    }

    menu {
        margin: auto;
        display: flex;
        flex-direction: row nowrap;
        align-items: center;
        gap: 1rem;
        padding:0.5rem;
    }
    .active {
        color: red;
    }
</style>

