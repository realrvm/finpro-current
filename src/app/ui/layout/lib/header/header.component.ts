import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { RouterLink } from '@angular/router'

import { Responsive, ResponsiveDirective } from '@fp/core'
import { ContainerComponent } from '@fp/ui/container'
import { BurgerOpenComponent, LogoMdComponent, LogoSmComponent } from '@fp/ui/icons'
import { SearchInputComponent } from '@fp/ui/search-input'
import { ViComponent } from '@fp/ui/vi'

import { BurgerService } from '../burger.service'

@Component({
  selector: 'fp-header',
  standalone: true,
  imports: [
    LogoMdComponent,
    LogoSmComponent,
    ResponsiveDirective,
    ContainerComponent,
    RouterLink,
    SearchInputComponent,
    BurgerOpenComponent,
    ViComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly desktop = Responsive.DESKTOP
  public readonly not_desktop = Responsive.NOTDESKTOP
  public readonly not_handset = Responsive.NOTHANDSET

  private readonly burgerService = inject(BurgerService)

  public handleBurgerClick(): void {
    this.burgerService.setBurgerState(true)
  }
}
