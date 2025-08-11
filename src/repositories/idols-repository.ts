import * as path from 'path';
import * as fs from 'fs';
import { IdolModel } from '../models/idols-model';
import { GroupModel } from '../models/group-model';

const pathData = path.join(__dirname, '../repositories/kpop-groups.json');

export const getMemberList = async (groupId: number): Promise<IdolModel[]> => {
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const jsonfile = JSON.parse(data);

  // Busca o grupo pelo ID em todas as gerações
  const group = jsonfile.generations.flatMap((generation: any) => generation.groups)
  .find((group: GroupModel) => group.id === groupId);

  return group ? group.members : [];
};

export const getMemberById = async (idolId: number): Promise<IdolModel | null> => {
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const jsonfile = JSON.parse(data);

  const idol = jsonfile.find((idol: IdolModel) => idol.id === idolId);
  return idol || null;
};

export const insertMember = async (groupId: number, member: IdolModel): Promise<IdolModel | null> => {
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const json = JSON.parse(data);

  // Encontra o grupo pelo ID
  const group = json.generations
    .flatMap((generation: any) => generation.groups)
    .find((group: GroupModel) => group.id === groupId);

  if (!group) {
    // Grupo não encontrado
    return null;
  }

  // Verifica se já há membros
  if (group.members && group.members.length > 0) {
    const lastId = Math.max(...group.members.map((m: IdolModel) => m.id));
    member.id = lastId + 1;
  } else {
    member.id = groupId * 100 + 1;
    group.members = [];
  }

  group.members.push(member);
  await fs.promises.writeFile(pathData, JSON.stringify(json, null, 2));
  return member;
};

export const deleteMemberById = async (groupId: number, memberId: number): Promise<boolean> => {
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const json = JSON.parse(data);

  // Encontra o grupo pelo ID
  const group = json.generations.flatMap((generation: any) => generation.groups).find((group: GroupModel) => group.id === groupId);

  if (group) {
    group.members = group.members.filter((member: IdolModel) => member.id !== memberId);
    await fs.promises.writeFile(pathData, JSON.stringify(json, null, 2));
    return true;
  }
  return false;
};