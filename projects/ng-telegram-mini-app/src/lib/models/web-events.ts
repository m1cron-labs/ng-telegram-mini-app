/**
 * Base interface for all WebView events.
 */
export interface WebViewEvent {
  /**
   * Type of the event.
   */
  eventType: WebViewEventType;

  /**
   * Data associated with the event.
   */
  eventData: WebViewEventUnion['eventData'];
}

/**
 * Interface for the WebviewProxy.
 */
export interface WebViewProxy {
  /**
   * Sends an event to the WebView.
   * @param eventType The type of the event.
   * @param eventData The data associated with the event.
   */
  postEvent: (eventType: WebViewEventType, eventData: WebViewEventUnion['eventData']) => void;
}

/**
 * Types of WebView events.
 */
export type WebViewEventType =
  | 'web_app_close'
  | 'web_app_open_popup'
  | 'web_app_request_write_access'
  | 'web_app_request_phone'
  | 'web_app_invoke_custom_method'
  | 'web_app_read_text_from_clipboard'
  | 'web_app_open_scan_qr_popup'
  | 'web_app_close_scan_qr_popup'
  | 'web_app_setup_closing_behavior'
  | 'web_app_set_background_color'
  | 'web_app_set_header_color'
  | 'web_app_data_send'
  | 'web_app_switch_inline_query'
  | 'web_app_trigger_haptic_feedback'
  | 'web_app_open_link'
  | 'web_app_open_tg_link'
  | 'web_app_open_invoice'
  | 'web_app_expand'
  | 'web_app_request_viewport'
  | 'web_app_request_theme'
  | 'web_app_ready'
  | 'web_app_setup_main_button'
  | 'web_app_setup_back_button'
  | 'web_app_setup_settings_button'
  | 'payment_form_submit'
  | 'share_score'
  | 'share_game'
  | 'game_over'
  | 'game_loaded'
  | 'resize_frame';

/**
 * Event for closing the Web App.
 */
export interface WebAppCloseEvent extends WebViewEvent {
  eventType: 'web_app_close';
  eventData: null;
}

/**
 * Event for opening a popup in the Web App.
 */
export interface WebAppOpenPopupEvent extends WebViewEvent {
  eventType: 'web_app_open_popup';
  eventData: {
    /**
     * Title for the popup (optional string, max 64 characters)
     */
    title?: string;
    /**
     * Message of the popup (string, max 256 characters)
     */
    message: string;
    /**
     * An array of button objects (array of 1-3 objects)
     */
    buttons: {
      /**
       * Button type (string, one of ok, close, cancel, default, destructive (in this case, the button must be red))
       */
      type: 'ok' | 'close' | 'cancel' | 'default' | 'destructive';
      /**
       * Button text (string, optional for ok, close and cancel types)
       */
      text?: string;
      /**
       * Button ID (unique string)
       */
      id: string;
    }[];
  };
}

/**
 * Event for requesting write access in the Web App.
 */
export interface WebAppRequestWriteAccessEvent extends WebViewEvent {
  eventType: 'web_app_request_write_access';
  eventData: null;
}

/**
 * Event for requesting the user's phone number in the Web App.
 */
export interface WebAppRequestPhoneEvent extends WebViewEvent {
  eventType: 'web_app_request_phone';
  eventData: null;
}

/**
 * Event for invoking a custom method in the Web App.
 */
export interface WebAppInvokeCustomMethodEvent extends WebViewEvent {
  eventType: 'web_app_invoke_custom_method';
  eventData: {
    /**
     * A string with the ID of the current request
     */
    req_id: string;
    /**
     * A string, containing the name of the called custom method
     */
    method: string;
    /**
     * An object containing the parameters of the method call
     */
    params: Record<string, any>;
  };
}

/**
 * Event for reading text from the system clipboard in the Web App.
 */
export interface WebAppReadTextFromClipboardEvent extends WebViewEvent {
  eventType: 'web_app_read_text_from_clipboard';
  eventData: {
    /**
     * A string with the ID of the current request
     */
    req_id: string;
  };
}

/**
 * Event for opening the QR code scanner in the Web App.
 */
export interface WebAppOpenScanQrPopupEvent extends WebViewEvent {
  eventType: 'web_app_open_scan_qr_popup';
  eventData: {
    /**
     * Optional string, containing the text to be displayed under the 'Scan QR' heading, 0-64 characters.
     */
    text?: string;
  };
}

