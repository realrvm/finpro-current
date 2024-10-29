import { NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SaveHtmlPipe } from '@fp/core'
import { PublicationsService } from '@fp/pages/publications/services'
import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-publication',
  standalone: true,
  imports: [ContainerComponent, BreadcrumbsComponent, PageTitleComponent, NgOptimizedImage, SaveHtmlPipe],
  template: `
    <fp-container>
      <fp-breadcrumbs [items]="items" />
      <fp-page-title [title]="title" />
      <div class="h-[239px] w-full relative my-10">
        <img [ngSrc]="image" alt="search result" class="object-cover" fill priority />
      </div>
      <p>{{ date }}</p>
      <div [innerHTML]="descr | saveHtml" class="mt-10 mb-[100px]"></div>
    </fp-container>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationComponent implements OnInit {
  public items: { route?: string; label: string }[] = [
    { route: '/', label: 'Главная' },
    { route: '/publications', label: 'Публикации' },
  ]

  public title = ''
  public image = ''
  public descr = ''
  public date = ''

  private readonly publicationsService = inject(PublicationsService)
  private readonly route = inject(ActivatedRoute)

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    const {
      title,
      image,
      description,
      created_at: createdAt,
    } = this.publicationsService.posts().find((post) => post.id === Number(id)) ?? { title: '' }

    this.title = this.title + title
    this.image = this.image + image
    this.descr = this.descr + description
    this.date = this.date + createdAt

    this.items = [...this.items, { label: title }]
  }
}
