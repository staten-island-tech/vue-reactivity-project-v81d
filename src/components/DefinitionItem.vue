<template>
  <article
    class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-border p-4 gap-4"
  >
    <div class="flex flex-1 flex-col gap-1">
      <h3
        class="flex w-fit items-center gap-2 text-sm leading-snug font-medium"
      >
        {{ word }}
        <span class="font-light">({{ partOfSpeech }})</span>
      </h3>
      <template v-if="partOfSpeech && firstDefinition">
        <p
          class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary"
        >
          {{ firstDefinition }}
        </p>
      </template>
    </div>
    <button class="btn-sm-outline">See More</button>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  word: string;
  partOfSpeech?: string;
  firstDefinition?: string;
  meanings: number;
}>();
</script>

<style scoped></style>
