// pages/pzmIndex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    swiper_list: [{
      id: 0,
      url: 'http://p3.pstatp.com/large/pgc-image/1528116186201cc37c78550'
    }, {
      id: 1,
      url: 'https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2018-10/2d19f536-957b-48c7-8bb0-c6a75fc16146_m.jpg'
    }, {
      id: 2,
      url: 'http://pic1.win4000.com/wallpaper/3/543c9f65433d0.jpg'
    }, {
      id: 3,
      url: 'http://i.shangc.net/2018/0513/20180513012805901.jpg'
    }, {
      id: 4,
      url: "http://p98.pstatp.com/large/pgc-image/153855704293169e01166e9"
    }],

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
  onShareAppMessage() {
    wx.showShareMenu({
      title:'pzm'
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
      scroll_left: e.detail.scrollLeft * 0.1
    })
  },
})