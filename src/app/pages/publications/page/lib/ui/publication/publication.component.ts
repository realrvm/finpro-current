import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { PublicationsService } from '@fp/pages/publications/services'
import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-publication',
  standalone: true,
  imports: [ContainerComponent, BreadcrumbsComponent, PageTitleComponent],
  template: `
    <fp-container>
      <fp-breadcrumbs [items]="items" />
      <fp-page-title [title]="post().title" />
    </fp-container>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationComponent {
  public items: { route?: string; label: string }[] = [
    { route: '/', label: 'Главная' },
    { route: '/publications', label: 'Публикации' },
  ]

  private readonly publicationsService = inject(PublicationsService)
  private readonly route = inject(ActivatedRoute)

  public readonly post = computed(() => {
    const id = this.route.snapshot.paramMap.get('id')
    const posts = this.publicationsService.posts()

    const post = posts.find((p) => p.id === Number(id))

    if (post) {
      this.items = [...this.items, { label: post.title }]
      return post
    }

    return { title: '' }
  })
}
