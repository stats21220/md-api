import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { prop } from "@typegoose/typegoose";

export class ProductCharacteristics {
  @prop()
  name: string;

  @prop()
  value: string;
}

export enum AvailableEnum {
  failure,
  success
}

export interface ProductModel extends Base {
}

export class ProductModel extends TimeStamps {
  @prop()
  image?: string;

  @prop({unique: true})
  title: string;

  @prop()
  description?: string; // описание

  @prop()
  price: number; //цена

  @prop()
  oldPrice?: number;

  @prop({unique: true})
  productCode: number

  @prop()
  initialRating?: number;

  @prop({enum: AvailableEnum})
  available: AvailableEnum.success // есть ли в наличии 0 нет 1 да

  @prop({ type: () => [String] })
  categories: string[];

  @prop({ type: () => [ProductCharacteristics], _id: false }) // id позволяет отключить индексы по вложеному объекту
  characteristics?: ProductCharacteristics[];

  @prop({ type: () => [String] })
  tags: string[];
}
