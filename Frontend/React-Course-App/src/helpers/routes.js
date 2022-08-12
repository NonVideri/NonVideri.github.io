// URLs
const serverUrl = 'http://localhost:5000';

export const tasksApiUrl = (id) => (id ? `${serverUrl}/tasks/${id}` : `${serverUrl}/tasks`);
