import { NgIf, NgOptimizedImage } from '@angular/common'
import { HttpErrorResponse } from '@angular/common/http'
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SaveHtmlPipe } from '@fp/core'
import { PublicationsService } from '@fp/pages/publications/services'
import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-publication',
  standalone: true,
  imports: [ContainerComponent, BreadcrumbsComponent, PageTitleComponent, NgOptimizedImage, SaveHtmlPipe, NgIf],
  template: `
    <fp-container>
      <fp-breadcrumbs [items]="items" />
      <fp-page-title [title]="title()" />
      <p>{{ errorMessage() }}</p>
      <div class="h-[239px] w-full relative my-10">
        <img *ngIf="image" [ngSrc]="image" alt="search result" class="object-cover" fill priority />
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

  public title = signal('')
  public image = ''
  public descr = ''
  public date = ''

  public errorMessage = signal('')

  private readonly publicationsService = inject(PublicationsService)
  private readonly route = inject(ActivatedRoute)

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.publicationsService.getPost(id).subscribe(
      (post) => {
        this.title.set(post.title)
        this.image = this.image + post.image
        this.descr = this.descr + post.description
        this.date = this.date + post.created_at
        console.log(post)

        this.items = [...this.items, { label: post.title }]
      },
      (err: HttpErrorResponse) => this.errorMessage.set(err.statusText),
    )
  }
}
