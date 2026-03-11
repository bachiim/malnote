<template>
  <v-container class="pa-0 d-flex flex-column fill-height">
    <v-window v-model="window">
      <v-window-item v-for="account in accounts" :key="account.title">
        <v-container>
          <AccountCard
            :icon="account.icon"
            :title="account.title"
            :subtitle="account.subtitle"
            :balance="account.balance"
            :color="account.color"
          />
        </v-container>
      </v-window-item>
    </v-window>


    <v-sheet elevation="2" class="rounded-t-xl d-flex flex-column flex-grow-1">
      <v-container class="d-flex flex-row ga-4">
        <v-sheet class="pa-3 d-flex flex-column border-sm rounded-lg flex-grow-1">
          <span>Pemasukan</span>
          <span class="text-success">Rp 999.999.999,00</span>
        </v-sheet>
        <v-sheet class="pa-3 d-flex flex-column border-sm rounded-lg flex-grow-1">
          <span>Pengeluaran</span>
          <span class="text-error">Rp 999.999.999,00</span>
        </v-sheet>
      </v-container>

      <v-virtual-scroll :items="items" height="100">
        <template #default="{ item }">
          <v-list-subheader v-if="item.type === 'subheader'" class="mx-4">
            {{ item.title }}
          </v-list-subheader>
          <v-list-item
            :title="item.description"
            :subtitle="item.category"
            class="py-2"
            link
            v-else
          >
            <template #prepend>
              <v-avatar color="teal" size="large">
                <v-icon size="x-large">
                  {{ item.icon }}
                </v-icon>
              </v-avatar>
            </template>
            <template #append>
              <div class="text-right">
                {{ formatCurrency(item.amount) }}
              </div>
            </template>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-sheet>
  </v-container>

</template>

<script setup>
import AccountCard from '../components/AccountCard.vue';
import { ref } from 'vue';
import { useAppBar } from '../composables/useAppBar';

const { setAppBar } = useAppBar()
setAppBar({ center: {type: 'month-nav'} })

const formatCurrency = (value) => {
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value)
}

const window = ref(0)
const accounts = [
  {
    icon: "mdi-credit-card",
    title: "BCA",
    subtitle: "rekening utama",
    balance: 13000000,
    color: "primary",
  },
  {
    icon: "mdi-cash",
    title: "cash",
    subtitle: "",
    balance: 1000000,
    color: "secondary",
  },
  {
    icon: "mdi-safe",
    title: "qirod",
    subtitle: "investasi",
    balance: 15000000,
    color: "success",
  },
]

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
]
</script>