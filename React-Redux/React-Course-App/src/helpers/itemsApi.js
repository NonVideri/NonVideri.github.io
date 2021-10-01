import * as api from './api';
import { itemsApiUrl } from './routes';
// ToDoItems CRUD actions

export const getAll = () => api.get(itemsApiUrl());

export const create = (params) => api.post(itemsApiUrl(), { item: { ...params } });
