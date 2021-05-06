<template>
  <div>
    <p>todi-list component</p>
    <BaseInputText
      v-model="newTodoText"
      placeholder="할 일을 입력해 주세요."
      @add="addTodo"
    />
    <ul v-if="todos.length">
      <TodoListItem
        v-for="todo in todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        v-on:remove="removeTodo"
      />
    </ul>
    <p v-else>
      리스트가 없습니다. 새로운 할 일을 추가해보세요.
    </p>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText";
import TodoListItem from "./TodoListItem";

let nextTodoId = 1;
export default {
  components: {
    BaseInputText,
    TodoListItem,
  },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: nextTodoId++,
          text: "abcd",
        },
        {
          id: nextTodoId++,
          text: "abcd",
        },
        {
          id: nextTodoId++,
          text: "abcd",
        },
      ],
    };
  },
  methods: {
    addTodo(text = "") {
      console.log("addTodo");
      // const trimmedText = this.newTodoText.trim();
      const trimmedText = text.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText,
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      console.log("removeTodo");

      this.todos = this.todos.filter((todo) => todo.id !== idToRemove);
    },
  },
};
</script>

<style></style>
