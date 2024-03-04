import { Injectable } from '@nestjs/common';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsService } from 'src/posts/posts.service';
import { Post } from 'src/posts/entities/post.entity';

@Injectable()
export class SeedService {
  constructor(
    private readonly postService: PostsService,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ){}
  async runSeed(){
    await this.deleteTables();
    await this.insertNewPosts();
    return 'SEEDED'
  }
  private async deleteTables(){
    await this.postService.deleteAll();
    const queryBuilder = this.postRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();
    return true
  }
  private async insertNewPosts(){
    const posts = initialData.posts;
    const insertPromises = [];
    posts.forEach(post => {
      insertPromises.push(this.postService.create(post));
    });
    await Promise.all(insertPromises);
    return true;
  }
}
