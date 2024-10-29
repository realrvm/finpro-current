import { ChangeDetectionStrategy, Component } from '@angular/core'

import { Responsive, ResponsiveDirective } from '@fp/core'
import { ViMdComponent, ViSmComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-vi',
  standalone: true,
  imports: [ViMdComponent, ViSmComponent, ResponsiveDirective],
  template: `
    <button
      (click)="handleClick()"
      class="border border-grey-strok rounded-lg  p-2.5 flex items-center gap-2 desktop:gap-3"
    >
      <fp-vi-md *fpResponsive="desktop" />
      <fp-vi-sm *fpResponsive="tablet" />
      <fp-vi-sm *fpResponsive="handset" />
      <span class="text-[9px] desktop:text-sm text-left text-blue hover:text:hover-blue leading-none"
        >Версия для <br />
        слабовидящих</span
      >
    </button>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViComponent {
  public readonly desktop = Responsive.DESKTOP
  public readonly tablet = Responsive.TABLET
  public readonly handset = Responsive.HANDSET

  public handleClick() {
    alert('TODO: обработка кнопки')
  }
}
