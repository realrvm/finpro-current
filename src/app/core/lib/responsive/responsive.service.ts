import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { inject, Injectable } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { debounceTime, map, Observable } from 'rxjs'

import { DEBOUNCE_TIME, Responsive } from '@fp/core'

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private readonly breakpointObserver = inject(BreakpointObserver)

  private readonly responsive$: Observable<Responsive> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      debounceTime(DEBOUNCE_TIME),
      map((result) => {
        const breakpoint = result.breakpoints

        if (breakpoint[Breakpoints.XSmall]) {
          return Responsive.HANDSET
        } else if (breakpoint[Breakpoints.Small]) {
          return Responsive.TABLET
        } else return Responsive.DESKTOP
      }),
    )

  public readonly width = toSignal(this.responsive$, {
    initialValue: Responsive.DESKTOP,
  })
}
