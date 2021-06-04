import axios from 'axios';

const api = {
  getCaseInfoById: (id) => {
    let url = `${window.CONFIG.service}/service/agri/case/${id}`;
    return axios({
      method: 'get',
      url: url
    }).then((rep) => {
      if (rep.status !== 200) {
        
      }
      return rep;
    });
  },

  getColorBar: (prod) => {
    let url = `${window.CONFIG.paletteService}/service/catalog/palette?version=2.0&prod=${prod}`;
    return axios({
      method: 'get',
      url: url
    }).then((rep) => {
      if (rep.status !== 200) {
        
      }
      return rep;
    });
  },
}

export default api;
