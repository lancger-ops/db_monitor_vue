import axios from '@/libs/api.request'

export const getAlertLog = parameter => {
  return axios.request({
    url: `/system/api/alert-log?${parameter}`,
    method: 'get'
  })
}

export const getAlarmConf = parameter => {
  return axios.request({
    url: `/system/api/alarm-conf?${parameter}`,
    method: 'get'
  })
}

export const updateAlarmConf = (id, data) => {
  return axios.request({
    url: `/system/api/alarm-conf/${id}`,
    data: data,
    method: 'PUT'
  })
}

export const deleteAlarmCconf = id => {
  return axios.request({
    url: `/system/api/alarm-conf/${id}`,
    method: 'delete'
  })
}


export const getAlarmInfo = parameter => {
  return axios.request({
    url: `/system/api/alarm-info?${parameter}`,
    method: 'get'
  })
}

