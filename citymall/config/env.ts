const devEnvironmentVariables = {
    API_URL: 'http://109.238.238.195:18011',
    CONNECT_URL: 'https://citymallidentity.payunicard.ge:8060',
    TOKEN_TTL: ''
} 

const prodEnvironmentVariables = {
    API_URL: 'http://109.238.238.195:18011',
    CONNECT_URL: 'https://citymallidentity.payunicard.ge:8060',
    TOKEN_TTL: ''
}

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;