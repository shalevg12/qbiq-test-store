export interface Review {
  id: number;
  author: string;
  rating: number;      // rating from 1–5
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  thumbnail: string;        // small image
  image: string;            // large image for detail
  shortDescription: string;
  longDescription: string;
  reviews: Review[];
}
