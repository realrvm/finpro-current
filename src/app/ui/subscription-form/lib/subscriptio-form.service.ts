import { inject, Injectable } from '@angular/core'

import { ApiService } from '@fp/core'

interface SubscriptionData {
  email: string | null | undefined
  consent: boolean
}

@Injectable({ providedIn: 'root' })
export class SubscriptionFormService {
  private readonly apiService = inject(ApiService)

  public postSubscriptionData(data: SubscriptionData) {
    this.apiService.post<unknown, SubscriptionData>('api/v1/publications/subscribe/', data)
  }
}
