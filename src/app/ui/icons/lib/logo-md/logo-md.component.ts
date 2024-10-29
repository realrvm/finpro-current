import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-logo-md',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './logo-md.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoMdComponent {}
