import { inject, Pipe, PipeTransform } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Pipe({
  name: 'saveHtml',
  standalone: true,
})
export class SaveHtmlPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer)

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value)
  }
}
