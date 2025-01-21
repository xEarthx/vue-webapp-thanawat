<template>
  <div class="app">
    <h1>To Do List !!!</h1>
    <div class="input-container">
      <input v-model="newTask" placeholder="Add your task" @keyup.enter="addTask" />
      <button @click="addTask">Add Task</button>
    </div>
    <transition-group name="fade" tag="ul">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <input type="checkbox" v-model="task.completed" />
        <span :class="{ 'completed-task': task.completed }">{{ task.text }}</span>
        <button @click="removeTask(index)">Delete</button>
      </li>
    </transition-group>
    <p v-if="tasks.length === 0" class="no-tasks">No tasks available</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped>
/* พื้นหลังและฟอนต์ */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
}

.app {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #007BFF;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 70%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  border-color: #007BFF;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;
}

.task-item:last-child {
  border-bottom: none;
}

.task-item:hover {
  background-color: #f9f9f9;
}

.completed-task {
  text-decoration: line-through;
  color: #6c757d;
}

.no-tasks {
  color: #6c757d;
  font-style: italic;
}

/* ปุ่มลบ */
.task-item button {
  background-color: #ff5c5c;
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

.task-item button:hover {
  background-color: #cc3f3f;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
