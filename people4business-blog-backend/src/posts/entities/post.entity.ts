import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'posts'})
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  author: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  content: string;

  @Column({
    type: 'datetime',
    default: () => 'getutcdate()',
  })
  publishDate: Date;
}
