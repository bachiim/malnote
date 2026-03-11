<template>
  <v-sheet class="fill-height">
    <v-list>
      <v-list-item
        v-for="cat in categories"
        :key="cat.id"
        :title="cat.name"
        :to="`/kategori/${cat.id}/edit`"
        link
      >
        <template #prepend>
          <v-avatar :color="getColor(cat.settings)" size="large">
            <v-icon size="x-large">
              {{ getIcon(cat.settings) }}
            </v-icon>
          </v-avatar>
        </template>
        <template #append>
          <v-chip
            variant="outlined"
            :color="cat.type === 'expense' ? 'error' : 'success'"
            size="small"
          >
            {{ cat.type === 'expense' ? 'Pengeluaran' : 'Pemasukan' }}
          </v-chip>
        </template>
      </v-list-item>

      <v-list-item v-if="categories.length === 0 && !loading">
        <v-list-item-title class="text-center text-grey">Belum ada kategori</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-progress-linear v-if="loading" indeterminate />
  </v-sheet>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAppBar } from '../../composables/useAppBar';
import { useRouter } from 'vue-router';
import { categoryService } from '../../services/category';

const router = useRouter()
const { setAppBar } = useAppBar()
setAppBar({
  left: 'back',
  center: { type: 'title', text: 'Kategori' },
  right: 'add',
  onAdd: () => router.push({ name: 'KategoriAdd' })
})

const categories = ref([])
const loading = ref(false)

function getIcon(settings) {
  try {
    return JSON.parse(settings)?.icon ?? 'mdi-tag'
  } catch {
    return 'mdi-tag'
  }
}

function getColor(settings) {
  try {
    return JSON.parse(settings)?.color ?? 'primary'
  } catch {
    return 'primary'
  }
}

async function load() {
  try {
    loading.value = true
    categories.value = await categoryService.getAll()
  } finally {
    loading.value = false
  }
}

onMounted(load)
</script>