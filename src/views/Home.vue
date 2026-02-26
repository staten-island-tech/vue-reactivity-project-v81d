<template>
  <ThemeSwitcher
    :tooltipSide="'left'"
    class="fixed md:top-12 right-12 bottom-12"
  ></ThemeSwitcher>

  <!-- This `div` is the "body" or container for everything else -->
  <div class="flex flex-col gap-8 w-full h-full p-12">
    <Header
      title="Dictionize"
      subtitle="Input any text to see definitions for every word."
    ></Header>

    <div class="flex flex-col md:flex-row gap-8 w-full h-full">
      <!-- The form card -->
      <div class="card flex-1">
        <section>
          <TextAreaForm
            :action="define"
            inputLabel="Text to define"
            inputPlaceholder="The quick brown fox jumped over the lazy dog."
            inputDescription="This is the sentence or paragraph to define."
            buttonLabel="Define Text"
          ></TextAreaForm>
        </section>
      </div>

      <!-- The card that shows all the definitions -->
      <div class="card flex-1 max-h-150">
        <header>
          <h2>Definitions</h2>
          <p v-if="definitions.length === 0">
            It's quite empty here. Input some meaningful text to see
            definitions.
          </p>
          <p v-else>
            Lo and behold! Below are the definitions of each valid word.
          </p>
        </header>
        <section class="overflow-y-hidden overflow-y-scroll flex flex-col gap-4">
          <DefinitionItem
            :word="definition.word"
            :partOfSpeech="definition.meanings?.[0]?.partOfSpeech"
            :firstDefinition="
              definition.meanings?.[0]?.definitions?.[0]?.definition
            "
            :meanings="definition.meanings?.length ?? 0"
            v-for="definition in definitions"
          ></DefinitionItem>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import {
  DICTIONARY_API_ENDPOINT,
  type DictionaryEntry,
} from "@/config/globals";

import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import Header from "@/components/Header.vue";
import TextAreaForm from "@/components/TextAreaForm.vue";
import DefinitionItem from "@/components/DefinitionItem.vue";

// @ts-expect-error
const segmenter = new Intl.Segmenter("en", { granularity: "word" });

const definitions = ref<DictionaryEntry[]>([]);

async function define(text: string) {
  definitions.value = [];

  // Split into words
  const segments = [...segmenter.segment(text)];
  const words: string[] = segments
    .filter((s) => s.isWordLike)
    .map((s) => s.segment);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    try {
      const response = await fetch(DICTIONARY_API_ENDPOINT + word);
      const data = await response.json();

      // Push to array if `data` is valid, the word exists, the word has meanings, and the word has not already been added
      if (
        data &&
        data[0].word &&
        data[0].meanings.length > 0 &&
        !definitions.value.find((d) => d.word === data[0].word)
      )
        // Only show the first definition because the others are most probably irrelevant
        definitions.value.push(data[0]);
    } catch (_) {}
  }
}
</script>

<style scoped></style>
