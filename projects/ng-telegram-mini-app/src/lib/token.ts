import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { Utils } from './models/utils';
import { WebApp } from './models/web-app';
import { WebView } from './models/web-view';
import { WebViewProxy } from './models/web-events';

export const WINDOW = new InjectionToken<Window>('WINDOW', {
  providedIn: 'platform',
  factory: () => {
    const document = inject(DOCUMENT);
    const window = document.defaultView;
    if (!window) {
      throw new Error('View not found');
    }
    return window;
  },
});

export const IS_IFRAME = new InjectionToken<boolean>('IS_IFRAME', {
  providedIn: 'platform',
  factory: () => {
    const window = inject(WINDOW);
    return window.parent != null && window != window.parent;
  },
});

export const TelegramWebApp = new InjectionToken<WebApp>('TelegramWebApp', {
  providedIn: 'platform',
  factory: () => {
    const window = inject(WINDOW);
    if (!window.Telegram?.WebApp) {
      throw new Error(
        'Telegram context not found. Initialize mini app first: https://core.telegram.org/bots/webapps#initializing-mini-apps',
      );
    }
    return window.Telegram.WebApp;
  },
});

export const TelegramWebView = new InjectionToken<WebView>('TelegramWebView', {
  providedIn: 'platform',
  factory: () => {
    const window = inject(WINDOW);
    if (!window.Telegram?.WebView) {
      throw new Error(
        'Telegram context not found. Initialize mini app first: https://core.telegram.org/bots/webapps#initializing-mini-apps',
      );
    }
    return window.Telegram.WebView;
  },
});

export const TelegramUtils = new InjectionToken<Utils>('TelegramUtils', {
  providedIn: 'platform',
  factory: () => {
    const window = inject(WINDOW);
    if (!window.Telegram?.Utils) {
      throw new Error(
        'Telegram context not found. Initialize mini app first: https://core.telegram.org/bots/webapps#initializing-mini-apps',
      );
    }
    return window.Telegram.Utils;
  },
});

export const TelegramWebviewProxy = new InjectionToken<WebViewProxy>('TelegramWebviewProxy', {
  providedIn: 'platform',
  factory: () => {
    const window = inject(WINDOW);
    if (!window.TelegramWebviewProxy) {
      throw new Error('TelegramWebviewProxy not found');
    }
    return window.TelegramWebviewProxy;
  },
});
