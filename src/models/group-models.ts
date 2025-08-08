import { IdolModel } from "./idols-models";

export interface GroupModel {
  id: number;
  name: string;
  debutDate: Date;
  members: IdolModel[];
}