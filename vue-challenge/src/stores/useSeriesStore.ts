import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Series } from '@/types/series'
import allSeries from '@/data/series.json'

export const useSeriesStore = defineStore('series', () => {
  const seriesList = ref<Series[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)
  const page = ref(0)
  const pageSize = 10

  function fetchMoreSeries() {
    if (loading.value) return
    loading.value = true
    setTimeout(() => {
      const start = page.value * pageSize
      const end = start + pageSize
      const nextPage = (allSeries as Series[]).slice(start, end)

      if (nextPage.length) {
        seriesList.value.push(...nextPage)
        page.value++
      }
      loading.value = false
    }, 500)
  }

  return {
    seriesList,
    loading,
    error,
    fetchMoreSeries,
  }
})
