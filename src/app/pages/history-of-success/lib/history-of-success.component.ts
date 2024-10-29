import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-history-of-success',
  standalone: true,
  imports: [CommonModule, ContainerComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './history-of-success.component.html',
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryOfSuccessComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Истории успеха' }]
  public readonly title = 'Истории успеха'
}
