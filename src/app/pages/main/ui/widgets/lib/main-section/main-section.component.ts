import { Component, input } from '@angular/core'

import { IconButtonComponent } from '@fp/ui/buttons'
import { ContainerComponent } from '@fp/ui/container'

@Component({
  selector: 'fp-main-section',
  standalone: true,
  imports: [IconButtonComponent, ContainerComponent],
  template: `
    <div class="pt-[75px] pb-[110px] {{ isLightGrey() ? 'bg-light-grey' : '' }}">
      <fp-container>
        <section class="flex flex-col">
          <div class="flex items-center gap-9 mb-14 flex-wrap">
            <div class="flex flex-col gap-2">
              <h3 class="font-semibold text-[40px]">{{ title() }}</h3>
              <div class="flex">
                @if (isLightGrey()) {
                  <span class="h-1.5 w-1/3 bg-orange"></span>
                  <span class="h-1.5 w-2/3 bg-blue"></span>
                } @else {
                  <span class="h-1.5 w-1/3 bg-blue"></span>
                  <span class="h-1.5 w-2/3 bg-orange"></span>
                }
              </div>
            </div>
            <fp-icon-button
              label="Все"
              className="text-white bg-orange hover:bg-active-orange h-[30px]"
              icon="small-arrow"
            />
          </div>
          <ng-content />
        </section>
      </fp-container>
    </div>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
})
export class MainSectionComponent {
  public readonly isLightGrey = input(false)
  public readonly title = input.required<string>()
}
