import { prop } from "@typegoose/typegoose";
import { TimeStamps, Base } from "@typegoose/typegoose/lib/defaultClasses";

export interface AuthModel extends Base {
}

export class AuthModel extends TimeStamps {

  @prop()
  email: string;

  @prop()
  passwordHash: string;

  @prop({ unique: true })
  phone: string;

  @prop()
  firstName: string;

  @prop()
  lastName: string;

  @prop()
  city?: string;

  @prop()
  address?: string;
}
