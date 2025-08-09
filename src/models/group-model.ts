import { IdolModel } from "./idols-model";

export interface GroupModel {
  id: number;
  name: string;
  debutDate: Date;
  members: IdolModel[];
}