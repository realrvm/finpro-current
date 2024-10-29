import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const contactsRoutes: Routes = [
  {
    path: PATHS.contacts,
    title: 'Контакты',
    providers: [],
    loadComponent: () => import('@fp/pages/contacts').then((m) => m.ContactsComponent),
  },
]
