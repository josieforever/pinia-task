<template>
  <main>
    <header-bar></header-bar>
    <task-form></task-form>
    <task-list></task-list>
  </main>
</template>

<script setup>
  import HeaderBar from './components/HeaderBar.vue';
  import TaskForm from './components/TaskForm.vue';
  import TaskList from './components/TaskList.vue';
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  main {
    background: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>