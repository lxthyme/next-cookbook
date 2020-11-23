import Axios from 'axios';

const axios = Axios.create();

// axios.interceptors.request.use(value => {
    // const _header={
    //     device:'web',
    //     timestamp:new Date().getTime(),
    //     lang:'en'
    // }
    // value.headers=Object.assign({},value.headers,_header)
//     return value;
// })

axios.interceptors.response.use(res=> {
    if (res.status === 200) {
        return Promise.resolve(res.data)
    }else{
        return Promise.reject(res)
    }
},error=>{
    return Promise.reject(error)
})

export default axios;
