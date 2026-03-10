<template>
  <v-sheet class="d-flex flex-column fill-height">
    <v-container class="d-flex flex-column flex-grow-1 overflow-y-auto">
      <v-form class="d-flex flex-column flex-grow-1">
        <div class="flex-grow-1">
          <label class="text-label-large font-weight-bold">Nama</label>
          <v-text-field
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-text"
          />
          <label class="text-label-large font-weight-bold">Tipe</label>
          <v-btn-toggle v-model="type" class="w-100 mb-4" mandatory>
            <v-btn class="flex-grow-1" color="primary" prepend-icon="mdi-cash-minus" variant="outlined">Pengeluaran</v-btn>
            <v-btn class="flex-grow-1" color="primary" prepend-icon="mdi-cash-plus" variant="outlined">Pemasukan</v-btn>
          </v-btn-toggle>
          <label class="text-label-large font-weight-bold">Icon</label>
          <v-chip-group v-model="selectedIcon" mandatory>
            <v-chip v-for="icon in icons" :key="icon" :value="icon" variant="outlined">
              <v-icon>{{ icon }}</v-icon>
            </v-chip>
          </v-chip-group>
        </div>

        <div>
          <v-btn color="primary" elevation="2" block disabled>Simpan</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { useAppBar } from '../../composables/useAppBar';
import { useLayout } from '../../composables/useLayout';
import { ref, onMounted, onUnmounted } from 'vue';

const { setAppBar } = useAppBar()
setAppBar({
  left: 'back',
  center: {type: 'title', text: 'Tambah Kategori'},
})

const { showBottomNav } = useLayout()
onMounted(() => showBottomNav.value = false)
onUnmounted(() => showBottomNav.value = true)

const icons = [
  'mdi-credit-card', 'mdi-cash', 'mdi-bank', 'mdi-wallet',
  'mdi-piggy-bank', 'mdi-safe', 'mdi-currency-usd', 'mdi-transfer',
  'mdi-shopping', 'mdi-car', 'mdi-home', 'mdi-food',
]

const type = ref(0)
const selectedIcon = ref('mdi-credit-card')
</script>