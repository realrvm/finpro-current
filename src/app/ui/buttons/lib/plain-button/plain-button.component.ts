import { Component, input } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'fp-plain-button',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <!-- eslint-disable-next-line @angular-eslint/template/elements-content -->
    <button
      pButton
      label="{{ label() }}"
      class="flex items-center shadow-none justify-center font-semibold rounded-[9px] py-1.5 px-5 {{ className() }}"
    ></button>
  `,
  styles: `
    :host {
      @apply inline-block;
    }
  `,
})
export class PlainButtonComponent {
  public label = input.required<string>()
  public disabled = input<boolean>(false)
  public className = input<string>('')
}
