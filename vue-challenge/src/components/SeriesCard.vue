<template>
  <div class="series-card" @click="$emit('click')">
    <img :src="series.thumbnail" alt="thumbnail" />
    <h3>{{ series.title }}</h3>
    <p>{{ series.startYear }} - {{ series.endYear }}</p>
    <p :class="series.type">{{ series.type }}</p>
    <p>{{ series.comics }} comics, {{ series.stories }} stories</p>
  </div>
</template>

<script setup lang="ts">
import type { Series } from '@/types/series'

defineProps<{ series: Series }>()
</script>

<style scoped lang="scss">
.series-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    max-height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>
