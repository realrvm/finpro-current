import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-services-for-investor',
  standalone: true,
  imports: [CommonModule, ContainerComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './services-for-investor.component.html',
  styles: `
    :host {
      @apply block pb-7 tablet:pb-[90px] desktop:pb-[200px];
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesForInvestorComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Сервисы инвестору' }]
  public readonly title = 'Сервисы инвестору'
}
