<template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const count = ref(0)
  
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    if (count.value > 0) {
      count.value--
    }
  }
  </script>