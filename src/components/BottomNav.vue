<template>
  <v-bottom-navigation color="primary" v-model="value">
    <v-btn value="/">
      <v-icon size="x-large">mdi-home-outline</v-icon>
    </v-btn>
    <v-btn value="/laporan">
      <v-icon size="x-large">mdi-chart-line</v-icon>
    </v-btn>
    <v-btn variant="elevated" elevation="1" rounded="pill" icon value="/transaksi">
      <v-icon size="x-large">mdi-plus</v-icon>
    </v-btn>
    <v-btn value="/gtw">
      <v-icon size="x-large">mdi-chart-waterfall</v-icon>
    </v-btn>
    <v-btn value="/pengaturan">
      <v-icon size="x-large">mdi-cog-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const value = computed({
  get: () => route.path,
  set: (val) => router.push(val)
})
</script>