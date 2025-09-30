import axios, { AxiosError, CreateAxiosDefaults } from "axios";

export const getBaseClient = (config: CreateAxiosDefaults<unknown> = {}) => axios.create(config);

export const getStatusCode = (err: AxiosError) => err.status ?? err.response?.status;
