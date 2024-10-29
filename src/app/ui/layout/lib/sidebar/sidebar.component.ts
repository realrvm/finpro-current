import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
import { Sidebar } from 'primeng/sidebar'
import { SidebarModule } from 'primeng/sidebar'

import { IconButtonComponent } from '@fp/ui/buttons'
import { ContainerComponent } from '@fp/ui/container'
import {
  BurgerCloseComponent,
  EmailIconComponent,
  LocationIconComponent,
  LogoSmComponent,
  PhoneIconComponent,
  WwwIconComponent,
} from '@fp/ui/icons'

import { BurgerService } from '../burger.service'
import { navItems, navItemsFooter } from '../nav-items'

@Component({
  selector: 'fp-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    ContainerComponent,
    RouterLink,
    RouterLinkActive,
    LogoSmComponent,
    BurgerCloseComponent,
    LocationIconComponent,
    WwwIconComponent,
    PhoneIconComponent,
    EmailIconComponent,
    IconButtonComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar

  private readonly burgerService = inject(BurgerService)
  private readonly router = inject(Router)

  public sidebarVisible = this.burgerService.burgerState

  public readonly navItems = [...navItems, ...navItemsFooter]

  public closeCallback(e: Event): void {
    this.burgerService.setBurgerState(false)
    this.sidebarRef.close(e)
  }

  public redirectToEmail(e: Event): void {
    this.burgerService.setBurgerState(false)
    this.sidebarRef.close(e)
    this.router.navigate(['/services'], { fragment: 'emailForm' })
  }
}
