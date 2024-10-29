import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const potentialOfKuzbassRoutes: Routes = [
  {
    path: PATHS.potentialOfKuzbass,
    title: 'Потенциал Кузбасса',
    providers: [],
    loadComponent: () => import('@fp/pages/potential-of-kuzbass').then((m) => m.PotentialOfKuzbassComponent),
  },
]
