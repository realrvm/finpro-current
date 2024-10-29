import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-privacy-policy',
  standalone: true,
  imports: [CommonModule, ContainerComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './privacy-policy.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Политика конфиденциальности' }]
  public readonly title = 'Политика конфиденциальности'
}
