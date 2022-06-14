import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";


export interface PageModel extends Base {
}

export class PageModel extends TimeStamps {
  @prop()
  firstLevelCategory: string;

  @prop()
  secondCategory?: string;

  @prop()
  thirdCategory?: string;

  @prop()
  title: string;

  @prop()
  metaTitle: string;

  @prop()
  description?: string;

  @prop()
  metaDescription: string;

  @prop()
  seoText: string;
}
