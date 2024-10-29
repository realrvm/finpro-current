import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const projectsFileRoutes: Routes = [
  {
    path: PATHS.projectsFile,
    title: 'Картотека проектов',
    providers: [],
    loadComponent: () => import('@fp/pages/projects-file').then((m) => m.ProjectsFileComponent),
  },
]
