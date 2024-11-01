import 'hammerjs'

import { ApplicationConfig, mergeApplicationConfig } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'

import { provideHammer } from '@fp/core'

import { appConfig } from './app.config'

const browserConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideHammer()],
}

export const config = mergeApplicationConfig(appConfig, browserConfig)
