import * as api from './api';
import { tasksApiUrl } from './routes';
// ToDoItems CRUD actions

export const getAll = () => api.get(tasksApiUrl());

export const create = (params) => api.post(tasksApiUrl(), { task: { ...params } });

export const destroy = (id) => api.destroy(tasksApiUrl(id));
