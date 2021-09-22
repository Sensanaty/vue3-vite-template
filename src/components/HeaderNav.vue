<template>
  <header>
    <h1>Sensanaty's Vue 3, TypeScript and Vite template</h1>
    <nav>
      <RouterLink to="/example">Example</RouterLink>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>
</template>

<style lang="scss">
  header {
    display: grid;
    grid-template: 1fr / 3fr 1fr;
    align-items: center;
    background: $main;
    color: $secondary;
    padding: 20px 10px;

    h1 {
      font-size: 1.5rem;
    }
  }

  nav {
    display: flex;
    margin: 0 0 0 auto;

    a {
      background: $secondary;
      color: $main;
      text-decoration: none;
      padding: 10px;
      margin: 0 10px;
      border-radius: 5px;
      font-weight: bold;
    }
  }
</style>
