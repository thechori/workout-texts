import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The user password - minimum 8 characters',
    minimum: 8,
  })
  @IsString()
  @MinLength(8)
  password: string;
}

// You might also want a response DTO to define the shape of responses
export class UserResponseDto {
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the user',
  })
  id: number;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the user',
  })
  email: string;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'When the user was created',
  })
  created_at: Date;

  @ApiProperty({
    example: '2024-01-01T00:00:00Z',
    description: 'When the user was last updated',
  })
  updated_at: Date;
}
