import http from 'axios'

export default{
    getTypingsDataAPI(id = 1) {
        return http.get(`http://localhost:3000/typings?id=${id}`)
    },

    getTypingIds() {
        return http.get('http://localhost:3000/typings/Ids')
    },

    postTypingRecord(params) {
        return http.post('http://localhost:3000/typings/new', params)
    }
}    
