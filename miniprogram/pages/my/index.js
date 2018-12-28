// pages/my/index.js

const my_list = require("../../mock/my.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_list: my_list.default.order_list,
    grid_list_menu: my_list.default.grid_list_menu,
    linear_list_menu_one: my_list.default.linear_list_menu_one,
    linear_list_menu_two: my_list.default.linear_list_menu_two
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

  // 前往所有订单列表
  goToAllOrder: function() {
    wx.navigateTo({
      url: '/pages/order/index?orderStatus=0',
    })
  },

  // 拨打电话
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: '15625294115' // 仅为示例，并非真实的电话号码
    })
  }
})