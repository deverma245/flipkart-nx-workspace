export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  stock: number;
  description: string;
  image: string;
}

export const TOTAL_PRODUCTS = 1000;

const categories = [
  'mobile',
  'laptop',
  'audio',
  'tablet',
  'tv',
  'camera',
  'gaming',
  'accessories',
];

const brands = [
  'Apple',
  'Samsung',
  'OnePlus',
  'Sony',
  'Google',
  'Dell',
  'HP',
  'Lenovo',
  'Xiaomi',
  'Boat',
];

const productNames: Record<string, string[]> = {
  mobile: [
    'iPhone 17',
    'Galaxy S26',
    'OnePlus 14',
    'Pixel 10',
    'Galaxy A57',
  ],

  laptop: [
    'MacBook Pro',
    'MacBook Air',
    'Dell XPS',
    'HP Spectre',
    'Lenovo ThinkPad',
  ],

  audio: [
    'AirPods Pro',
    'Sony WH-1000XM6',
    'Galaxy Buds',
    'Boat Airdopes',
    'Nothing Ear',
  ],

  tablet: [
    'iPad Pro',
    'Galaxy Tab',
    'OnePlus Pad',
    'Pixel Tablet',
    'Lenovo Tab',
  ],

  tv: [
    'Samsung Neo QLED',
    'Sony Bravia',
    'LG OLED',
    'OnePlus TV',
    'Xiaomi Smart TV',
  ],

  camera: [
    'Sony Alpha',
    'Canon EOS',
    'Nikon Z',
    'Fujifilm X',
    'GoPro Hero',
  ],

  gaming: [
    'PlayStation 5',
    'Xbox Series X',
    'Nintendo Switch',
    'Steam Deck',
    'Gaming Console',
  ],

  accessories: [
    'Wireless Mouse',
    'Mechanical Keyboard',
    'USB-C Hub',
    'Power Bank',
    'Fast Charger',
  ],
};

/**
 * Generate a deterministic product.
 *
 * Using the ID as the seed means the same ID
 * always generates the same product.
 */
const generateProduct = (id: number): Product => {
  const categoryIndex =
    id % categories.length;

  const category =
    categories[categoryIndex];

  const names =
    productNames[category];

  const nameIndex =
    id % names.length;

  const brandIndex =
    id % brands.length;

  const name =
    names[nameIndex];

  const brand =
    brands[brandIndex];

  return {
    id,

    name: `${name} ${id}`,

    price:
      1000 +
      ((id * 7919) % 200000),

    category,

    brand,

    rating:
      Number(
        (
          3 +
          ((id * 13) % 20) / 10
        ).toFixed(1)
      ),

    stock:
      (id * 37) % 100,

    description:
      `High quality ${category} product with excellent performance.`,

    image:
      `https://picsum.photos/seed/product-${id}/400/400`,
  };
};

/**
 * Generate products for a particular page.
 *
 * Page is 1-based.
 *
 * Example:
 *
 * page = 1, limit = 3
 * startId = 1 * 3 - 3 = 0
 * endId   = 1 * 3     = 3
 *
 * Products:
 * 0, 1, 2
 *
 *
 * page = 2, limit = 3
 *
 * startId = 2 * 3 - 3 = 3
 * endId   = 2 * 3     = 6
 *
 * Products:
 * 3, 4, 5
 */
export const generateProducts = (
  page: number,
  limit: number
): Product[] => {

  const startId =
    page * limit - limit;
  console.log(startId, limit);

  const endId =
    Math.min(
      page * limit,
      TOTAL_PRODUCTS
    );

  if (startId >= TOTAL_PRODUCTS) {
    return [];
  }

  const products: Product[] = [];

  for (
    let id = startId;
    id < endId;
    id++
  ) {
    products.push(
      generateProduct(id)
    );
  }

  return products;
};

/**
 * Generate a single product by ID.
 */
export const getProduct = (
  id: number
): Product | null => {

  if (
    id < 0 ||
    id >= TOTAL_PRODUCTS
  ) {
    return null;
  }

  return generateProduct(id);
};