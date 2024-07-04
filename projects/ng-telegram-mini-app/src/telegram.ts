import { Utils } from './lib/models/utils';
import { WebApp } from './lib/models/web-app';
import { WebView } from './lib/models/web-view';
import { WebViewProxy } from './lib/models/web-events';

declare global {
  interface Window {
    Telegram: {
      WebView: WebView;
      Utils: Utils;
      WebApp: WebApp;
    };
    TelegramWebviewProxy: WebViewProxy;
  }

  interface External {
    notify?: (message: string) => void;
  }
}
