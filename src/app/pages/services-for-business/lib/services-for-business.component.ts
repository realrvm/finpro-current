import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-services-for-business',
  standalone: true,
  imports: [CommonModule, ContainerComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './services-for-business.component.html',
  styles: `
    :host {
      @apply block pb-7 tablet:pb-[90px] desktop:pb-[200px];
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesForBusinessComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Сервисы бизнесу' }]
  public readonly title = 'Сервисы бизнесу'
}
