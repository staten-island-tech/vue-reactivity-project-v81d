<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-4xl font-bold">{{ title }}</h1>
    <h2 class="text-lg">{{ subtitle }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped></style>
