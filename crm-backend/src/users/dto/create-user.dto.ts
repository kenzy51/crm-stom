import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "john_doe", description: "The username of the user" })
  readonly username: string;
  @ApiProperty({
    example: "1234567890",
    description: "The phone number of the user",
  })
  readonly phoneNumber: string;
  @ApiProperty({
    example: "Some kind of problem",
    description: "Which problem client has",
  })
  readonly problem: string;
  @ApiProperty({
    example: '4000 som or 100 usd',
    description: "amount of money which ",
  })
  readonly money: string;
  @ApiProperty({
    example: "Description",
    description: "description of client and may be problem",
  })
  readonly description: string;
  @ApiProperty({ example: false, description: "is he in a blackList" })
  readonly blackList: string;
}
