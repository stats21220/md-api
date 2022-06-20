import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

class Page {

  @prop({ unique: true })
  category: string;

  @prop({ text: true })
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

class SecondLevelPage extends Page {

  @prop({ unique: true, type: () => [Page] })
  thirdLevelPage?: Page[];
}


export interface PageModel extends Base {
}

export class PageModel extends TimeStamps {

  @prop({ unique: true, type: () => Page })
  firstLvl: Page;

  @prop({ unique: true, type: () => [SecondLevelPage] })
  secondLvl: SecondLevelPage[];
}
