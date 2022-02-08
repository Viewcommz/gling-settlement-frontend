import { useCallback, useState } from "react";
import axios, { Method, AxiosRequestHeaders }  from 'axios';

interface RequestHeader extends AxiosRequestHeaders {
  someHeader: string;
}
interface RequestConfig {
  method?: Method;
  url: string;
  data?: object;
  headers?: RequestHeader;
}

const useApi = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const sendRequest = useCallback(
    async (reqeustConfig:RequestConfig, applyData:(props:object) => void) => {
      setIsLoading(true);
      try {
        const response = await axios({
          method: reqeustConfig.method || 'GET',
          url: `/api/${reqeustConfig.url}`,
          data: reqeustConfig.data || null,
          headers: reqeustConfig.headers || {},
          withCredentials: true,
        })
        if (response.data.status === "success") {
          applyData({
            status: "success",
            message: response.data.message,
            data: response.data.data,
          })
        } else {
          return {
            status: "fail",
            message: response.data.message,
            data: null,
          }
        }
      } catch (err) {
        console.log("API ERROR", err);
      } finally {
        setIsLoading(false);
      }
  }, []);

  return {
    isLoading,
    error,
    sendRequest
  };
};

export default useApi;