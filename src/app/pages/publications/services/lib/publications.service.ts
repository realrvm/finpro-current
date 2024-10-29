import { inject, Injectable } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { map, Observable } from 'rxjs'

import { ApiService } from '@fp/core'

import type { PublicationsCategory, PublicationsPost } from '../../common'

@Injectable()
export class PublicationsService {
  private readonly apiService = inject(ApiService)

  public getCategories(): Observable<PublicationsCategory[]> {
    return this.apiService.get<PublicationsCategory[]>('api/v1/publications/categories/').pipe(
      map((cat) =>
        cat.map((item, index) => {
          return index ? { ...item, isActive: false } : { ...item, isActive: true }
        }),
      ),
    )
  }

  public getPosts(): Observable<PublicationsPost[]> {
    return this.apiService.get('api/v1/publications/post/')
  }

  public posts = toSignal(this.getPosts(), { initialValue: [] })
}
