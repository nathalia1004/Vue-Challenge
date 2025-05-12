<template>
  <main>
    <div class="series-list">
      <SeriesCard
        v-for="series in seriesStore.seriesList"
        :key="series.id"
        :series="series"
        @click="goToDetail(series)"
      />
    </div>
    <div ref="sentinel" class="sentinel"></div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSeriesStore } from '@/stores/useSeriesStore'
import { useHistoryStore } from '@/stores/useHistoryStore'
import SeriesCard from '@/components/SeriesCard.vue'

const seriesStore = useSeriesStore()
const historyStore = useHistoryStore()
const router = useRouter()

const sentinel = ref(null)

onMounted(() => {
  seriesStore.fetchMoreSeries()
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      seriesStore.fetchMoreSeries()
    }
  })
  observer.observe(sentinel.value!)
})

function goToDetail(series) {
  historyStore.addToHistory(series)
  router.push({ name: 'Detail', params: { id: series.id } })
}
</script>

<style scoped>
.series-list {
  display: flex;
  flex-wrap: wrap;
}
.sentinel {
  height: 1px;
}
</style>
