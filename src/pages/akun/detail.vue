<template>
  <div class="d-flex flex-column fill-height">
    <v-container>
      <AccountCard
        icon="mdi-credit-card"
        title="BCA"
        subtitle="Rekening utama"
        :balance="13000000"
        color="primary"
        elevation="1"
      />
    </v-container>

    <v-sheet elevation="2" class="rounded-t-xl d-flex flex-column fill-height">
      <v-container class="d-flex flex-row ga-4 align-center">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          hide-details
        />
        <v-btn icon="mdi-calendar" variant="outlined"/>
      </v-container>

      <v-virtual-scroll :items="items" height="100">
        <template #default="{ item }">
          <v-list-subheader v-if="item.type === 'subheader'" class="mx-4">
            {{ item.title }}
          </v-list-subheader>
          <v-list-item
            :title="item.description"
            :subtitle="item.category"
            :prepend-icon="item.icon"
            class="py-2"
            slim
            link
            v-else
          >
            <template #append>
              <div class="text-right">
                Rp {{ formatCurrency(item.amount) }}
              </div>
            </template>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-sheet>
  </div>
</template>

<script setup>
import { useAppBar } from '../../composables/useAppBar';
import { useLayout } from '../../composables/useLayout';
import AccountCard from '../../components/AccountCard.vue';
import { onMounted, onUnmounted } from 'vue';

const { setAppBar } = useAppBar()
setAppBar({
  left: 'back',
  center: {type: 'title', text: 'Detail Akun'},
  right: 'more',
})

const { showBottomNav } = useLayout()
onMounted(() => showBottomNav.value = false)
onUnmounted(() => showBottomNav.value = true)

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

const items = [
  {type: 'subheader', title: '3 Maret 2026'},
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
  {type: 'subheader', title: '2 Maret 2026'},
  {
    icon: 'mdi-food',
    description: 'Coba kalau deskripsinya panjang banget',
    category: 'Makan/Minum',
    amount: -153600
  },
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
  {type: 'subheader', title: '1 Maret 2026'},
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
  {
    icon: 'mdi-food',
    description: 'Sushi tei',
    category: 'Makan/Minum',
    amount: 153600
  },
]
</script>