import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'
import { PublicationsService } from '@fp/pages/publications/services'

export const publicationsRoutes: Routes = [
  {
    path: PATHS.publications,
    providers: [PublicationsService],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main',
        title: 'Публикации',
        loadComponent: () => import('@fp/pages/publications').then((m) => m.PublicationsComponent),
      },
      {
        path: ':id',
        title: 'Публикация',
        loadComponent: () => import('@fp/pages/publications').then((m) => m.PublicationComponent),
      },
    ],
  },
]
