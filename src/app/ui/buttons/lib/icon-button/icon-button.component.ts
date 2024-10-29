import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ButtonModule } from 'primeng/button'

import { SvgIconComponent } from '@fp/ui/svg-icon'

@Component({
  selector: 'fp-icon-button',
  standalone: true,
  imports: [ButtonModule, SvgIconComponent],
  template: `
    <button
      pButton
      class="flex items-center justify-center gap-3 font-semibold rounded-[9px] py-1.5 px-5 {{ className() }}"
    >
      @if (position() === 'right') {
        <span>{{ label() }}</span>
        <fp-svg-icon [name]="icon()" />
      } @else {
        <fp-svg-icon [name]="icon()" />
        <span>{{ label() }}</span>
      }
    </button>
  `,
  styles: `
    :host {
      @apply tablet:inline-block desktop:inline-block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class IconButtonComponent {
  public readonly label = input<string>('')
  public readonly className = input<string>('')
  public readonly position = input<'right' | 'left'>('right')
  public icon = input<string>('')
}
