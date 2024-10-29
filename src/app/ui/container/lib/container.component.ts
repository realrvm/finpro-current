import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'fp-container',
  standalone: true,
  imports: [],
  template: `
    <div class="max-w-[1300px] w-full px-5 mx-auto h-full">
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      @apply block w-full;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {}
