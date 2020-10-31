import axios from '@/utils/http'
import {baseurl} from '@/utils/http'

export default {
  login(userInfo) {
    return axios({
      url: `${baseurl.prod}/admin/login`,
      method: 'post',
      data: userInfo
    })
  }
}