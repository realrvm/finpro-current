import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-location-icon',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './location.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationIconComponent {}
