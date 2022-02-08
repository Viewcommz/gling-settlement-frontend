import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance } from "axios";

const serverUrl = process.env.NODE_ENV == "production" ? "https://api.gling.co.kr" : "/api/";
const s3Url = "https://s3.ap-northeast-2.amazonaws.com/gling.co.kr"

// interface Return<Data, Error> extends Pick
interface Api {

}
class Api {
    api: AxiosInstance;
    constructor() {
        let api = axios.create({
            baseURL: serverUrl,
            withCredentials: true,
        });
        api.interceptors.response.use(this.handleSuccess, this.handleError)
        this.api = api;
    }

    handleSuccess(response:AxiosResponse) {
        console.log("성공");
        return response;
    }
    handleError(error:AxiosError) {
        switch (error.response?.status) {
            case 401:
                console.log("401에러")
                this.redirectTo(document,'');
                break;
            case 404:
                console.log("404에러")
                this.redirectTo(document,'');
                break;
        }
        return Promise.reject(error)
    }
    redirectTo(document:any,path:string) {
        console.log("리다이렉트");
        document.location = path;
    }
  
    get(path:string, callback:any) {
        return this.api.get(path).then(
        (response) => callback(response.status, response.data)
        );
    }

    patch(path:any, payload:any, callback:any) {
        return this.api.request({
        method: 'PATCH',
        url: path,
        responseType: 'json',
        data: payload
        }).then((response) => callback(response.status, response.data));
    }

    post(path:any, payload?:any) {
        return this.api.request({
        method: 'POST',
        url: path,
        responseType: 'json',
        data: payload
        });
    }
}

export default new Api;