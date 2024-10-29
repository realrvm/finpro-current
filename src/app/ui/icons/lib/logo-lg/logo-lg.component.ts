import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-logo-lg',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './logo-lg.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoLgComponent {}
