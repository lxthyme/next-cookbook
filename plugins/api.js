import useSWR from 'swr'
import axios from 'axios'

const $axios = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 30000,
  headers: {
    // 'X-Custom-Header': 'foobar'
  },
  withCredentials: false,
  responseType: 'json',

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  // xsrfCookieName: 'XSRF-TOKEN', // default

  // // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  // xsrfHeaderName: 'X-XSRF-TOKEN', // 默认的

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // // `keepAlive` 默认没有启用
  // httpAgent: new http.Agent({ keepAlive: true }),
  // httpsAgent: new https.Agent({ keepAlive: true }),

  // transformRequest: [
  //   (data) => {
  //     // 对 data 进行任意转换处理
  //     return JSON.stringify(data)
  //   },
  //   (headers) => {
  //     // 对 data 进行任意转换处理

  //     return headers
  //   },
  // ],
  // transformResponse: [
  //   function (data) {
  //     // 对 data 进行任意转换处理

  //     return data
  //   },
  // ],
  // params: {
  //   ID: 12345
  // },
  // paramsSerializer: function(params) {
  //   return Qs.stringify(params, {arrayFormat: 'brackets'})
  // },
  data: {
    firstName: 'Fred',
  },
  // adapter: function (config) {
  //   /* ... */
  // },
  // auth: {
  //   username: 'janedoe',
  //   password: 's00pers3cret',
  // },
  // `onUploadProgress` 允许为上传处理进度事件
  // onUploadProgress: function (progressEvent) {
  //   // 对原生进度事件的处理
  // },

  // // `onDownloadProgress` 允许为下载处理进度事件
  // onDownloadProgress: function (progressEvent) {
  //   // 对原生进度事件的处理
  // },

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  // validateStatus: function (status) {
  //   return status >= 200 && status < 300 // 默认的
  // },

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 9000,
  //   // auth: {
  //   //   username: 'mikeymike',
  //   //   password: 'rapunz3l',
  //   // },
  // },

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  // cancelToken: new CancelToken(function (cancel) {}),
})

// cancelToken: new CancelToken(function executor(c) {
//   // executor 函数接收一个 cancel 函数作为参数
//   cancel = c;
// })
console.log('$axios.onRequest: ', $axios.onRequest)
if (typeof window !== 'undefined') {
  window.$axios = $axios
}
$axios.interceptors.request.use(
  (config, a) => {
    console.log('$axios.interceptors.request: ', { config, a })
    if (config.method === 'get') {
      return config
    }

    if (config.url.includes('vaffle.com')) {
      config.headers = {
        ...config.headers,
        timestamp: Math.round(new Date().getTime() / 1000),
        'serial-number': '2fba0f6478845924cba2b2c1bfd70cd8',
        tik:
          'czJYSytDanZqTDQvL09qZWxINjRLYkhIcE1LU0VvNkNxZ25pa3I3cnNucGVyZE1JTThlQ0JQdXlWblZFQkVVdjlQU0JadFczeFdDYTd0QjNCVXhGNE5vQXRGWXBxL0JaNGdtMDh6RHdkQWIyVStMZTNwSXI1WmgzSDlCYUdHM00=',
        version: '4.0.4',
        device: 'web',
        lang: 'en',
      }
    }
    config.headers = {
      ...config.headers,
      'Access-Control-Allow-Origin': '*',
      // 'Content-Type': 'application/json',
    }
    return config
  },
  (error, a) => {
    console.log('$axios.interceptors.request.error: ', { error, a })
    Promise.reject(error)
  },
)

$axios.interceptors.response.use(
  (response, a) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('$axios.interceptors.response: ', { response, a })
    return response
  },
  (error, a) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('$axios.interceptors.response.error: ', { error, a })
    return Promise.reject(error)
  },
)

export const useAxios = (request, { initialData, ...config } = {}) => {
  return useSWR(
    request && JSON.stringify(request),
    () =>
      axios({
        ...request,
        ...config,
        timeout: 30000,
      }).then((res) => {
        const { data, error, ...others } = res
        console.log('RES: ', { data, error, others })
        return data || {}
      }),
    {
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        headers: {},
        data: initialData,
      },
      ...config,
    },
  )
}

export const useGet = (
  url,
  { initialData, headers, params, ...config } = {},
) => {
  // return useAxios(request, {
  //   initialData,
  //   ...config,
  //   method: 'post',
  // })
  return useSWR(
    url && JSON.stringify(url),
    () =>
      $axios
        .get(url, {
          params,
          headers,
          // ...others,
          // ...request,
          // timeout: 30000,
          // cancelToken: new CancelToken(function executor(c) {
          //   // An executor function receives a cancel function as a parameter
          //   cancel = c
          // }),
        })
        .then((res) => {
          const { data, error, ...others } = res
          console.log('RES: ', { data, error, others })
          return data || {}
        }),
    {
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        headers: {},
        data: initialData,
      },
      refreshInterval: 0,
      shouldRetryOnError: false,
      ...config,
    },
  )
}

export const usePost = (request, { initialData, ...config } = {}) => {
  // return useAxios(request, {
  //   initialData,
  //   ...config,
  //   method: 'post',
  // })
  typeof window !== 'undefined' && (window.$axios = $axios)
  const { url, params, ...others } = request || {}
  return useSWR(
    request && JSON.stringify(request),
    () =>
      $axios
        .post(url, {
          ...params,
          // ...others,
          // ...request,
          // timeout: 30000,
          // cancelToken: new CancelToken(function executor(c) {
          //   // An executor function receives a cancel function as a parameter
          //   cancel = c
          // }),
        })
        // .post(url, { repo_id: 233 })
        // .post(url, JSON.stringify({ repo_id: 233 }))
        // .post(url, JSON.parse(JSON.stringify({ repo_id: 233 })))
        .then((res) => {
          const { data, error, ...others } = res
          console.log('RES: ', { data, error, others })
          return data || {}
        })
        .catch((err) => {
          console.log('Error: ', err)
        }),
    {
      initialData: initialData && {
        status: 200,
        statusText: 'InitialData',
        headers: {},
        data: initialData,
      },
      refreshInterval: 0,
      shouldRetryOnError: false,
      ...config,
    },
  )
}

export const get = (url, params, { initialData, headers, ...config } = {}) => {
  return $axios
    .get(url, {
      params,
      headers,
      // ...others,
      // ...request,
      // timeout: 30000,
      // cancelToken: new CancelToken(function executor(c) {
      //   // An executor function receives a cancel function as a parameter
      //   cancel = c
      // }),
    })
    .then((res) => {
      const {
        data,
        error,
        config,
        headers,
        request,
        status,
        statusText,
        ...others
      } = res
      console.log('RES: ', { data, error, others })
      return { data, headers }
    })
    .catch((err) => {
      console.log('Error: ', err)
    })
}

export const post = (request, { initialData, ...config } = {}) => {
  const { url, params, ...others } = request || {}
  return $axios
    .post(url, {
      ...params,
      // ...others,
      // ...request,
      // timeout: 30000,
      // cancelToken: new CancelToken(function executor(c) {
      //   // An executor function receives a cancel function as a parameter
      //   cancel = c
      // }),
    })
    // .post(url, { repo_id: 233 })
    // .post(url, JSON.stringify({ repo_id: 233 }))
    // .post(url, JSON.parse(JSON.stringify({ repo_id: 233 })))
    .then((res) => {
      const { data, error, ...others } = res
      console.log('RES: ', { data, error, others })
      return data || {}
    })
    .catch((err) => {
      console.log('Error: ', err)
    })
}
