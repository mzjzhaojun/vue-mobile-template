import { defineStore } from 'pinia'
import { setToken, removeToken ,removeUserId,removeTenantId,setRsapublickey,setTenantId,setUserId,setUserName} from '@/utils/auth'
import { apilogin, apilogout, apiinitrsakey,apiGetUserInfo } from '@/api/login/login'

export const useUserStore = defineStore({
  id: 'userInfo',
  state: () => ({
    token: null,
    rsapublickey:null,
    tenantId:null,
    tokenName:null,
    isLogin:false,
    userId: null,
    userName: null,
    avatar: null,
    nickName: null,
    permissions: [],
    roles: [],
  }),
  actions: {
    Login: function (userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password.trim()
      const code = userInfo.code.trim()
      return new Promise((resolve, reject) => {
        apilogin(username, password,code).then(res => {
          setToken(res.tokenValue);
          setTenantId(res.tenantId)
          this.token = res.token;
          this.tenantId = res.tenantId;
          this.tokenName = res.tokenName;
          setUserName(username);
          apiGetUserInfo().then(res => {
            console.info(res)
            this.userId = res;
            setUserId(this.userId);
            resolve()
          })
        }).catch(error => {
          reject(error)
        })
      })

    },
    Initrsakey: function () {
      apiinitrsakey().then(res => {
        setRsapublickey(res);
      })
    },
    GetUserInfo: function () {
      apiGetUserInfo().then(res => {
        this.userId = res.userid;
      })
    },
    LogOut: function() {
        apilogout().then(() => {
          removeToken();
          removeUserId();
          removeTenantId();
        })
    },
  }
})
