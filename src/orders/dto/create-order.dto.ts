import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  userId: string;

  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  totalPrice: number;

  @IsOptional()
  @IsString()
  status?: string;
}
