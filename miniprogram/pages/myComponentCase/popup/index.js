// pages/myComponentCase/popup/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalDirection: "center"
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
      title: "pzm",
      imageUrl: "http://pic1.win4000.com/wallpaper/3/543c9f65433d0.jpg",
      withShareTicket: true,
      success: function(res) {
        console.log(res, 'success')
      },
      fail: function(err) {
        console.log(err, 'err')
      }
    })
  },

  showPopupCenter(e) {
    let popupComponent = this.selectComponent(".pzm-popup-center")
    popupComponent && popupComponent.show()
  },
  hidePopupCenter() {
    let popupComponent = this.selectComponent(".pzm-popup-center")
    popupComponent && popupComponent.hide()
  },
  showPopupBottom(e) {
    let popupComponent = this.selectComponent(".pzm-popup-bottom")
    console.log(popupComponent, 'popupComponent')
    popupComponent && popupComponent.show()
  },
  hidePopupBottom() {
    let popupComponent = this.selectComponent(".pzm-popup-bottom")
    popupComponent && popupComponent.hide()
  },

  showPopupTop(e) {
    let popupComponent = this.selectComponent(".pzm-popup-top")
    console.log(popupComponent, 'popupComponent')
    popupComponent && popupComponent.show()
  },
  hidePopupTop() {
    let popupComponent = this.selectComponent(".pzm-popup-top")
    popupComponent && popupComponent.hide()
  },
  showPopupLeft(e) {
    let popupComponent = this.selectComponent(".pzm-popup-left")
    console.log(popupComponent, 'popupComponent')
    popupComponent && popupComponent.show()
  },
  hidePopupLeft() {
    let popupComponent = this.selectComponent(".pzm-popup-left")
    popupComponent && popupComponent.hide()
  },
  showPopupRight(e) {
    let popupComponent = this.selectComponent(".pzm-popup-right")
    console.log(popupComponent, 'popupComponent')
    popupComponent && popupComponent.show()
  },
  hidePopupRight() {
    let popupComponent = this.selectComponent(".pzm-popup-right")
    popupComponent && popupComponent.hide()
  },

  // 分享给好友
  eventDraw() {

  }
})