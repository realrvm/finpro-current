import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { Responsive, ResponsiveDirective } from '@fp/core'

import { SidebarComponent } from '../sidebar/sidebar.component'

@Component({
  selector: 'fp-layout',
  standalone: true,
  imports: [RouterOutlet, ResponsiveDirective, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public readonly not_desktop = Responsive.NOTDESKTOP
}
