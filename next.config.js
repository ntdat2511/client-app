module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    endpoint: process.env.REACT_APP_API_ENDPOINT,
    timeout: process.env.REACT_APP_API_TIME_OUT,
  },
};
