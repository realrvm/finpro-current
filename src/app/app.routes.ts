import { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@fp/ui/layout').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('@fp/ui/layout').then((m) => m.HeaderComponent),
        outlet: 'header',
      },
      {
        path: '',
        loadComponent: () => import('@fp/ui/layout').then((m) => m.NavComponent),
        outlet: 'nav',
      },
      {
        path: '',
        loadComponent: () => import('@fp/ui/layout').then((m) => m.FooterComponent),
        outlet: 'footer',
      },
      {
        path: '',
        redirectTo: PATHS.main,
        pathMatch: 'full',
      },
      {
        path: PATHS.main,
        title: 'Главная страница',
        loadComponent: () => import('@fp/pages/main').then((m) => m.MainComponent),
      },
      {
        path: '',
        loadChildren: () => import('./routes/services-for-business.routes').then((m) => m.servicesForBusinessRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/services-for-investor.routes').then((m) => m.servicesForInvestorRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/market-participants.routes').then((m) => m.marketParticipantsRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/projects-file.routes').then((m) => m.projectsFileRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/publications.routes').then((m) => m.publicationsRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/potential-of-kuzbass.routes').then((m) => m.potentialOfKuzbassRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/services.routes').then((m) => m.servicesRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/about.routes').then((m) => m.aboutRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/contacts.routes').then((m) => m.contactsRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/history-of-success.routes').then((m) => m.historyOfSuccessRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/privacy-policy.routes').then((m) => m.privacyPolicyRoutes),
      },
      {
        path: '',
        loadChildren: () => import('./routes/errors.routes').then((m) => m.errorsRoutes),
      },
    ],
  },
]
