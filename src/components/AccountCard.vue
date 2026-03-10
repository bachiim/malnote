<template>
  <v-card rounded="lg" elevation="2">
    <v-card-title
      :class="`bg-${color} text-white d-flex align-center`"
    >
      <v-icon size="24">{{ icon }}</v-icon>

      <div class="ml-4 d-flex flex-column">
        <span class="text-uppercase font-weight-bold">
          {{ title }}
        </span>
        <span class="text-body-small text-capitalize opacity-80">
          {{ subtitle }}
        </span>
      </div>
    </v-card-title>

    <v-card-text>
      <div class="mt-3">
        <div>Saldo Terakhir</div>

        <div class="d-flex align-center justify-space-between">
          <span class="text-headline-medium font-weight-bold">
            Rp {{ formattedBalance }}
          </span>
          <v-btn
            v-model="show"
            :icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            density="comfortable"
            variant="plain"
            @click="show = !show"
          />
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  subtitle: String,
  balance: Number,
  color: {
    type: String,
    default: 'primary'
  }
})

const show = ref(false)
const formattedBalance = computed(() => {
  if (!show.value) return '••••••••'
  return new Intl.NumberFormat('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(props.balance ?? 0)
})
</script>