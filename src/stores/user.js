import { defineStore } from 'pinia'
import { setToken, removeToken ,setRsapublickey,setTenantId} from '@/utils/auth'
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

      return new Promise((resolve, reject) => {
        apilogin(username, password).then(res => {
          setToken(res.tokenValue);
          setTenantId(res.tenantId)
          this.token = res.token;
          this.tenantId = res.tenantId;
          this.tokenName = res.tokenName;
          this.isLogin = true;
          apiGetUserInfo().then(res => {
            console.info(res)
            this.userId = res.id;
            resolve()
          })
        }).catch(error => {
          reject(error)
        })
      })

    },
    Initrsakey: function () {
      apiinitrsakey().then(res => {
        console.info(res)
        setRsapublickey(res);
      })
    },
    GetUserInfo: function () {
      apiGetUserInfo().then(res => {
        console.info(res)
        this.userId = res.id;
      })
    },
    LogOut: function() {
      return new Promise((resolve, reject) => {
        apilogout().then(() => {
          this.token = null;
          this.userId = null;
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
})
