<template>
  <button @click="$emit('toggle')">
    {{ isSaved ? 'Unsave' : 'Save' }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ isSaved: boolean }>()
</script>
