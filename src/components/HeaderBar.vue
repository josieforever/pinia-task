<template>
    <header>
      <img src="../assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>
</template>

<script>
    import { useTaskStore } from '../stores/TaskStore.js'
    export default {
        setup() {
            const taskStore = useTaskStore()
            return {
                taskStore
            }
        }
    }
    
</script>

<style scoped>
    header {
        width: 100%;    
        background: rgb(216, 216, 216);   
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 0.5rem;
    }
    img {
        height: 4rem;
        width: 4rem;
        transform: rotate(-10deg);
    }
    h1 {
        font-size: 1.3rem;
        transform: rotate(2deg);
        color:rgba(44, 44, 44, 0.747);
        font-weight: 900;
    }
</style>