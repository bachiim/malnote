<template>
  <v-sheet class="d-flex flex-column fill-height">
    <v-list>
      <v-list-item
        :title="form.name"
      >
        <template #prepend>
          <v-avatar :color="form.color" size="large">
            <v-icon size="x-large">
              {{ form.icon }}
            </v-icon>
          </v-avatar>
        </template>
        <template #append>
          <v-chip
            variant="outlined"
            :color="form.type === 0 ? 'error' : 'success'"
            size="small"
          >
            {{ form.type === 0 ? 'Pengeluaran' : 'Pemasukan' }}
          </v-chip>
        </template>
      </v-list-item>
    </v-list>
    <v-divider thickness="3"/>
    <v-container class="d-flex flex-column flex-grow-1 overflow-y-auto">
      <v-form ref="form_ref" autocomplete="off" @submit.prevent="simpanHandler" class="d-flex flex-column flex-grow-1">
        <div class="flex-grow-1">
          <label class="text-label-large font-weight-bold">Nama</label>
          <v-text-field
            v-model="form.name"
            density="compact"
            variant="outlined"
            prepend-inner-icon="mdi-text"
            :rules="[RULES.required]"
          />
          <label class="text-label-large font-weight-bold">Tipe</label>
          <v-btn-toggle v-model="form.type" class="w-100 mb-4" mandatory>
            <v-btn class="flex-grow-1" color="primary" prepend-icon="mdi-cash-minus" variant="outlined">Pengeluaran</v-btn>
            <v-btn class="flex-grow-1" color="primary" prepend-icon="mdi-cash-plus" variant="outlined">Pemasukan</v-btn>
          </v-btn-toggle>
          <label class="text-label-large font-weight-bold">Icon</label>
          <v-chip-group v-model="form.icon" mandatory class="mb-2" color="primary">
            <v-chip v-for="icon in CATEGORY_ICONS" :key="icon" :value="icon" variant="outlined">
              <v-icon>{{ icon }}</v-icon>
            </v-chip>
          </v-chip-group>
          <label class="text-label-large font-weight-bold">Warna</label>
          <v-chip-group v-model="form.color" mandatory>
            <v-chip
              v-for="color in COLORS" :key="color" :value="color"
              :color="color" :base-color="color" variant="flat" size="large"
              style="min-width: 40px; min-height: 40px;"
            >
              <v-icon v-if="form.color === color" >mdi-check</v-icon>
            </v-chip>
          </v-chip-group>
        </div>

        <div>
          <v-btn
            type="submit"
            color="primary"
            elevation="2"
            :loading="loading"
            block
          >
            Simpan
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { useAppBar } from '../../composables/useAppBar';
import { useLayout } from '../../composables/useLayout';
import { ref, onMounted, onUnmounted, reactive, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { categoryService } from '../../services/category';
import { RULES } from '../../utils/rules';
import { CATEGORY_ICONS, COLORS } from '../../utils/const';
import { confirm } from '@tauri-apps/plugin-dialog';
import { message } from '@tauri-apps/plugin-dialog';

const router = useRouter()
const route = useRoute()
const { setAppBar } = useAppBar()
setAppBar({
  left: 'back',
  center: { type: 'title', text: 'Edit Kategori' },
  right: 'delete',
  onDelete: hapuHandler
})

const { showBottomNav } = useLayout()
onMounted(() => showBottomNav.value = false)
onUnmounted(() => showBottomNav.value = true)

const form_ref = ref()
const loading = ref(false)
const error = ref(null)

const form = reactive({
  name: null,
  type: null,
  icon: null,
  color: null,
})

onMounted(async () => {
  try {
    const id = route.params.id
    const category = await categoryService.get(id)

    // Isi form dengan data kategori yang ada
    const settings = JSON.parse(category.settings)
    form.name = category.name
    form.type = category.type === 'expense' ? 0 : 1
    form.icon = settings.icon
    form.color = settings.color
  } catch (err) {
    error.value = 'Gagal memuat data kategori'
  }
})

async function simpanHandler() {
  const { valid } = await form_ref.value.validate()
  if (!valid) return
  if (!form.name.trim()) return

  loading.value = true

  try {
    const id = route.params.id
    await categoryService.update(id, {
      name: form.name.trim(),
      type: form.type === 0 ? 'expense' : 'income',
      settings: { icon: form.icon, color: form.color },
    })
    router.back()
  } catch (e) {
    await message(e.toString(), {title: 'Terjadi Kesalahan', kind: 'error'})
  } finally {
    loading.value = false
  }
}

async function hapuHandler() {
  const answer = await confirm(
    'Apakah Anda yakin ingin menghapus kategori ini?',
    {title: 'Hapus Kategori', kind: 'warning'}
  )
  if (!answer) return

  loading.value = true
  error.value = null

  try {
    const id = route.params.id
    await categoryService.delete(id)
    router.back()
  } catch (err) {
    error.value = err?.message ?? 'Gagal menghapus kategori'
  } finally {
    loading.value = false
  }
}
</script>