<template>
  <v-app-bar elevation="1">
    <v-row class="align-center">
      <!-- LEFT -->
      <v-col cols="2" class="ma-0">
        <v-btn v-if="left === 'back'" icon="mdi-arrow-left" @click="router.back()" />
      </v-col>
      <!-- CENTER -->
      <v-col cols="8" class="ma-0 d-flex justify-center">
        <div v-if="center?.type === 'month-nav'" class="d-flex align-center justify-center ga-2">
          <v-btn icon="mdi-chevron-left" variant="text" @click="prevMonth" />
          <span class="text-title-medium font-weight-bold">{{ monthLabel }}</span>
          <v-btn icon="mdi-chevron-right" variant="text" @click="nextMonth" />
        </div>
        <!-- Mode: judul biasa -->
        <span v-else-if="center?.type === 'title'" class="text-title-medium font-weight-bold">{{ center.text }}</span>
      </v-col>
      <!-- RIGHT -->
      <v-col cols="2" class="ma-0">
        <v-btn v-if="right === 'filter'" icon="mdi-filter-variant" @click="emit('filter')" />
        <v-btn v-if="right === 'add'" icon="mdi-plus" @click="onAdd?.()" />
        <v-btn v-if="right === 'more'" icon="mdi-dots-vertical" />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppBar } from '../composables/useAppBar'

const router = useRouter()
const emit = defineEmits(['filter', 'add', 'month-change'])
const { left, center, right, onAdd } = useAppBar()

// State bulan
const currentDate = ref(new Date())
const monthLabel = computed(() =>
  currentDate.value.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
)
const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1)
}
const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1)
}
</script>