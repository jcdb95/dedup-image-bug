<script setup>
import { useHead } from "unhead";

useHead({
  title: "About us",
  meta: [
    {
      name: "description",
      content: "My about us description",
    },
    {
      name: "og:image",
      content: "/public/car.jpg",
    },
  ],
});
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
