import { NgIf } from '@angular/common'
import { Component, input } from '@angular/core'
import { MenuItem } from 'primeng/api'
import { BreadcrumbModule } from 'primeng/breadcrumb'

@Component({
  selector: 'fp-breadcrumbs',
  standalone: true,
  imports: [BreadcrumbModule, NgIf],
  template: ` <p-breadcrumb [model]="items()" styleClass="px-0 my-5 handset:hidden text-sm bg-transparent">
    <ng-template pTemplate="item" let-item>
      <ng-container *ngIf="item.route; else currentPage">
        <a [routerLink]="item.route" class="p-menuitem-link">
          <span class="text-blue font-semibold">{{ item.label }}</span>
        </a>
      </ng-container>
      <ng-template #currentPage>
        <span class="text-grey-indicator underline">{{ item.label }}</span>
      </ng-template>
    </ng-template>
    <ng-template pTemplate="separator"><span class="text-blue"> / </span></ng-template>
  </p-breadcrumb>`,
  styles: ``,
})
export class BreadcrumbsComponent {
  public items = input<MenuItem[]>([])
}
