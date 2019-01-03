// pages/moreList/inex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll_left: 0, //	设置横向滚动条位置
    nav_list: ['全部', '火影忍者', '海贼王', '斗罗大陆', '网球王子', '星辰变', '妖神记', '魔道祖师', '武庚记', '武动乾坤', '奥特曼'],
    tabCur: 0,
    detail_x: 30,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 导航栏选中
  tabSelect(e) {
    console.log(e)
    this.setData({
      tabCur: e.currentTarget.dataset.index,
      scroll_left: (e.currentTarget.dataset.index - 1) * 90, //90 根据item的width改变
      detail_x: (e.currentTarget.dataset.index) * 90 + 30
    })
  },
})