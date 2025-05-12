import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Series } from '@/types/series'

export const useHistoryStore = defineStore('history', () => {
  const saved = ref<Series[]>([])
  const history = ref<Series[]>([])

  function addToHistory(series: Series) {
    if (
      !history.value.find((s) => s.id === series.id) &&
      !saved.value.find((s) => s.id === series.id)
    ) {
      history.value.unshift(series)
    }
  }

  function toggleSaved(series: Series) {
    const index = saved.value.findIndex((s) => s.id === series.id)
    if (index !== -1) {
      saved.value.splice(index, 1)
    } else if (saved.value.length < 10) {
      saved.value.unshift(series)
    } else {
      alert('You have reached the limit of 10 saved items.')
    }
  }

  return {
    saved,
    history,
    addToHistory,
    toggleSaved,
  }
})
