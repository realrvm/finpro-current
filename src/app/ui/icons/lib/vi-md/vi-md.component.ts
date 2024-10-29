import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-vi-md',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './vi-md.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViMdComponent {}
