<template>
  <v-sheet class="d-flex flex-column fill-height">
    <AccountCard
      :icon="selectedIcon"
      title="-"
      subtitle="-"
      :balance="0"
      :color="selectedColor"
      elevation="1"
      class="ma-4"
    />
    <v-divider thickness="2"/>
    <v-container class="d-flex flex-column flex-grow-1 overflow-y-auto">
      <v-form class="d-flex flex-column flex-grow-1">
        <div class="flex-grow-1">
          <label class="text-label-large font-weight-bold">Nama</label>
          <v-text-field
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-text-account"
          />
          <label class="text-label-large font-weight-bold">Kategori</label>
          <v-autocomplete
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-shape"
          />
          <label class="text-label-large font-weight-bold">Saldo Awal</label>
          <v-text-field
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-cash"
          />
          <label class="text-label-large font-weight-bold">Icon</label>
          <v-chip-group v-model="selectedIcon" mandatory>
            <v-chip v-for="icon in icons" :key="icon" :value="icon" variant="outlined">
              <v-icon>{{ icon }}</v-icon>
            </v-chip>
          </v-chip-group>

          <label class="text-label-large font-weight-bold">Warna</label>
          <v-chip-group v-model="selectedColor" mandatory>
            <v-chip
              v-for="color in colors" :key="color" :value="color"
              :color="color" :base-color="color" variant="flat" size="large"
              style="min-width: 40px; min-height: 40px;"
            >
              <v-icon v-if="selectedColor === color" >mdi-check</v-icon>
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
import AccountCard from '../../components/AccountCard.vue';
import { ref, onMounted, onUnmounted } from 'vue'

const { setAppBar } = useAppBar()
setAppBar({
  left: 'back',
  center: {type: 'title', text: 'Tambah Akun'},
})

const { showBottomNav } = useLayout()
onMounted(() => showBottomNav.value = false)
onUnmounted(() => showBottomNav.value = true)

const selectedIcon = ref('mdi-credit-card')
const selectedColor = ref('primary')

const icons = [
  'mdi-credit-card', 'mdi-cash', 'mdi-bank', 'mdi-wallet',
  'mdi-piggy-bank', 'mdi-safe', 'mdi-currency-usd', 'mdi-transfer',
  'mdi-shopping', 'mdi-car', 'mdi-home', 'mdi-food',
]

const colors = [
  'primary', 'red', 'success', 'error',
  'brown', 'grey', 'teal', 'purple',
  'orange', 'blue', 'pink', 'indigo',
]
</script>