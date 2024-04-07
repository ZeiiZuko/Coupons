const ep = `https://coupons-hwhz.onrender.com/api`;
const token = sessionStorage.getItem('userToken');

const request = {
  get: async function (url, { body = {} }) {
    const bodyParsed = JSON.stringify(body);
    const response = await fetch(`${ep}${url}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: bodyParsed
    });
    return await response.json();
  },
  post: async function (url, { body = {} }) {
    const bodyParsed = JSON.stringify(body);
    const response = await fetch(`${ep}${url}`, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: bodyParsed
    });
    return await response.json();
  },
  patch: async function (url, { body: {} }) {
    const bodyParsed = JSON.stringify(body);
    const response = await fetch(`${ep}${url}`, {
      method: 'patch',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: bodyParsed
    });
    return await response.json();
  },
  delete: async function (url, { body = {} }) {
    const bodyParsed = JSON.stringify(body);
    const response = await fetch(`${ep}${url}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: bodyParsed
    });
    return await response.json();
  },
};
