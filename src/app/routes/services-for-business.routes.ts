import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const servicesForBusinessRoutes: Routes = [
  {
    path: PATHS.servicesForBusiness,
    title: 'Сервисы для бизнеса',
    providers: [],
    loadComponent: () => import('@fp/pages/services-for-business').then((m) => m.ServicesForBusinessComponent),
  },
]
