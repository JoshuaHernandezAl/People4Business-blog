import { Controller, Get, Post, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { SearchDto } from 'src/common/dto/search.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.postsService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  @Get('search-by/:term')
  search(
    @Query() seachDto: SearchDto,
    @Param('term') term: string
  ) {
    return this.postsService.search(seachDto, term);
  }
}
