import axios, { AxiosRequestConfig } from 'axios';
import _ from 'lodash';
import { useEffect, useState } from 'react';

const useGet = (url: string, config?: AxiosRequestConfig<any>) => {
  const [data, setData] = useState<any | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | undefined>(undefined);

  const memoizedConfig = _.memoize((config) => ({ ...config }));

  useEffect(() => {
    setLoading(true);
    axios.get(url, memoizedConfig(config) as AxiosRequestConfig<any>)
      .then((result) => {
        // TODO: Zod schema validation or something
        setLoading(false);
        setData(result.data);
      }).catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return ({ data, loading, error })
}

export default useGet;