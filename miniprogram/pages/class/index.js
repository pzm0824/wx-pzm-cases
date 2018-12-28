// pages/card/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    win_height:0,
    list:[],
    list_flag:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const list_length = 12 
    for(let i = 0;i < list_length;i++){
      this.data.list.push(i)
    }
    this.setData({
      list:this.data.list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // setTimeout(()=>{
    //   this.setData({
    //     list_flag : 1
    //   })
    // },3000)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const _that = this
    wx.getSystemInfo({
      success: function(res) {
        console.log(res,'res')
        _that.setData({
          win_height: res.windowHeight - 15
        })
      },
    })
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