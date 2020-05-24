import axios from "axios";

const baseUrl = 'http://localhost:3000/'

export default {
    
    createUser(url = baseUrl + 'user/') {
        console.log("api url :"+url);
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: res => axios.post(url, res),
            send_email: message => axios.post(url+"/send_email", message),
            update: (id, up) => axios.put(url + id, up),
            updateUserDetails : (id, data) => axios.put(url+"edit/"+id, data),
            delete: id => axios.delete(url + id)
        }
    },

    message(url = baseUrl + 'comments/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

}
