import { create } from "apisauce";

import cache from "../utility/cathe";

const apiClient = create({
  baseURL: "http://348450543681.ngrok.io/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
