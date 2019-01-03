// pages/moreList/inex.js

const mock = require('../../mock/nav.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_left: 0, //	设置横向滚动条位置
    nav_list: mock.default.nav_list01,
    tabCur: 0,
    detail_x: 30,
    winH: 0,
    goods_list: mock.default.goods_list
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    wx.getSystemInfo({
      success: (res) => {
        console.log(res, 'res')
        this.setData({
          winH: (res.windowHeight - 45) * 2
        })
      },
    })

    this.setData({

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  scrollList(e) {},
  // 导航栏选中
  tabSelect(e) {
    console.log(e)
    this.setData({
      tabCur: e.currentTarget.dataset.index,
      scroll_left: (e.currentTarget.dataset.index - 1) * 90, //90 根据item的width改变
      detail_x: (e.currentTarget.dataset.index) * 90 + 30,
    })
    this.getSelctList(e)
  },

  getSelctList(e) {
    console.log(e, 'eee')
    // wx.showModal({
    //   title: "导航",
    //   content:e._relatedInfo.anchorRelatedText
    // })
    this.data.goods_list.forEach(item => {
      item.strongT = e._relatedInfo.anchorRelatedText
    })
    this.setData({
      goods_list: this.data.goods_list
    })
  }
})