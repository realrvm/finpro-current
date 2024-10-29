import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const marketParticipantsRoutes: Routes = [
  {
    path: PATHS.marketParticipants,
    title: 'Участники рынка',
    providers: [],
    loadComponent: () => import('@fp/pages/market-participants').then((m) => m.MarketParticipantsComponent),
  },
]
