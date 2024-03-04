import { IsString, MinLength } from "class-validator";

export class CreatePostDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  author: string;

  
  @IsString()
  @MinLength(1)
  content: string;
}
