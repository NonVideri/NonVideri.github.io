import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  private products: Product[];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = new Date().toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  // Deep copy
  getAllProducts() {
    return [...this.products.map((product) => product)];
  }

  getProduct(productId: string) {
    const product = this.products.find((prod) => prod.id == productId);
    if (!product) throw new NotFoundException('Could not find product.');
    return { ...product };
  }
}
