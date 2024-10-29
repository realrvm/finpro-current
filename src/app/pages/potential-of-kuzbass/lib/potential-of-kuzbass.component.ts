import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-potential-of-kuzbass',
  standalone: true,
  imports: [CommonModule, ContainerComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './potential-of-kuzbass.component.html',
  styles: `
    :host {
      @apply flex flex-col pb-7 tablet:pb-[70px] desktop:pb-[130px];
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PotentialOfKuzbassComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Потенциал Кузбасса' }]
  public readonly title = 'Потенциал Кузбасса'
}
