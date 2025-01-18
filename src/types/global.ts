import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    message: string;
    success: boolean;
    stack: string;
  };
  status: number;
};
export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};
export type TResponse<T> = {
  data?: T;
  error: TError;
  meta: TMeta;
};
export type TResponseApi<T> = TResponse<T> & BaseQueryApi;
export type TQueryParametter = {
  name: string;
  value: boolean | React.Key;
};
