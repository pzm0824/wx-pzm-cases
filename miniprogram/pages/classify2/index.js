// pages/classify2/index.js
const mock = require("../../mock/category.js")

<<<<<<< HEAD
=======
var searchContent = [
  {
    title: '女装',
    content: [
      // { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '鞋包',
    content: [
      // { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '母婴',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      // { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '男装',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '内衣',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '食品',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '百货',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '美女',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      // { ic: 'icon-chaoguo', icname: '多多矿场' },
      // { ic: 'icon-shucai', icname: '一分抽奖' },
      // { ic: 'icon-diaodai', icname: '食品超市' },
      // { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      // { ic: 'icon-xiaokuku', icname: '天天红包' },
      // { ic: 'icon-tangguo1', icname: '电器城' },
      // { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '手机',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '电器',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '家纺',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '家具',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '电脑',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  },
  {
    title: '充值',
    content: [
      { ic: 'icon-naozhong', icname: '限时秒杀' },
      { ic: 'icon-yagaoyashua', icname: '每日清仓' },
      { ic: 'icon-chaoguo', icname: '多多矿场' },
      { ic: 'icon-shucai', icname: '一分抽奖' },
      { ic: 'icon-diaodai', icname: '食品超市' },
      { ic: 'icon-shejishi2', icname: '时尚穿搭' },
      { ic: 'icon-xiaokuku', icname: '天天红包' },
      { ic: 'icon-tangguo1', icname: '电器城' },
      { ic: 'icon-diaodai', icname: '食品超市' }
    ]
  }
];
>>>>>>> 698f9dadc4b724e1a5a5282a03f008f228de9d29
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
  onLoad: function(options) {
<<<<<<< HEAD
    let windowHeight = wx.getSystemInfoSync().windowHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().windowWidth // 屏幕的宽度
    this.setData({
      scrollHeight: windowHeight * 750 / windowWidth  - 82 +'rpx'
    })
    
    let myCategoryTitle = []
    this.data.categoryContent.forEach(item=>{
      myCategoryTitle.push(item.name)
    })
    this.setData({
      categoryTitle: myCategoryTitle
=======
    console.log(wx.getSystemInfoSync(), 'wx.getSystemInfoSync()')
    const ratio = wx.getSystemInfoSync().windowHeight * 750 / wx.getSystemInfoSync().windowWidth
    console.log(ratio)
    this.setData({
      scrHeight: ratio  - 82 + 'rpx',
>>>>>>> 698f9dadc4b724e1a5a5282a03f008f228de9d29
    })

  },

<<<<<<< HEAD
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

=======
 
  // 左侧当前选中时 文字高亮
  categoryLeftSelect(e) {
    console.log(e)
    this.setData({
      categoryCur: e.target.id
    })

    var curId = e.target.id
    //设置 < 5 正常左侧右侧 五个item就会触发滚动条 
    if (curId < 5) {
      this.setData({
        categoryCur: curId,
        scrollTop: '0',
        scView: 'c' + curId
      })
    } else {
      this.setData({
        categoryCur: curId,
        scrollTop: [0.5 + (curId - 5)] * 55,
        scView: 'c' + curId
      })
    }
  },
  //滚动触发 左侧高亮
  rigConScr: function (e) {
    var that = this;
    var query = wx.createSelectorQuery();
    query.selectAll('.category-right-item').boundingClientRect(function (res) {
      res.forEach(function (item) {
        console.log(item)
        if (item.top > 0 && item.top < 150) {
          var curId = item.id.substr(1);
              //设置 < 5 正常左侧右侧 五个item就会触发滚动条 

          if (curId < 5) {
            that.setData({
              categoryCur: curId,
              scrollTop: '0'
            })
          } else {
            that.setData({
              categoryCur: curId,
              scrollTop: [0.5 + (curId - 5)] * 55
            })
          }
        }
      })
    }).exec();
  },
>>>>>>> 698f9dadc4b724e1a5a5282a03f008f228de9d29
})