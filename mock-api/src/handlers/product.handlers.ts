import { http, HttpResponse } from 'msw';

import {
  TOTAL_PRODUCTS,
  generateProducts,
  getProduct,
} from '../data/products';

export const productHandlers = [

  /**
   * GET /api/products
   *
   * Example:
   *
   * /api/products?page=1&limit=3
   *
   * IDs:
   * 0, 1, 2
   *
   *
   * ?page=2&limit=3
   *
   * IDs:
   * 3, 4, 5
   */
  http.get(
    '/api/products',
    ({ request }) => {
throw new Error('🔥🔥🔥 MY PRODUCT HANDLER IS EXECUTING');
      const url =
        new URL(request.url);

      const page = Math.max(
        1,
        Number(
          url.searchParams.get(
            'page'
          ) ?? 1
        )
      );
      console.log(page);
      const limit = Math.min(
        100,
        Math.max(
          1,
          Number(
            url.searchParams.get(
              'limit'
            ) ?? 20
          )
        )
      );

      const products =
        generateProducts(
          page,
          limit
        );

      const totalPages =
        Math.ceil(
          TOTAL_PRODUCTS / limit
        );

      return HttpResponse.json({
        products,

        pagination: {
          page,

          limit,

          total:
            TOTAL_PRODUCTS,

          totalPages,

          hasNextPage:
            page < totalPages,

          hasPreviousPage:
            page > 1,
        },
      });
    }
  ),

  /**
   * GET /api/products/:id
   */
  http.get(
    '/api/products/:id',
    ({ params }) => {

      const id =
        Number(params['id']);

      const product =
        getProduct(id);

      if (!product) {
        return HttpResponse.json(
          {
            message:
              'Product not found',
          },
          {
            status: 404,
          }
        );
      }

      return HttpResponse.json(
        product
      );
    }
  ),
];