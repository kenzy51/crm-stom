import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from "@nestjs/common";
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
} from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./schemas/user.schema";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @ApiOperation({ summary: "Create a new user" })
  @ApiCreatedResponse({
    description: "The user has been successfully created.",
  })
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, description: "Returns an array of user objects" })
  getAll() {
    return this.userService.getAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a user by ID" })
  @ApiOkResponse({
    type: User,
    description: "Returns the user with the specified ID",
  })
  @ApiNotFoundResponse({ description: "User with the specified ID not found" })
  getUserById(@Param("id") id: string) {
    return this.userService.getUserById(id);
  }

  @Put(":id")
  @ApiOperation({ summary: "Update a user by ID" })
  @ApiOkResponse({ type: User, description: "Returns the updated user" })
  @ApiNotFoundResponse({ description: "User with the specified ID not found" })
  updateUser(@Param("id") id: string, @Body() dto: CreateUserDto) {
    return this.userService.updateUser(id, dto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a user by ID" })
  @ApiOkResponse({ type: User, description: "Returns the deleted user" })
  @ApiNotFoundResponse({ description: "User with the specified ID not found" })
  deleteUser(@Param("id") id: string) {
    return this.userService.deleteUser(id);
  }
  @Put("ban/:id")
  @ApiOperation({ summary: "Ban a user by ID" })
  @ApiOkResponse({ type: User, description: "Returns the banned user" })
  @ApiNotFoundResponse({ description: "User with the specified ID not found" })
  banUser(@Param("id") id: string) {
    return this.userService.banUser(id);
  }
  @Put("removeBan/:id")
  @ApiOperation({ summary: "remove from banned list a user by ID" })
  @ApiOkResponse({ type: User, description: "Returns the banned user" })
  @ApiNotFoundResponse({ description: "User with the specified ID not found" })
  removeFromBan(@Param("id") id: string) {
    return this.userService.removeFromBan(id);
  }
}
