export interface Utils {
  urlSafeDecode: (urlencoded: string) => string;
  urlParseQueryString: (queryString: string) => Record<string, string>;
  urlParseHashParams: (locationHash: string) => Record<string, string>;
  urlAppendHashParams: (url: string, addHash: string) => string;
  sessionStorageSet: (key: string, value: string) => boolean;
  sessionStorageGet: (key: string) => any | null;
}
