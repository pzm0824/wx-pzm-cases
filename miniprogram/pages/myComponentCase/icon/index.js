// pages/myComponentCase/icon/index.js

const icon = require('../../../mock/icon.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon:icon.default.icon
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  searchIcon(e) {
    console.log(e, 'eee')
    const val = e.detail.value
    const icon_data = this.data.icon

    icon_data.forEach(item => {
      if (item.name.indexOf(val) != -1) {
        item.isShow = true
      } else {
        item.isShow = false
      }
    })
    this.setData({
      icon: icon_data
    })
  }
})