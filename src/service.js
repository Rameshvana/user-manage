import axios from 'axios';


export function getData(getUrl){
  return axios.get(getUrl)
}

export function updateData(updateUrl,data){
  return axios.put(updateUrl,data)
}

export function deleteData(delUrl){
  return axios.delete(delUrl)
}