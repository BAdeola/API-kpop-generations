import * as fs from 'fs';
import * as path from 'path';
import { GenerationModel } from '../models/generation-model';

export const getGenerationList = async (): Promise<GenerationModel[]> => {
  const pathData = path.join(__dirname, '..', 'data', 'generations.json');
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const json = JSON.parse(data);
  return json.generations;
};

export const getGenerationById = async (generationId: number): Promise<GenerationModel | null> => {
  const pathData = path.join(__dirname, '..', 'data', 'generations.json');
  const data = await fs.promises.readFile(pathData, 'utf-8');
  const json = JSON.parse(data);
  const generation = json.generations.find((gen: GenerationModel) => gen.id === generationId);
  return generation || null;
};