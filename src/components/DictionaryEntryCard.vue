<template>
  <div class="card">
    <header>
      <h2 v-if="entry.word">{{ entry.word }}</h2>
      <p v-if="entry.phonetic">{{ entry.phonetic }}</p>
    </header>

    <!-- The section to show the meanings -->
    <section class="flex flex-col gap-4">
      <template v-for="meaning in entry.meanings">
        <article
          v-for="definition in meaning.definitions"
          class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-transparent bg-muted/50 p-4 gap-4"
        >
          <div class="flex flex-1 flex-col gap-1">
            <h3
              class="flex w-fit items-center gap-2 text-sm leading-snug font-medium"
            >
              {{ entry.word }}
              <span class="font-light">({{ meaning.partOfSpeech }})</span>
            </h3>
            <p
              class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
            >
              {{ definition.definition }}
            </p>
            <p
              v-if="definition.example"
              class="text-primary line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
            >
              Example: <span class="italic">{{ definition.example }}</span>
            </p>
          </div>
        </article>
      </template>
    </section>

    <!-- Licensing and sourcing information -->
    <footer class="flex flex-col items-start">
      <!-- License -->
      <p
        class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4"
      >
        This content is licensed under the
        <a :href="entry.license.url">
          {{ entry.license.name }}
        </a>
        license.
      </p>

      <ul
        class="list-decimal list-inside pl-4 text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance"
      >
        <li v-for="url in entry.sourceUrls">
          <a
            class="hover:text-primary underline underline-offset-4"
            :href="url"
            >{{ url }}</a
          >
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { type DictionaryEntry } from "@/config/globals";

defineProps<{
  entry: DictionaryEntry;
}>();
</script>

<style scoped></style>
