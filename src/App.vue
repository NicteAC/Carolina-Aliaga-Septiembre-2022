<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <main class="main">
    <NavBar />
    <RouterView />
  </main>
</template>
<style lang="scss">
html,
body,
#app{
  width: 100%;
  min-height: 100%;
}
.main {
  min-height: 100vh;
  background-color: #212529;
}
</style>
