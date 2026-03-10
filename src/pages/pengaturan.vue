<template>
  <v-sheet class="d-flex flex-column fill-height">
    <v-list class="flex-grow-1">
      <v-list-subheader>Aplikasi</v-list-subheader>
      <v-list-item
        prepend-icon="mdi-account-cash"
        append-icon="mdi-chevron-right"
        title="Kelola Akun"
        to="/akun"
        link
        slim
      />
      <v-list-item
        prepend-icon="mdi-shape"
        append-icon="mdi-chevron-right"
        title="Kelola Kategori"
        to="/kategori"
        link
        slim
      />
      <v-divider/>
      <v-list-subheader>Data</v-list-subheader>
      <v-list-item
        prepend-icon="mdi-import"
        append-icon="mdi-chevron-right"
        title="Impor Data"
        link
      />
      <v-list-item
        prepend-icon="mdi-export"
        append-icon="mdi-chevron-right"
        title="Ekspor Data"
      link
      />
      <v-divider/>
      <v-list-subheader>Bantuan</v-list-subheader>
      <v-list-item
        prepend-icon="mdi-bug"
        append-icon="mdi-chevron-right"
        title="Laporkan Bug"
        link
      />
      <v-list-item
        prepend-icon="mdi-comment-quote"
        append-icon="mdi-chevron-right"
        title="Berikan Masukan"
        link
      />
      <v-list-item
        prepend-icon="mdi-gift"
        append-icon="mdi-chevron-right"
        title="Pengembang Dukungan"
        link
      />
    </v-list>

    <v-container>
      <div class="text-center text-label-large font-weight-light">Version 0.1.0</div>
      <div class="text-center text-label-large font-weight-light">Made by bachiim</div>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { useAppBar } from '../composables/useAppBar';

const { setAppBar } = useAppBar()
setAppBar({ center: {type: 'title', text: 'Pengaturan'} })

</script>