import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'

import { ContainerComponent } from '@fp/ui/container'
import { LogoMdComponent, LogoSmComponent } from '@fp/ui/icons'
import { SearchInputComponent } from '@fp/ui/search-input'
import { ViComponent } from '@fp/ui/vi'

import { navItems, navItemsFooter } from '../nav-items'

@Component({
  selector: 'fp-footer',
  standalone: true,
  imports: [ContainerComponent, RouterLink, SearchInputComponent, ViComponent, LogoMdComponent, LogoSmComponent],
  templateUrl: './footer.component.html',
  styles: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public readonly navItems = [...navItems, ...navItemsFooter]
}
