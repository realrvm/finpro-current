import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-www-icon',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './www.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WwwIconComponent {}
