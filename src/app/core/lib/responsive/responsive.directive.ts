import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core'

import { Responsive, ResponsiveService } from '@fp/core'

@Directive({
  selector: '[fpResponsive]',
  standalone: true,
})
export class ResponsiveDirective {
  private readonly templateRef = inject(TemplateRef)
  private readonly viewContainer = inject(ViewContainerRef)
  private readonly responsiveService = inject(ResponsiveService)

  public fpResponsive = input<Responsive | string>(Responsive.DESKTOP)

  private readonly effect = effect(() => {
    const width = this.responsiveService.width()
    const attrValue = this.fpResponsive()

    if (attrValue.startsWith('not_')) {
      const exception = attrValue.replace('not_', '')

      if (width === exception) {
        this.viewContainer.clear()
      } else {
        this.viewContainer.clear()
        this.viewContainer.createEmbeddedView(this.templateRef)
      }
    } else {
      if (width === attrValue) {
        this.viewContainer.clear()
        this.viewContainer.createEmbeddedView(this.templateRef)
      } else {
        this.viewContainer.clear()
      }
    }
  })
}
