import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'

import { Responsive, ResponsiveDirective } from '@fp/core'
import { ContainerComponent } from '@fp/ui/container'
import { SearchInputComponent } from '@fp/ui/search-input'

import { navItems } from '../nav-items'

@Component({
  selector: 'fp-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ContainerComponent, SearchInputComponent, ResponsiveDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  public readonly handset = Responsive.HANDSET
  public readonly not_handset = Responsive.NOTHANDSET

  public readonly navItems = navItems
}
