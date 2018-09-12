import { beforeMethod } from "kaop-ts";

export default (url, initObj = {}) => beforeMethod(meta => {
  if(initObj && !initObj.method) initObj.method = "GET"
  url = new URL(url);
  const [params] = meta.args;
  (!initObj || initObj.method === "GET") ? 
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key])) :
    initObj['body'] = JSON.stringify(params);
  fetch(url, initObj)
  .then(res => {
      meta.args = [params, res, null];
      meta.commit();
    })
  .catch(err => {
    meta.args = [params, null, err];
    meta.commit();
  });
});