<template>
  <v-sheet class="d-flex flex-column fill-height">
    <v-btn-toggle v-model="type" class="w-100" mandatory>
      <v-btn class="flex-grow-1" color="primary" prepend-icon="mdi-cash-minus" variant="outlined">Pengeluaran</v-btn>
      <v-btn class="flex-grow-1" color="primary" prepend-icon="mdi-cash-plus" variant="outlined">Pemasukan</v-btn>
      <v-btn class="flex-grow-1" color="primary" prepend-icon="mdi-transfer" variant="outlined">Transfer</v-btn>
    </v-btn-toggle>
    <v-container class="d-flex flex-column flex-grow-1 overflow-y-auto">
      <v-form class="d-flex flex-column flex-grow-1">
        <div class="flex-grow-1">
          <label class="text-label-large font-weight-bold">Tanggal</label>
          <v-text-field
            density="compact"
            variant="outlined"
            type="date"
            prepend-inner-icon="mdi-calendar"
          />
          <label v-if="type !== 2" class="text-label-large font-weight-bold">Akun</label>
          <v-autocomplete
            v-if="type !== 2"
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-account-cash"
          />
          <label v-if="type === 2" class="text-label-large font-weight-bold">Sumber Akun</label>
          <v-autocomplete
            v-if="type === 2"
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-account-cash"
          />
          <label v-if="type === 2" class="text-label-large font-weight-bold">Tujuan Akun</label>
          <v-autocomplete
            v-if="type === 2"
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-account-cash"
          />
          <label v-if="type !== 2" class="text-label-large font-weight-bold">Kategori</label>
          <v-autocomplete
            v-if="type !== 2"
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-shape"
          />
          <label class="text-label-large font-weight-bold">Deskripsi</label>
          <v-text-field
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-note-text"
          />
          <label class="text-label-large font-weight-bold">Total</label>
          <v-text-field
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-cash"
          />
        </div>

        <div>
          <v-btn color="primary" elevation="2" block disabled>Simpan</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useAppBar } from '../../composables/useAppBar';
import { useLayout } from '../../composables/useLayout';

const { setAppBar } = useAppBar()
setAppBar({ left: 'back', center: {type: 'title', text: 'Transaksi'} })

const { showBottomNav } = useLayout()
onMounted(() => showBottomNav.value = false)
onUnmounted(() => showBottomNav.value = true)

const type = ref(0)

</script>