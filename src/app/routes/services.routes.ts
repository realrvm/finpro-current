import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const servicesRoutes: Routes = [
  {
    path: PATHS.services,
    title: 'Сервисы платформы',
    providers: [],
    loadComponent: () => import('@fp/pages/services').then((m) => m.ServicesComponent),
  },
]