/**
 * Event for closing the QR code scanner in the Web App.
 */
export interface WebAppCloseScanQrPopupEvent extends WebViewEvent {
  eventType: 'web_app_close_scan_qr_popup';
  eventData: null;
}

/**
 * Event for setting up the closing behavior in the Web App.
 */
export interface WebAppSetupClosingBehaviorEvent extends WebViewEvent {
  eventType: 'web_app_setup_closing_behavior';
  eventData: {
    /**
     * If true, the client should require user confirmation before closing the webview.
     */
    need_confirmation: boolean;
  };
}

/**
 * Event for setting the mine-background color in the Web App.
 */
export interface WebAppSetBackgroundColorEvent extends WebViewEvent {
  eventType: 'web_app_set_background_color';
  eventData: {
    /**
     * A string with a hex RGB color.
     */
    color: string;
  };
}

/**
 * Event for setting the header color in the Web App.
 */
export interface WebAppSetHeaderColorEvent extends WebViewEvent {
  eventType: 'web_app_set_header_color';
  eventData: {
    /**
     * A string with one of the following values: 'bg_color', 'secondary_bg_color'
     */
    color_key?: 'bg_color' | 'secondary_bg_color';
    /**
     * A color in hex RGB format (#ffffff).
     */
    color?: string;
  };
}

/**
 * Event for sending data from the Web App.
 */
export interface WebAppDataSendEvent extends WebViewEvent {
  eventType: 'web_app_data_send';
  eventData: {
    /**
     * A string data field.
     */
    data: string;
  };
}

/**
 * Event for switching inline query in the Web App.
 */
export interface WebAppSwitchInlineQueryEvent extends WebViewEvent {
  eventType: 'web_app_switch_inline_query';
  eventData: {
    /**
     * The inline query that will be inserted in the chat's input field.
     */
    query: string;
    /**
     * An array of strings, containing a combination of users, bots, groups, channels.
     */
    chat_types: ('users' | 'bots' | 'groups' | 'channels')[];
  };
}

/**
 * Event for triggering haptic feedback in the Web App.
 */
export interface WebAppTriggerHapticFeedbackEvent extends WebViewEvent {
  eventType: 'web_app_trigger_haptic_feedback';
  eventData: {
    /**
     * Type of haptic feedback ('impact', 'notification', 'selection_change')
     */
    type: 'impact' | 'notification' | 'selection_change';
    /**
     * Optional. For impact feedbacks, one of ('light', 'medium', 'heavy', 'rigid', 'soft')
     */
    impact_style?: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft';
    /**
     * Optional. For notification feedbacks, one of ('error', 'success', 'warning')
     */
    notification_type?: 'error' | 'success' | 'warning';
  };
}

/**
 * Event for opening a link in the Web App.
 */
export interface WebAppOpenLinkEvent extends WebViewEvent {
  eventType: 'web_app_open_link';
  eventData: {
    /**
     * The URL to open
     */
    url: string;
    /**
     * Optional boolean, if set to true, the link should be opened in Instant View mode if possible.
     */
    try_instant_view?: boolean;
  };
}

/**
 * Event for opening a t.me link in the Web App.
 */
export interface WebAppOpenTgLinkEvent extends WebViewEvent {
  eventType: 'web_app_open_tg_link';
  eventData: {
    /**
     * A string containing the path+query component of a t.me deep link.
     */
    path_full: string;
  };
}

/**
 * Event for opening an invoice in the Web App.
 */
export interface WebAppOpenInvoiceEvent extends WebViewEvent {
  eventType: 'web_app_open_invoice';
  eventData: {
    /**
     * A string containing an invoice deep link.
     */
    slug: string;
  };
}

/**
 * Event for expanding the Web App.
 */
export interface WebAppExpandEvent extends WebViewEvent {
  eventType: 'web_app_expand';
  eventData: null;
}

/**
 * Event for requesting viewport information in the Web App.
 */
export interface WebAppRequestViewportEvent extends WebViewEvent {
  eventType: 'web_app_request_viewport';
  eventData: null;
}

/**
 * Event for requesting theme information in the Web App.
 */
export interface WebAppRequestThemeEvent extends WebViewEvent {
  eventType: 'web_app_request_theme';
  eventData: null;
}

