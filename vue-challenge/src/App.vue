<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home 🏠</RouterLink>
        <RouterLink to="/history">Historial 📜</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
#app {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: #e62429;
  padding: 1rem;
  color: white;

  nav {
    display: flex;
    gap: 1rem;

    a {
      color: white;
      text-decoration: none;

      &.router-link-exact-active {
        font-weight: bold;
        border-bottom: 2px solid white;
      }
    }
  }
}
</style>
