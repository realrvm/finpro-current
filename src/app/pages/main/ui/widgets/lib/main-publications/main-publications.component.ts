import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, signal } from '@angular/core'

import { MainSectionComponent } from '@fp/pages/main/widgets'
import { PlainButtonComponent } from '@fp/ui/buttons'

@Component({
  selector: 'fp-main-publications',
  standalone: true,
  imports: [CommonModule, PlainButtonComponent, MainSectionComponent],
  templateUrl: './main-publications.component.html',
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPublicationsComponent {
  public readonly title = 'Публикации'
  public readonly publicationsButtons = signal([
    { id: 1, label: 'Новости', isActive: false },
    { id: 2, label: 'Статьи', isActive: false },
    { id: 3, label: 'Экспертное мнение', isActive: false },
    { id: 4, label: 'Законодательство', isActive: true },
  ])

  handleSortBtn(id: number): void {
    this.publicationsButtons.update((prev) => {
      return prev.map((btn) => {
        if (btn.id === id) {
          return { ...btn, isActive: true }
        }
        return { ...btn, isActive: false }
      })
    })

    alert('TODO: сортировка?')
  }
}
