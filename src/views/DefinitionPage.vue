<template>
  <ThemeSwitcher
    :tooltipSide="'left'"
    class="fixed md:top-12 right-12 bottom-12"
  ></ThemeSwitcher>

  <div class="flex flex-col gap-8 w-full h-full p-12">
    <Header :title="`Dictionary Entries for &quot;${word}&quot;`"></Header>
    <DictionaryEntryCard
      v-for="entry in entries"
      :entry="entry"
    ></DictionaryEntryCard>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import {
  DICTIONARY_API_ENDPOINT,
  type DictionaryEntry,
} from "@/config/globals";

import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import Header from "@/components/Header.vue";
import DictionaryEntryCard from "@/components/DictionaryEntryCard.vue";

const route = useRoute();

const word = ref(route.params.word as string);
const entries = ref<DictionaryEntry[]>([]);

async function getDictionaryEntry(): Promise<DictionaryEntry[]> {
  try {
    const response = await fetch(DICTIONARY_API_ENDPOINT + word.value);
    const data = await response.json();

    if (data && data[0].word) return data;
  } catch (_) {}

  return [];
}

// `async` cannot be run at the top-level of the setup, so use `onMounted`
onMounted(async () => {
  entries.value = await getDictionaryEntry();
});
</script>

<style scoped></style>
