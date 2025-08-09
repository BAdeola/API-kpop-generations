import { GroupModel } from './group-model';

export interface GenerationModel {
  id: number;
  name: string;
  groups: GroupModel[];
}