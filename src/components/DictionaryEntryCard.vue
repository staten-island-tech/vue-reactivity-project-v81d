<template>
  <div class="card">
    <header>
      <h2 v-if="entry.word">{{ entry.word }}</h2>
      <p v-if="entry.phonetic">{{ entry.phonetic }}</p>
    </header>

    <!-- The section to show the meanings -->
    <section class="text-sm"></section>

    <!-- Licensing information -->
    <footer class="flex items-center"></footer>
  </div>
</template>

<script setup lang="ts">
import { type DictionaryEntry } from "@/config/globals";

const props = defineProps<{
  entry: DictionaryEntry;
}>();
</script>

<style scoped></style>
