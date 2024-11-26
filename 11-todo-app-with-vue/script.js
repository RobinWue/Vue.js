const app = Vue.createApp({
  data() {
    return {
      newTodo: "",
      todos: [
        { id: 1, text: "Learn HTML", done: false },
        { id: 2, text: "Learn CSS", done: false },
        { id: 3, text: "Learn JavaScript", done: true },
      ],
      filter: "all",
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "open") {
        return this.todos.filter((todo) => !todo.done);
      }
      if (this.filter === "done") {
        return this.todos.filter((todo) => todo.done);
      }
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length >= 5) {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo.trim(),
          done: false,
        });
        this.newTodo = "";
      }
    },
    removeDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
});

app.mount("#app");
