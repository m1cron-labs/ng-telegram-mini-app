export interface WebView {
  initParams: Record<string, any>;
  isIframe: boolean;
  onEvent: (eventType: string, callback: Function) => void;
  offEvent: (eventType: string, callback: Function) => void;
  postEvent: (eventType: string, callback: Function, eventData: any) => void;
  receiveEvent: (eventType: string, eventData: any) => void;
  callEventCallbacks: (eventType: string, func: Function) => void;
}
