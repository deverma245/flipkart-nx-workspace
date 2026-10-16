export type QueryParamValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | string[]
  | number[];

export type QueryParams = Record<string, QueryParamValue>;

export function createQueryParams(
  params: QueryParams
): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(item => {
        searchParams.append(key, String(item));
      });

      return;
    }

    searchParams.set(key, String(value));
  });

  return searchParams.toString();
}

export function appendQueryParams(
  url: string,
  params: QueryParams
): string {
  const queryString = createQueryParams(params);

  if (!queryString) {
    return url;
  }

  const separator = url.includes('?') ? '&' : '?';

  return `${url}${separator}${queryString}`;
}