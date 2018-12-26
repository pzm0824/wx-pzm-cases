// pages/share/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mask_flag: false,
    painting: {},
    shareImage: '',
    share_img_flag:false,
    share_mask:false
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  share() {
    this.setData({
      mask_flag: true,
      share_mask:true,
    })
  },
  closeShare() {
    this.setData({
      mask_flag: false,
      share_mask:false,
      share_img_flag: false,

    })
  },
  shareOne() {

  },
  shareTwo() {

  },
  eventDraw() {
    wx.showLoading({
      title: '绘制分享图片中',
      mask: true
    })
    this.setData({
      share_img_flag: true,
      share_mask: false,

      painting: {
        width: 375,
        height: 555,
        clear: true,
        views: [{
            type: 'image',
          url: 'https://image.develop.mircrotv.com/admin/categories/201812/24/1_1545642012_fn3ZE0kcFw.jpeg',
            top: 0,
            left: 0,
            width: 375,
            height: 555
          },
          {
            type: 'image',
            url: 'https://image.develop.mircrotv.com/admin/categories/201812/18/1_1545126417_xAsIVHagI8.png',
            top: 27.5,
            left: 29,
            width: 55,
            height: 55
          },
          {
            type: 'image',
            url: 'https://image.develop.mircrotv.com/admin/categories/201812/18/1_1545126417_xAsIVHagI8.png',
            top: 27.5,
            left: 29,
            width: 55,
            height: 55
          },
          {
            type: 'text',
            content: '您的好友【PZM】',
            fontSize: 16,
            color: '#402D16',
            textAlign: 'left',
            top: 33,
            left: 96,
            bolder: true
          },
          {
            type: 'text',
            content: '发现一件好货，邀请你一起8折免费拿！',
            fontSize: 15,
            color: '#563D20',
            textAlign: 'left',
            top: 59.5,
            left: 96
          },
          {
            type: 'image',
            url: 'https://image.develop.mircrotv.com/admin/categories/201812/24/1_1545642143_eSps3PF0DQ.jpg',
            top: 136,
            left: 42.5,
            width: 290,
            height: 186
          },
          {
            type: 'image',
            url: 'https://image.develop.mircrotv.com/admin/categories/201812/18/1_1545126417_xAsIVHagI8.png',
            top: 443,
            left: 85,
            width: 68,
            height: 68
          },
          {
            type: 'text',
            content: '正品MAC魅可口红礼盒生日唇膏小辣椒Chili西柚情人',
            fontSize: 16,
            lineHeight: 21,
            color: '#383549',
            textAlign: 'left',
            top: 336,
            left: 44,
            width: 287,
            MaxLineNumber: 2,
            breakWord: true,
            bolder: true
          },
          {
            type: 'text',
            content: '￥0.00',
            fontSize: 19,
            color: '#E62004',
            textAlign: 'left',
            top: 387,
            left: 44.5,
            bolder: true
          },
          {
            type: 'text',
            content: '原价:￥138.00',
            fontSize: 13,
            color: '#7E7E8B',
            textAlign: 'left',
            top: 391,
            left: 110,
            textDecoration: 'line-through'
          },
          {
            type: 'text',
            content: '长按识别图中二维码帮我砍个价呗~',
            fontSize: 14,
            color: '#383549',
            textAlign: 'left',
            top: 460,
            left: 165.5,
            lineHeight: 20,
            MaxLineNumber: 2,
            breakWord: true,
            width: 125
          }
        ]
      }
    })
  },
  eventSave() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareImage,
      success(res) {
        wx.showToast({
          title: '保存图片成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  eventGetImage(event) {
    wx.hideLoading()
    const {
      tempFilePath,
      errMsg
    } = event.detail
    if (errMsg === 'canvasdrawer:ok') {
      this.setData({
        shareImage: tempFilePath
      })
    }
  }
})