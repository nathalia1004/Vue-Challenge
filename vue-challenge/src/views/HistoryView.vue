<template>
  <main>
    <h2>Guardados 💾</h2>
    <div v-for="item in historyStore.saved" :key="item.id" class="card">
      <p>{{ item.title }}</p>
      <button @click="historyStore.toggleSaved(item)">Quitar</button>
    </div>

    <h2>Historial 📜</h2>
    <div v-for="item in historyOnly" :key="item.id" class="card">
      <p @click="goToDetail(item)">{{ item.title }}</p>
      <button @click="historyStore.toggleSaved(item)">GUardar</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHistoryStore } from '@/stores/useHistoryStore'

const router = useRouter()
const historyStore = useHistoryStore()

const historyOnly = computed(() =>
  historyStore.history.filter((item) => !historyStore.saved.find((s) => s.id === item.id)),
)

function goToDetail(item) {
  router.push({ name: 'Detail', params: { id: item.id } })
}
</script>

<style scoped>
.card {
  border: 1px solid pink;
  margin: 0.5rem;
  padding: 1rem;
}
</style>
