import { WebViewEventDataMap, WebViewEventType } from './web-events';

/**
 * Callback registered via WebView.onEvent. Invoked as callback(eventType, eventData).
 */
export type WebViewEventCallback<T extends WebViewEventType> = (eventType: T, eventData: WebViewEventDataMap[T]) => void;

export interface WebView {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initParams: Record<string, any>;
  isIframe: boolean;
  onEvent: {
    <T extends WebViewEventType>(eventType: T, callback: WebViewEventCallback<T> | Function): void;
    (eventType: string, callback: Function): void;
  };
  offEvent: {
    <T extends WebViewEventType>(eventType: T, callback: WebViewEventCallback<T> | Function): void;
    (eventType: string, callback: Function): void;
  };
  postEvent: {
    <T extends WebViewEventType>(eventType: T, callback?: ((error?: unknown) => void) | Function | null, eventData?: WebViewEventDataMap[T]): void;
    (eventType: string, callback: Function, eventData: unknown): void;
  };
  receiveEvent: {
    <T extends WebViewEventType>(eventType: T, eventData: WebViewEventDataMap[T]): void;
    (eventType: string, eventData: unknown): void;
  };
  callEventCallbacks: (eventType: string, func: (callback: Function) => void) => void;
}
