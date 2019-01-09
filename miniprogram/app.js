App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */

  globalData:{
    userInfo:null
  },

  onLaunch: function () {
    var storage_userInfo = wx.getStorageInfoSync("storage_userInfo") || []
    wx.setStorageSync("storage_userInfo", storage_userInfo)

    //登录
    wx.login({
      success:res=>{
         // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息

    wx.getSetting({
      success:res=>{
        console.log(res,'res')
        // 判断用户是否授权
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:res=>{
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if(this.userInfoReadyCallback){
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },


})
