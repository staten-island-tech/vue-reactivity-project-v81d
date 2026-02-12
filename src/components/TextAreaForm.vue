<template>
  <form class="form grid gap-6" @submit.prevent="submit">
    <div class="grid gap-2">
      <label for="text-input" class="label">{{ inputLabel }}</label>
      <textarea
        id="text-input"
        class="min-h-36"
        :placeholder="inputPlaceholder"
        v-model="text"
      ></textarea>
      <p class="text-muted-foreground text-sm">{{ inputDescription }}</p>
    </div>
    <button type="submit" class="btn">{{ buttonLabel }}</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  action: (text: string) => Promise<void>;
  inputLabel: string;
  inputPlaceholder: string;
  inputDescription: string;
  buttonLabel: string;
}>();

const text = ref("");

function submit() {
  props.action(text.value);
}
</script>

<style scoped></style>
