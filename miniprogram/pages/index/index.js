Page({

  /**
   * 页面的初始数据
   */
  data: {
    strongT:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      goods_list: [{
        title: '【新品首发】微信小程序前端定制化服务',
        des: 'ColorUi规范 精简 高效',
        img_url: 'http://image.weilanwl.com/img/4x4.jpg',
        now_price: 0.1,
        old_price: 999
      }, {
        title: '【新品首发】微信小程序前端定制化服务',
        des: 'ColorUi规范 精简 高效',
        img_url: 'http://image.weilanwl.com/img/4x4.jpg',
        now_price: 0.1,
        old_price: 999
      }, {
        title: '【新品首发】微信小程序前端定制化服务',
        des: 'ColorUi规范 精简 高效',
        img_url: 'http://image.weilanwl.com/img/4x4.jpg',
        now_price: 0.1,
        old_price: 999
      }, {
        title: '【新品首发】微信小程序前端定制化服务',
        des: 'ColorUi规范 精简 高效',
        img_url: 'http://image.weilanwl.com/img/4x4.jpg',
        now_price: 0.1,
        old_price: 999
      }, {
        title: '【新品首发】微信小程序前端定制化服务',
        des: 'ColorUi规范 精简 高效',
        img_url: 'http://image.weilanwl.com/img/4x4.jpg',
        now_price: 0.1,
        old_price: 999
      }],
      strongT: options.category_name
    })
    
    console.log(options.category_name,'index')
  },
  //获取到当前列表的数据  在列表上加上  data-base='{{item}}' 然后打印数据
  buy(e) {
    console.log(e, 'index')
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

  }
})