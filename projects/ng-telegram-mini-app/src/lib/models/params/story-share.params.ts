export interface StoryShareParams {
  /**
   * Optional.
   * The caption to be added to the media, 0-200 characters for regular users and 0-2048 characters for premium subscribers.
   */
  text?: string;

  /**
   * Optional.
   * An object that describes a widget link to be included in the story. Note that only premium subscribers can post stories with links.
   */
  widget_link?: StoryWidgetLink;
}

/**
 * This object describes a widget link to be included in the story.
 */
export interface StoryWidgetLink {
  /**
   * The URL to be included in the story.
   */
  url: string;

  /**
   * Optional.
   * The name to be displayed for the widget link, 0-48 characters.
   */
  name?: string;
}
