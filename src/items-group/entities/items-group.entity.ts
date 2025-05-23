import { CategoryGroup } from 'src/category/entities/category.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('items_group')
export class ItemsGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  user_id: number;

  @Column()
  category_group_id: number;

  @Column()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.itemsGroup)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => CategoryGroup, (itemGroup) => itemGroup.itemsGroup)
  @JoinColumn({ name: 'category_group_id' })
  categoryGroup: CategoryGroup;
}
