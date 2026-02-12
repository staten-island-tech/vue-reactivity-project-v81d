<template>
  <ThemeSwitcher
    :tooltipSide="'left'"
    class="fixed top-12 right-12"
  ></ThemeSwitcher>

  <div class="flex flex-col gap-8 w-full h-full p-12">
    <Header
      :title="`Definitions of &quot;${word}&quot;`"
      :subtitle="`Below is the dictionary entry for the word &quot;${word}.&quot;`"
    ></Header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import Header from "@/components/Header.vue";

const DICTIONARY_API_ENDPOINT: string =
  "https://api.dictionaryapi.dev/api/v2/entries/en/";

const route = useRoute();
const word = ref(route.params.word);

async function getDictionaryEntry() {
  const response = await fetch(DICTIONARY_API_ENDPOINT);
  const data = await response.json();
  if (data && data[0].word) return data;
}

const definitions = getDictionaryEntry();
</script>

<style scoped>
* {
  font-family: "Work Sans";
}
</style>
