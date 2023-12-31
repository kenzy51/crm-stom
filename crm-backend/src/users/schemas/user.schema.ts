import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  save() {
    throw new Error("Method not implemented.");
  }
  @Prop()
  username: string;
  @Prop()
  phoneNumber: number;
  @Prop()
  problem: string;
  @Prop()
  description: string;
  @Prop()
  money: string;
  @Prop()
  blackList: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
