import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { SaveHtmlPipe } from '@fp/core'
import { AboutService } from '@fp/pages/about/services'
import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-about',
  standalone: true,
  imports: [CommonModule, ContainerComponent, BreadcrumbsComponent, PageTitleComponent, SaveHtmlPipe],
  templateUrl: './about.component.html',
  styles: `
    :host {
      @apply flex flex-col pb-7 tablet:pb-[90px] desktop:pb-[200px];
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'О проекте' }]
  public readonly title = 'О проекте'

  private readonly aboutService = inject(AboutService)

  public readonly aboutData = this.aboutService.aboutData
}
