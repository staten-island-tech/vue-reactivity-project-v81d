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
    <div class="card max-w-200">
      <section>
        <SingleInputForm
          :action="define"
          :inputLabel="'Text to define'"
          :inputPlaceholder="'The quick brown fox jumped over the lazy dog.'"
          :inputDescription="'This is the sentence or paragraph to define.'"
          :buttonLabel="'Define'"
        ></SingleInputForm>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import Header from "@/components/Header.vue";
import SingleInputForm from "@/components/SingleInputForm.vue";

function define(text: string) {
  const words: string[] = text.split(/\s+/); // split by whitespaces
  console.log(words);
}
</script>

<style scoped></style>
