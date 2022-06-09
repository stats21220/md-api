import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export enum TopLevelCategoryEnum {
  lumber,
  buildingMaterials,
  bathShip,
  relatedProducts,
  doorAndWindowBlocks,
  paintAndVarnishMaterials
}

export interface PageModel extends Base {
}

export class PageModel extends TimeStamps {
  @prop({ enum: TopLevelCategoryEnum, type: () => Number })
  firstLevelCategory: TopLevelCategoryEnum;

  @prop({ unique: true })
  secondCategory: string;

  @prop({ unique: true })
  thirdCategory?: string;

  @prop({ unique: true })
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
