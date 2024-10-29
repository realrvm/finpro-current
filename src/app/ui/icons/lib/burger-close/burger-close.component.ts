import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-burger-close',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './burger-close.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerCloseComponent {}
