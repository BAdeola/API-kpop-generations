import * as path from 'path';
import * as fs from 'fs';

const pathData = path.join(__dirname, '../repositories/kpop-groups.json');

export const getMemberList = async (groupName: string): Promise<IdolModel[]> => {
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const jsonfile = JSON.parse(data);
  return jsonfile;
};

export const getMemberById = async (idolId: number): Promise<IdolModel | null> => {
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const jsonfile = JSON.parse(data);

  const idol = jsonfile.find((idol: IdolModel) => idol.id === idolId);
  return idol || null;
};

export const insertMember = async (groupId: number, member: IdolModel): Promise<void> => {
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const json = JSON.parse(data);

  // Encontra o grupo pelo ID
  const group = json.generations.flatMap((generation: any) => generation.groups).find((group: GroupModel) => group.id === groupId);

  if (group) {
    group.members.push(member);
    await fs.promises.writeFile(pathData, JSON.stringify(json, null, 2));
  }
};

export const deleteMemberById = async (groupId: number, memberId: number): Promise<void> => {
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const json = JSON.parse(data);

  // Encontra o grupo pelo ID
  const group = json.generations.flatMap((generation: any) => generation.groups).find((group: GroupModel) => group.id === groupId);

  if (group) {
    group.members = group.members.filter((member: IdolModel) => member.id !== memberId);
    await fs.promises.writeFile(pathData, JSON.stringify(json, null, 2));
  }
};