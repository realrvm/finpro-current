import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const historyOfSuccessRoutes: Routes = [
  {
    path: PATHS.historyOfSuccess,
    title: 'Истории успеха',
    providers: [],
    loadComponent: () => import('@fp/pages/history-of-success').then((m) => m.HistoryOfSuccessComponent),
  },
]
