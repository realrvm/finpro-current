import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-services',
  standalone: true,
  imports: [CommonModule, ContainerComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './services.component.html',
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Сервисы платформы' }]
  public readonly title = 'Сервисы платформы'
}
