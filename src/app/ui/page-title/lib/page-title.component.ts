import { Component, input } from '@angular/core'

@Component({
  selector: 'fp-page-title',
  standalone: true,
  imports: [],
  template: `
    <h1
      class="font-semibold text-[28px] tablet:text-[40px] desktop:text-[40px]
      leading-[1.1] mt-6 tablet:mt-0 desktop:mt-0"
    >
      {{ title() }}
    </h1>
  `,
  styles: ``,
})
export class PageTitleComponent {
  public title = input<string>('')
}
