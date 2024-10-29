import { HttpClient } from '@angular/common/http'
import { Component, inject, input, OnChanges, OnDestroy } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Subscription, tap } from 'rxjs'

@Component({
  selector: 'fp-svg-icon',
  standalone: true,
  imports: [],
  template: `<span [innerHTML]="svgIcon"></span>`,
  styles: `
    :host {
      @apply w-4;
    }
  `,
})
export class SvgIconComponent implements OnChanges, OnDestroy {
  private readonly http = inject(HttpClient)
  private readonly sanitizer = inject(DomSanitizer)
  private sub!: Subscription

  public name = input<string>('')

  public svgIcon?: SafeHtml

  ngOnChanges(): void {
    if (!this.name()) {
      this.svgIcon = ''
      return
    }

    this.sub = this.http
      .get(`assets/images/svg/${this.name()}.svg`, { responseType: 'text' })
      .pipe(tap((value) => (this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value))))
      .subscribe()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
