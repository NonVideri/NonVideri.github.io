import * as api from './api';
import { tasksApiUrl } from './routes';
// ToDoItems CRUD actions

export const getAll = () => api.get(tasksApiUrl());

export const get = (id) => api.get(tasksApiUrl(id));

export const create = (params) => api.post(tasksApiUrl(), { task: { ...params } });

export const update = (id, params) => api.put(tasksApiUrl(id), { task: { ...params } });

export const destroy = (id) => api.destroy(tasksApiUrl(id));
