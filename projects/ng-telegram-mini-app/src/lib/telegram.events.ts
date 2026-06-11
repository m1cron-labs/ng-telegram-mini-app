import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebAppEventType } from './models/enums/web-app.event.type';
import { WebAppEventDataMap } from './models/web-app.event-data';
import { TelegramWebApp } from './token';

/**
 * Typed RxJS bridge over Telegram.WebApp.onEvent / offEvent.
 *
 * Subscribing registers a handler via WebApp.onEvent; unsubscribing removes it via WebApp.offEvent.
 * Each subscription registers its own handler.
 *
 * @example
 * private readonly events = inject(TelegramEvents);
 *
 * this.events.on('viewportChanged').subscribe(({ isStateStable }) => { ... });
 * this.events.on('invoiceClosed').subscribe(({ url, status }) => { ... });
 * this.events.on('themeChanged').subscribe(() => { ... }); // Observable<void>
 */
@Injectable({
  providedIn: 'root',
})
export class TelegramEvents {
  private readonly webApp = inject(TelegramWebApp);

  /**
   * Emits every time the given WebApp event occurs.
   * The emitted value is the event payload, or undefined for events without parameters.
   * @param eventType
   */
  on<T extends WebAppEventType>(eventType: T): Observable<WebAppEventDataMap[T]> {
    return new Observable<WebAppEventDataMap[T]>(subscriber => {
      const handler = (eventData?: WebAppEventDataMap[T]) => subscriber.next(eventData as WebAppEventDataMap[T]);
      this.webApp.onEvent(eventType, handler);
      return () => this.webApp.offEvent(eventType, handler);
    });
  }
}
