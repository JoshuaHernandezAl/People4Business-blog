import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Like, Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { SearchDto } from 'src/common/dto/search.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    try {
      const post = this.postRepository.create({
        ...createPostDto
      });
      await this.postRepository.save(post);
      return {post, message: 'Post created'};
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const posts = await this.postRepository.find({
      take: limit,
      skip: offset,
    });
    return posts.map(post => ({
      ...post,
    }))
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOneBy({ id });
    if (!post) throw new NotFoundException(`Post ${id} not found`);
    return post;
  }

  async search(searchDto: SearchDto, term: string) {
    const {byTitle, byAuthor, byContent} = searchDto;
    if(byTitle){
      return await this.postRepository.find({
        where: {
          title: Like(`%${term}%`)
        }
      })
    }
    if(byAuthor){
      return await this.postRepository.find({
        where: {
          author: Like(`%${term}%`)
        }
      })
    }
    if(byContent){
      return await this.postRepository.find({
        where: {
          content: Like(`%${term}%`)
        }
      })
    }
    throw new BadRequestException('Bad request, select at least one search option');
  }

  async deleteAll() {
    const query = this.postRepository.createQueryBuilder('post');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }

  }


  private handleDBExceptions(error: any) {
    console.log(error);
    throw new InternalServerErrorException('Unexpected error');
  }
}
