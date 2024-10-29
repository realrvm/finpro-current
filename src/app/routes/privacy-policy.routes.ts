import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const privacyPolicyRoutes: Routes = [
  {
    path: PATHS.privacyPolicy,
    title: 'Политика конфиденциальности',
    providers: [],
    loadComponent: () => import('@fp/pages/privacy-policy').then((m) => m.PrivacyPolicyComponent),
  },
]
