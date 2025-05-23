import { ItemsGroup } from 'src/items-group/entities/items-group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoryGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  user_id: number;

  @Column()
  created_at: Date;

  @OneToMany(() => ItemsGroup, (itemsGroup) => itemsGroup.categoryGroup)
  itemsGroup: ItemsGroup[];
}
