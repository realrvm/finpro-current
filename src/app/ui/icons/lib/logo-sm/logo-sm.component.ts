import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-logo-sm',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './logo-sm.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoSmComponent {}
