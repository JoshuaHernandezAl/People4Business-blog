import { Type } from "class-transformer";
import { IsBoolean, IsOptional, Min } from "class-validator";


export class SearchDto {
    @IsOptional()
    @IsBoolean()
    @Type(()=>Boolean)
    byTitle?:boolean;
    
    @IsOptional()
    @IsBoolean()
    @Type(()=>Boolean)
    byAuthor?:boolean;
    
    @IsOptional()
    @IsBoolean()
    @Type(()=>Boolean)
    byContent?:boolean;
}