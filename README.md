### HTTP @Fetch Decorator

Simple Fetch interface decorator wrapper for your functions.

`$ npm install http-fetch-decorator`

### Signature

Then you can place the decorator which has the same input structure as the fetch function. The parameters of the request or the data to send as a body are passed via arguments to the wrapped function, and the result and error objects are available as parameters of the function as well:

```js
@Fetch(Url: String, initObj?: Object)
static wrappedFunction(params: Object, result? : Response, err? : any){
  ...
}

```

### How to use it

```js
import Fetch from "http-fetch-decorator"

class AnyES6Class {
  @Fetch("apiexample/getsomething", {method: 'GET',mode:'cors'})
  static parseResponse({id: '1'},result,err) {
    if(err) throw err;
    //result contains the Response object from fetch, then you can parse it as a json for example
    return result.json()
      .then(data => {
        return data;
      })
      .catch(err =>{
        throw err;
      })
  }
}
```


### Credits
[@k1r0s] This small utility was made possible due to [kaop-ts](https://github.com/k1r0s/kaop-ts) which provides hooks to attach behaviors on ES6 classes.