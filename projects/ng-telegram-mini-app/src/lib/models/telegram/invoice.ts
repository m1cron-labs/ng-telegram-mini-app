/**
 * This object contains basic information about an invoice.
 */
export interface Invoice {
  /**
   * Product name
   */
  title: string;

  /**
   * Product description
   */
  description: string;

  /**
   * Unique bot deep-linking parameter that can be used to generate this invoice
   */
  start_parameter: string;

  /**
   * Three-letter ISO 4217 currency code, or “XTR” for payments in Telegram Stars
   */
  currency: string;

  /**
   * Total price in the smallest units of the currency (integer, not float/double). For example, for a price of US$ 1.45 pass amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies).
   */
  total_amount: number;
}
