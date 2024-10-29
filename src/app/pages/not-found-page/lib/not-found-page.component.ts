import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Router } from '@angular/router'

import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { PlainButtonComponent } from '@fp/ui/buttons'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-not-found-page',
  standalone: true,
  imports: [ContainerComponent, BreadcrumbsComponent, PageTitleComponent, NgOptimizedImage, PlainButtonComponent],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: '404' }]
  public readonly title = 'Извините, страница не найдена'

  private readonly router = inject(Router)

  public handleBackButton(): void {
    this.router.navigate(['/'])
  }
}
