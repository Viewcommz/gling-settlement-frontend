import api from "../api";

export function getAll() {
    let res = api.post('/api/support/notice/list/select',(status:any, data:any)=>{console.log("settlement data",data)})
    return res;
}