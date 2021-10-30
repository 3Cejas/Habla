
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('src/pages/PageInicio.vue'),
        name:'Inicio'
      },
      {
        path: '/acerca_de', component: () => import('src/pages/PageAcercaDe.vue'),
        name: 'Acerca de'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
