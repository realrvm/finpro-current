import { ChangeDetectionStrategy, Component } from '@angular/core'

import { MainIntroComponent, MainPublicationsComponent } from '@fp/pages/main/widgets'

@Component({
  selector: 'fp-main',
  standalone: true,
  imports: [MainIntroComponent, MainPublicationsComponent],
  template: `
    <fp-main-intro />
    <fp-main-publications />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
