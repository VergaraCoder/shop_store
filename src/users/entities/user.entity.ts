import { UserRole } from 'src/common/utils/enums/user.name.enum';
import { ItemsGroup } from 'src/items-group/entities/items-group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role: UserRole;

  @Column()
  password: string;

  @OneToMany(() => ItemsGroup, (itemsGroup) => itemsGroup.user)
  itemsGroup: ItemsGroup;
}