/**
 * Event indicating that the Web App is ready.
 */
export interface WebAppReadyEvent extends WebViewEvent {
  eventType: 'web_app_ready';
  eventData: null;
}

/**
 * Event for setting up the main button in the Web App.
 */
export interface WebAppSetupMainButtonEvent extends WebViewEvent {
  eventType: 'web_app_setup_main_button';
  eventData: {
    /**
     * Whether the main button is visible (boolean, false by default)
     */
    is_visible: boolean;
    /**
     * Whether the main button is active (boolean, true by default)
     */
    is_active: boolean;
    /**
     * Button text (string)
     */
    text: string;
    /**
     * Button color in hex RGB format (string, defaults to the button_color theme parameter)
     */
    color: string;
    /**
     * Button text color in hex RGB format (string, defaults to the button_text_color theme parameter)
     */
    text_color: string;
    /**
     * Indicates whether the button should display a loading indicator (boolean, false by default)
     */
    is_progress_visible: boolean;
  };
}

/**
 * Event for setting up the back button in the Web App.
 */
export interface WebAppSetupBackButtonEvent extends WebViewEvent {
  eventType: 'web_app_setup_back_button';
  eventData: {
    /**
     * Whether to show or hide the back button (boolean)
     */
    is_visible: boolean;
  };
}

/**
 * Event for setting up the settings button in the Web App.
 */
export interface WebAppSetupSettingsButtonEvent extends WebViewEvent {
  eventType: 'web_app_setup_settings_button';
  eventData: {
    /**
     * Whether to show or hide the settings button (boolean)
     */
    is_visible: boolean;
  };
}

/**
 * Event for submitting a payment form in the Web App.
 */
export interface PaymentFormSubmitEvent extends WebViewEvent {
  eventType: 'payment_form_submit';
  eventData: {
    /**
     * The censored credit card title
     */
    title: string;
    /**
     * A service-specific JSON object with information about the payment credentials provided by the user to the payment system.
     */
    credentials: Record<string, any>;
  };
}

/**
 * Event for sharing the score from a game.
 */
export interface ShareScoreEvent extends WebViewEvent {
  eventType: 'share_score';
  eventData: null;
}

/**
 * Event for sharing the game.
 */
export interface ShareGameEvent extends WebViewEvent {
  eventType: 'share_game';
  eventData: null;
}

/**
 * Event indicating that the game is over.
 */
export interface GameOverEvent extends WebViewEvent {
  eventType: 'game_over';
  eventData: null;
}

/**
 * Event indicating that the game has loaded.
 */
export interface GameLoadedEvent extends WebViewEvent {
  eventType: 'game_loaded';
  eventData: null;
}

/**
 * Event for resizing the frame in the Web App.
 */
export interface ResizeFrameEvent extends WebViewEvent {
  eventType: 'resize_frame';
  eventData: {
    /**
     * The new height of the embed frame.
     */
    height: number;
  };
}

/**
 * Union type for all possible WebView events.
 */
export type WebViewEventUnion =
  | WebAppCloseEvent
  | WebAppOpenPopupEvent
  | WebAppRequestWriteAccessEvent
  | WebAppRequestPhoneEvent
  | WebAppInvokeCustomMethodEvent
  | WebAppReadTextFromClipboardEvent
  | WebAppOpenScanQrPopupEvent
  | WebAppCloseScanQrPopupEvent
  | WebAppSetupClosingBehaviorEvent
  | WebAppSetBackgroundColorEvent
  | WebAppSetHeaderColorEvent
  | WebAppDataSendEvent
  | WebAppSwitchInlineQueryEvent
  | WebAppTriggerHapticFeedbackEvent
  | WebAppOpenLinkEvent
  | WebAppOpenTgLinkEvent
  | WebAppOpenInvoiceEvent
  | WebAppExpandEvent
  | WebAppRequestViewportEvent
  | WebAppRequestThemeEvent
  | WebAppReadyEvent
  | WebAppSetupMainButtonEvent
  | WebAppSetupBackButtonEvent
  | WebAppSetupSettingsButtonEvent
  | PaymentFormSubmitEvent
  | ShareScoreEvent
  | ShareGameEvent
  | GameOverEvent
  | GameLoadedEvent
  | ResizeFrameEvent;
