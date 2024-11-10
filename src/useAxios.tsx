import axios from 'axios';
// type AxiosFunctionsProp = {};

export const useAxios = () => {
  const axiosFunction = async (props: { method: string; url: string; data?: any; query: any }) => {
    const { method, url, data, query } = props;
    try {
      const response = await axios({
        method: method,
        url: url,
        data: data,
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          //     Authorization: `Bearer ${token}`,
        },
        //  responseType:'json',
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFunction = async () => {};

  return { axiosFunction, fetchFunction };
};
