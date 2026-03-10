<template>
  <AppBar/>
  <v-main class="fill-height">
    <RouterView/>
  </v-main>
  <BottomNav v-if="showBottomNav"/>
</template>

<script setup>
import AppBar from '../components/AppBar.vue';
import BottomNav from '../components/bottomnav.vue';
import { useLayout } from '../composables/useLayout';

const { showBottomNav } = useLayout()
</script>