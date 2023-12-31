import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'The username of the user' })
  readonly username: string;

  @ApiProperty({ example: '1234567890', description: 'The phone number of the user' })
  readonly phoneNumber: string;
}
