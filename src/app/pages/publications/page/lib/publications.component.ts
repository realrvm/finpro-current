import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core'
import { Router } from '@angular/router'

import type { PublicationsCategory, PublicationsPost } from '@fp/pages/publications/common'
import { PublicationsService } from '@fp/pages/publications/services'
import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { PlainButtonComponent } from '@fp/ui/buttons'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'
import { SearchInputComponent } from '@fp/ui/search-input'
import { SubscriptionFormComponent } from '@fp/ui/subscription-form'

@Component({
  selector: 'fp-publications',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    PlainButtonComponent,
    NgOptimizedImage,
    SearchInputComponent,
    SubscriptionFormComponent,
  ],
  templateUrl: './publications.component.html',
  styles: `
    :host {
      @apply block pb-[82px] desktop:pb-[92px];
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationsComponent implements OnInit {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Публикации' }]
  public readonly title = 'Публикации'

  private readonly publicationsService = inject(PublicationsService)
  private readonly router = inject(Router)

  public categories: WritableSignal<PublicationsCategory[]> = signal([])
  public posts: WritableSignal<PublicationsPost[]> = signal([])
  public mainNews: WritableSignal<PublicationsPost[]> = signal([])

  ngOnInit(): void {
    this.publicationsService.getCategories().subscribe((cat) => this.categories.set(cat))

    this.publicationsService.getPosts().subscribe((posts) => {
      const mainNewsPosts = posts.filter((post) => post.category.title === 'Главные новости')
      this.mainNews.set(mainNewsPosts)
      this.posts.set(posts)
    })
  }

  public handleSortBtn(id: number): void {
    this.categories.update((prev) => {
      return prev.map((btn) => {
        if (btn.id === id) {
          return { ...btn, isActive: true }
        }
        return { ...btn, isActive: false }
      })
    })
  }

  public goToPost(id: string): void {
    this.router.navigate([`/publications/${id}`])
  }
}
