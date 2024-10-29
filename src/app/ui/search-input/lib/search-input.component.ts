import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete'

@Component({
  selector: 'fp-search-input',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="formGroup" class="w-full">
      <p-autoComplete
        formControlName="text"
        [suggestions]="filteredItems"
        (completeMethod)="filtered($event)"
        [virtualScroll]="true"
        [dropdown]="true"
        field="name"
        styleClass="border {{
          isHeader() ? 'tablet:w-[254px] py-2.5 desktop:py-3 bg-bkgrnd' : 'tablet:w-[280px] py-3'
        }} border-grey-strok hover:border-orange rounded-md pl-4 desktop:pl-6 w-full desktop:w-[500px] {{
          customStyles()
        }}"
        inputStyleClass="bg-transparent"
        emptyMessage="Ничего не найдено"
        [placeholder]="placeholder()"
      >
        <ng-template pTemplate="dropdownicon">
          <i class="pi pi-search text-grey-text"></i>
        </ng-template>
      </p-autoComplete>
    </form>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  public isHeader = input<boolean>(true)
  public placeholder = input<string>('Поиск по сайту')
  public customStyles = input<string>('')

  public filteredItems = []

  public formGroup = new FormGroup({
    text: new FormControl<string>(''),
  })

  public filtered(val: AutoCompleteCompleteEvent) {
    console.log(val.query)
  }
}
