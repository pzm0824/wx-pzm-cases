// pages/classify2/index.js
var searchTitle = ['女装', '鞋包', '母婴', '男装', '内衣', '食品', '百货', '美女', '手机', '电器', '家纺', '家具', '电脑', '充值'];

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
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchTitle: searchTitle,
    searchContent: searchContent,
    categoryHeight: 0,
    categoryCur:0,
    scView: 'c0',
    scrollTop: '0',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(wx.getSystemInfoSync(), 'wx.getSystemInfoSync()')
    const ratio = wx.getSystemInfoSync().windowHeight * 750 / wx.getSystemInfoSync().windowWidth
    console.log(ratio)
    this.setData({
      scrHeight: ratio  - 82 + 'rpx',
    })
  },

 
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
})