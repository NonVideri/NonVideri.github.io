// Helpers for connecting with API

// GET calls
export const get = (url) =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => resolve(json));
  });

// POST/PUT calls
export const call = (url, method, body, resolve, reject) =>
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(body)
  }).then((response) => {
    if (response.ok) response.json().then((json) => resolve(json));
    else reject(response);
  });

export const post = (url, body) =>
  new Promise((resolve, reject) => call(url, 'POST', body, resolve, reject));

export const put = (url, body) =>
  new Promise((resolve, reject) => call(url, 'PUT', body, resolve, reject));

export const destroy = (url) =>
  new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }).then((response) => {
      if (response.ok) resolve(response);
      else reject(response);
    });
  });
