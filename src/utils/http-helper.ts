import { HttpResponse } from "../models/http-response-model";


export const ok = async (data: any): Promise<HttpResponse> => ({
  status: 200,
  body: data,
});

export const noContent = async (data: any): Promise<HttpResponse> => ({
  status: 204,
  body: null,
});

export const notFound = async (data: any): Promise<HttpResponse> => ({
  status: 404,
  body: data,
});