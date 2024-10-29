import { inject, Injectable } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { map, Observable } from 'rxjs'

import { ApiService } from '@fp/core'

import { About } from '../../common'

@Injectable()
export class AboutService {
  private readonly apiService = inject(ApiService)

  private getAboutDate(): Observable<About> {
    return this.apiService.get<About[]>('api/v1/general/about/').pipe(map((about) => about[0]))
  }

  public readonly aboutData = toSignal(this.getAboutDate(), {
    initialValue: { id: 1, title: 'О проекте', description: '' },
  })
}
