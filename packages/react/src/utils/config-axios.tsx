import { getUser } from '../api/auth';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://frecn56yff.execute-api.ap-southeast-1.amazonaws.com/Main'
});

const X_API_KEY = 'dwj3UZBfUY8PQ3MCiRdcg9eRI5UIG5Jo1ya7D4Sq'
const Content_Type = 'application/json'

instance.defaults.headers.common['Content-Type'] = Content_Type;
instance.defaults.headers.common['x-api-key'] = X_API_KEY;
instance.defaults.headers.common['CurrentTimezone'] = new Date().getTimezoneOffset();
//instance.defaults.headers.common['x-token-data'] = getTokenData();

instance.interceptors.request.use(request => {
  request.headers['x-token-data'] = getTokenData();
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

instance.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response, null, 2))
  return response
})

export function getAPIKey() {
  return X_API_KEY;
}

export function getTokenData() {
  var user = getUser();
  if(user === null)
  {
    return null;
  }
  else 
    if(user.isOk)
        return user.data.Token
}

export default instance;



