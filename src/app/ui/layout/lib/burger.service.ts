import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class BurgerService {
  public burgerState = signal<boolean>(false)

  public setBurgerState(state: boolean) {
    this.burgerState.set(state)
  }
}
