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

  @prop()
  secondCategory: string;

  @prop()
  thirdCategory?: string;

  @prop()
  title?: string;

  @prop()
  metaTitle: string;

  @prop()
  description?: string;

  @prop()
  metaDescription: string;

  @prop()
  seoText: string;
}
