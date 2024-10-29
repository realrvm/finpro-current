import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'
import { AboutService } from '@fp/pages/about/services'

export const aboutRoutes: Routes = [
  {
    path: PATHS.about,
    title: 'О проекте',
    providers: [AboutService],
    loadComponent: () => import('@fp/pages/about').then((m) => m.AboutComponent),
  },
]
