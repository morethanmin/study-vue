<template>
  <div id="app">
    <h1>todo-list-application</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/todo-list/TodoList";

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
