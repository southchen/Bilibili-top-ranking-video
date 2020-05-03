import axios from 'axios';
//http://api.bilibili.com/x/web-interface/ranking/region?rid=11&day=3
export default axios.create({
  baseURL: 'https://api.bilibili.com/x/web-interface/ranking/region',

  // headers: {
  //   withCredentials: 'false',
  //   'Content-Type': 'application/json;charset=utf-8',
  // },
});
