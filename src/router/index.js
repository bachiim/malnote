import { createMemoryHistory, createWebHashHistory, createRouter } from "vue-router"

const routes = [
  {
    path: '/',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Beranda',
        component: () => import('../pages/beranda.vue'),
      },
      {
        path: 'laporan',
        name: 'Laporan',
        component: () => import('../pages/laporan.vue'),
      },
      {
        path: 'transaksi',
        component: () => import('../layouts/blank.vue'),
        children: [
          {
            path: '',
            name: 'TransaksiCreate',
            component: () => import('../pages/transaksi/index.vue')
          },
        ]
      },
      {
        path: 'gtw',
        name: 'Gtw',
        component: () => import('../pages/gtw.vue'),
      },
      {
        path: 'pengaturan',
        name: 'Pengaturan',
        component: () => import('../pages/pengaturan.vue'),
      },
      {
        path: 'akun',
        component: () => import('../layouts/blank.vue'),
        children: [
          {
            path: '',
            name: 'AkunList',
            component: () => import('../pages/akun/index.vue')
          },
          {
            path: 'tambah',
            name: 'AkunAdd',
            component: () => import('../pages/akun/tambah.vue')
          },
          {
            path: 'detail',
            name: 'AkunDetail',
            component: () => import('../pages/akun/detail.vue')
          },
        ]
      },
      {
        path: 'kategori',
        component: () => import('../layouts/blank.vue'),
        children: [
          {
            path: '',
            name: 'KategoriList',
            component: () => import('../pages/kategori/index.vue')
          },
          {
            path: 'tambah',
            name: 'KategoriAdd',
            component: () => import('../pages/kategori/tambah.vue')
          },
        ]
      },
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router