import { inject, Injectable } from '@angular/core';
import { IS_IFRAME, TelegramWebviewProxy, WINDOW } from './token';
import { WebViewEventType, WebViewEventUnion } from './models/web-events';

@Injectable({
  providedIn: 'root',
})
export class EventsAPI {
  private readonly window = inject(WINDOW);
  private readonly isIframe = inject(IS_IFRAME);
  private readonly webviewProxy = inject(TelegramWebviewProxy);

  #trustedTarget = 'https://web.telegram.org';

  set trustedTarget(value: string) {
    this.#trustedTarget = value;
  }

  get trustedTarget(): string {
    return this.#trustedTarget;
  }

  postEvent(eventType: WebViewEventType, eventData: WebViewEventUnion['eventData']) {
    if (this.webviewProxy != null) {
      this.webviewProxy.postEvent(eventType, eventData);
    } else if (this.window.external?.notify) {
      this.window.external.notify(JSON.stringify({ eventType: eventType, eventData: eventData }));
    } else if (this.isIframe) {
      this.window.parent.postMessage(
        JSON.stringify({ eventType: eventType, eventData: eventData }),
        this.trustedTarget,
      );
    } else {
      throw new Error('No available event proxy');
    }
  }
}
