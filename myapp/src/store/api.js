import http from 'axios';

export default{
    getTypingsDataAPI(id = 1) {
        return http.get(`http://localhost:3000/typings?id=${id}`);
      }    
}