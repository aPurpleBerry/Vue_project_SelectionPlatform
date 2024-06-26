//书写品牌管理模块接口
import request from "@/utils/request";
import type {TradeMarkResponseData,TradeMark} from './type.ts'

// 品牌管理模块接口地址
enum API {
  // 获取已有品牌接口[分页]
  TRADEMARK_URL = `/admin/product/baseTrademark/`,
  // 添加品牌
  ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
  //修改已有品牌
  UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',
  // 删除已有品牌
  DELETE_API = '/admin/product/baseTrademark/remove/'
}

// 获取已有品牌接口方法
// /admin/product/baseTrademark/{page}/{limit}
// page第几页
// 获取几个已有品牌
export const reqHasTrademark = (page: number, limit: number)=> {
  return request.get<any,TradeMarkResponseData>(API.TRADEMARK_URL + `${page}/${limit}`)
}

// 添加与修改已有品牌的接口方法
export const reqAddOrUpdateTrademark = (data:TradeMark) => {
  if(data.id) {
    // 有id 说明是修改品牌
    return request.put<any, any>(API.UPDATETRADEMARK_URL, data)
  } else {
    // 新增品牌
    return request.post<any, any>(API.ADDTRADEMARK_URL, data)
  }
}


//删除某一个已有品牌业务
export const reqDeleteTrademark = (id: number) => {
  return request.delete<any,any>(API.DELETE_API + id)
}