 import axios from 'axios';

class axiosUtils {
  static get(path) {
    return axios.get(path).then(res => res.data);
  }
}

export default axiosUtils;