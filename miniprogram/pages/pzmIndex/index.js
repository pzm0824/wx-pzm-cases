// pages/pzmIndex/index.js
const mock = require('../../mock/index.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiper_list: mock.default.swiper_list, //轮播图
    nav_list: mock.default.nav_list, //导航
    limit_list: mock.default.limit_list, //限量
    recommend_list: mock.default.recommend_list, //热门推荐
    bar_list: mock.default.bar_list, //bar栏
    notice: "wx-pzm-cases平台将在1月1日0点－9点进行系统升级，升级期间将暂停服务，敬请谅解。"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},
  onShow() {
    this.showAdvertisement()
  },
  onHide() {
    this.hideAdvertisement()
  },
  onShareAppMessage() {
    wx.showShareMenu({
      title: 'pzm'
    })
  },
  // swiper 获取到当前图片index
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // 菜单滚动获取信息
  navScroll: function(e) {
    this.setData({
      scroll_left_num: e.detail.scrollLeft * 0.1
    })
  },

  //显示广告
  showAdvertisement() {
    let popupComponent = this.selectComponent(".pzm-popup-center")
    popupComponent && popupComponent.show()
  },
  //关闭广告
   hideAdvertisement() {
    let popupComponent = this.selectComponent(".pzm-popup-center")
    popupComponent && popupComponent.hide()
  },

  //点击进入广告
  goAdvertisement(){
    wx.showModal({
      title: '广告中心',
      content: '欢迎来到pzm',
    })
  }

})