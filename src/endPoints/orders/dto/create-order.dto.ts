import { IsArray, IsNotEmpty, IsNumber, Max, Min, IsString } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(100)
    @Max(3000, { message: "Total Price should be between 100 and 3000" })
    totalprice: number;

    @IsNotEmpty()
    @IsArray()
    items: number[];

    @IsNotEmpty()
    @IsString()
    @Min(3,{ message: "title must be at least 3 char" })
    @Max(30, { message: "Title is to long" })
    title: string;
}
