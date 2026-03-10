<template>
  <v-sheet class="fill-height">
    <AccountCard
      icon="mdi-credit-card"
      title="BCA"
      subtitle="Rekening utama"
      :balance="13000000"
      color="primary"
      elevation="1"
      class="ma-4"
      link
      to="/akun/detail"
    />
    <AccountCard
      icon="mdi-cash"
      title="Cash"
      subtitle=""
      :balance="13000000"
      color="brown"
      elevation="1"
      class="ma-4"
      link
    />
    <AccountCard
      icon="mdi-wallet"
      title="Gopay"
      subtitle=""
      :balance="13000000"
      color="light-blue"
      elevation="1"
      class="ma-4"
      link
    />
    <AccountCard
      icon="mdi-wallet"
      title="Linkaja"
      subtitle="Rekening utama"
      :balance="13000000"
      color="error"
      elevation="1"
      class="ma-4"
      link
    />
    <AccountCard
      icon="mdi-safe"
      title="Qirod"
      subtitle="Investasi"
      :balance="13000000"
      color="success"
      elevation="1"
      class="ma-4"
      link
    />
    <AccountCard
      icon="mdi-safe"
      title="Qirod"
      subtitle="Investasi"
      :balance="13000000"
      color="success"
      elevation="1"
      class="ma-4"
      link
    />
  </v-sheet>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAppBar } from '../../composables/useAppBar';
import AccountCard from '../../components/AccountCard.vue';

const router = useRouter()
const { setAppBar } = useAppBar()
setAppBar({
  left: 'back',
  center: {type: 'title', text: 'Akun'},
  right: 'add',
  onAdd: () => router.push({name: 'AkunAdd'})
})
</script>