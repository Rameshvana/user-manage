import axios from 'axios';


export function getData(getUrl){
  return axios.get(getUrl)
}