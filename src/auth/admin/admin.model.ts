import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";


export interface AdminModel extends Base {}
export class AdminModel extends TimeStamps{
  @prop()
  title: string
}
