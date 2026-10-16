export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginationResult<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export function paginate<T>(
  items: T[],
  params: PaginationParams
): PaginationResult<T> {
  const page = Math.max(1, params.page);

  const limit = Math.min(
    Math.max(1, params.limit),
    100
  );

  const total = items.length;

  const totalPages = Math.ceil(total / limit);

  const startIndex = (page - 1) * limit;

  const data = items.slice(
    startIndex,
    startIndex + limit
  );

  return {
    data,
    page,
    limit,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
}