export const {
  NODE_ENV = 'development',
  APP_PORT = 4002,

  APP_HOSTNAME = 'localhost',
  API_GATEWAY_HOSTNAME = 'localhost',
  API_GATEWAY_PORT = 4000,
  API_GATEWAY_PROTOCOL = 'http',

  APP_SECRET = '13f2b43c4e8c4574b64b2c9596249cd03c11826d697fb461a3ef553ebda8044d'
} = process.env

export const API_GATEWAY_ORIGIN = `${API_GATEWAY_PROTOCOL}://${API_GATEWAY_HOSTNAME}:${API_GATEWAY_PORT}`

export const IN_PROD = NODE_ENV === 'production'
