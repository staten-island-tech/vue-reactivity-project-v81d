<template>
  <ThemeSwitcher
    :tooltipSide="'left'"
    class="fixed top-12 right-12"
  ></ThemeSwitcher>

  <!-- This `div` is the "body" or container for everything else -->
  <div class="flex flex-col gap-8 w-full h-full p-12">
    <Header
      :title="'Dictionize'"
      :subtitle="'Input any text to see definitions for every word.'"
    ></Header>
    <div class="flex flex-wrap gap-8 w-full h-full">
      <div class="card flex-1">
        <section>
          <TextAreaForm
            :action="define"
            :inputLabel="'Text to define'"
            :inputPlaceholder="'The quick brown fox jumped over the lazy dog.'"
            :inputDescription="'This is the sentence or paragraph to define.'"
            :buttonLabel="'Define'"
          ></TextAreaForm>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import Header from "@/components/Header.vue";
import TextAreaForm from "@/components/TextAreaForm.vue";

const dictionaryAPIEndpoint: string =
  "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function define(text: string) {
  const words: string[] = text.trim().split(/\s+/); // split by whitespaces
  let definitions: Object[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    try {
      const response = await fetch(dictionaryAPIEndpoint + word);
      const data = await response.json();
      definitions.push(data[0]);
    } catch (_) {}

    console.log(definitions);
  }
}
</script>

<style scoped></style>
