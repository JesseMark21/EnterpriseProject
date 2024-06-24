<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">Favorites</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 1rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-link {
  margin: 0 1rem;
  text-decoration: none;
  color: white;
  font-size: 1rem;
}

.nav-link:hover {
  text-decoration: underline;
}

main {
  position: fixed;
  top: 80px; /* Adjust this value if needed to accommodate your navbar height */
  left: 0;
  width: 100%;
  height: calc(100% - 80px); /* Adjust this value if needed to accommodate your navbar height */
  padding: 1rem;
  overflow: auto;
}

@media (min-width: 1024px) {
  .nav-link {
    font-size: 1.25rem;
  }
}
</style>
