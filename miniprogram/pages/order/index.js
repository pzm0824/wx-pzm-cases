// pages/order/index.js

//对照 my.js中的状态
const order_title = ["全部订单","待付款", "待发货", "待收货", "待评价", "退换/售后"]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_status:0,
    order_title:'全部订单'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options,'options')
    this.setData({
      order_status:options.orderStatus
    })
    this.setData({
      order_title: order_title[this.data.order_status]
    })
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

  }
})