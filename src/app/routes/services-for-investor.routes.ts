import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const servicesForInvestorRoutes: Routes = [
  {
    path: PATHS.servicesForInvestor,
    title: 'Сервисы для инвестора',
    providers: [],
    loadComponent: () => import('@fp/pages/services-for-investor').then((m) => m.ServicesForInvestorComponent),
  },
]
