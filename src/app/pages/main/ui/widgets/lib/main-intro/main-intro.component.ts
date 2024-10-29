import { ChangeDetectionStrategy, Component } from '@angular/core'

import { ContainerComponent } from '@fp/ui/container'

@Component({
  selector: 'fp-main-intro',
  standalone: true,
  imports: [ContainerComponent],
  templateUrl: './main-intro.component.html',
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainIntroComponent {}
