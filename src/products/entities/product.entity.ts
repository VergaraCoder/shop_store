import { CategoryProduct } from 'src/category-product/entities/category-product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  category_product_id: number;

  @ManyToOne(
    () => CategoryProduct,
    (categoryProduct) => categoryProduct.product,
  )
  @JoinColumn({ name: 'category_product_id' })
  categoryProduct: CategoryProduct;
}
