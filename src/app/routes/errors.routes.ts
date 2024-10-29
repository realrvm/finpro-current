import type { Routes } from '@angular/router'

export const errorsRoutes: Routes = [
  {
    path: '**',
    title: 'Страница не найдена',
    loadComponent: () => import('@fp/pages/not-found-page').then((m) => m.NotFoundPageComponent),
  },
]
