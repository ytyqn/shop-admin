import request from '@/utils/request'
import { ILoginInfo } from './types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/admin/login/info'
  })

//   return request.get<ResponseData<ILoginInfo>>('/login/info').then(res=>{
//       return res.data
//   })
}
