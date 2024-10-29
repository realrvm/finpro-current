import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-vi-sm',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './vi-sm.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViSmComponent {}
