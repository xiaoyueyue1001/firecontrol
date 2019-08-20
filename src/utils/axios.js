import axios from "axios";
import { Message } from 'element-ui';

export default {
  get: (path, params) => {
    return new Promise((resolve, reject) => {
      axios
        .get(path, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          params: params
        })
        .then(res => {
          if (res.status === 200 && res.data.code === 0) {
            resolve(res.data);
          }
          else {
            Message.error({
              message: res.data&&res.data.msg,
              duration: 3000
            });
            reject(res.data);
          }
        })
        .catch(error => {
          reject(error.message);
          Message.error({
            message: error.message,
            duration: 3000
          });
        });
    });
  },
  post: (path, params) => {
    return new Promise((resolve, reject) => {
      axios
        .post(path, params, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          }
        })
        .then(res => {
          if (res.status === 200 && res.data.code === 0) {
            resolve(res.data);
          }
          else {
            Message.error({
              message: res.data&&res.data.msg,
              duration: 3000
            });
            reject(res.data);
          }
        })
        .catch(error => {
          reject(error.message);
          Message.error({
            message: error.message,
            duration: 3000
          });
        });
    });
  }
};
