<template>
  <main>
    <div v-if="series">
      <h1>{{ series.title }}</h1>
      <img :src="series.thumbnail" alt="" />
      <p>{{ series.startYear }} - {{ series.endYear }}</p>
      <p>{{ series.comics }} comics</p>
      <p>{{ series.stories }} stories</p>
      <button @click="toggleSave">{{ isSaved ? 'Quitar' : 'Guardar 💾' }}</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSeriesStore } from '@/stores/useSeriesStore'
import { useHistoryStore } from '@/stores/useHistoryStore'

const route = useRoute()
const seriesStore = useSeriesStore()
const historyStore = useHistoryStore()

const series = computed(() => seriesStore.seriesList.find((s) => s.id === route.params.id))

const isSaved = computed(() => historyStore.saved.find((s) => s.id === route.params.id))

function toggleSave() {
  if (series.value) historyStore.toggleSaved(series.value)
}
</script>
<style scoped lang="scss">
img {
  max-width: 100%;
  height: auto;
  max-height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
