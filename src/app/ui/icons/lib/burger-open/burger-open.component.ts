import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-burger-open',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './burger-open.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerOpenComponent {}
