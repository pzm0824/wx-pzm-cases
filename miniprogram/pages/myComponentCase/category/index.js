// pages/myComponentCase/category/index.js
const mock = require("../../../mock/category.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryTitle: [],
    categoryContent: mock.default.categoryContent,
    scrollHeight: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
      scrollHeight: windowHeight * 750 / windowWidth  + 'rpx'
    })
    let myCategoryTitle = []
    this.data.categoryContent.forEach(item => {
      myCategoryTitle.push(item.name)
    })
    this.setData({
      categoryTitle: myCategoryTitle
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