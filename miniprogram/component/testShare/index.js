function getImageInfo(url) {
  console.log(url)
  return new Promise((resolve, reject) => {
    wx.getImageInfo({
      src: url,
      success: resolve,
      fail: reject,
    })
  })
}

function createRpx2px() {
  const {
    windowWidth
  } = wx.getSystemInfoSync()

  return function(rpx) {
    return windowWidth / 750 * rpx
  }
}

const rpx2px = createRpx2px()

function canvasToTempFilePath(option, context) {
  return new Promise((resolve, reject) => {
    wx.canvasToTempFilePath({
      ...option,
      success: resolve,
      fail: reject,
    }, context)
  })
}

function saveImageToPhotosAlbum(option) {
  return new Promise((resolve, reject) => {
    wx.saveImageToPhotosAlbum({
      ...option,
      success: resolve,
      fail: reject,
    })
  })
}


Component({
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer(visible) {
        if (visible ) {
          this.draw()
         
        }
      }
    },
    userInfo: {
      type: Object,
      value: false
    }
  },

  data: {
    // beginDraw: false,
    isDraw: false,
    canvasWidth: 843,
    canvasHeight: 1500,
    imageFile: '',
    responsiveScale: 1,
  },

  lifetimes: {
    ready() {
      const designWidth = 375
      const designHeight = 603 // 这是在顶部位置定义，底部无tabbar情况下的设计稿高度

      // 以iphone6为设计稿，计算相应的缩放比例
      const {
        windowWidth,
        windowHeight
      } = wx.getSystemInfoSync()
      const responsiveScale =
        windowHeight / ((windowWidth / designWidth) * designHeight)
      if (responsiveScale < 1) {
        this.setData({
          responsiveScale,
        })
      }
    },
  },

  methods: {
    handleClose() {
      this.triggerEvent('close')
    },
    handleSave() {
      const { imageFile } = this.data

      if (imageFile) {
        saveImageToPhotosAlbum({
          filePath: imageFile,
        }).then(() => {
          wx.showToast({
            icon: 'none',
            title: '分享图片已保存至相册',
            duration: 2000,
          })
          this.triggerEvent('close')

        })
      }
    },
    draw() {
      wx.showLoading()
      const {
        userInfo,
        canvasWidth,
        canvasHeight
      } = this.data
      const {
        avatarUrl,
        nickName
      } = userInfo
      const avatarPromise = getImageInfo("https://image.develop.mircrotv.com/admin/product_descriptions/201901/09/1_1547014765_Qu52vM4aF7.png")
      console.log(this.data, 'userInfo')
      const backgroundPromise = getImageInfo('https://image.develop.mircrotv.com/admin/product_descriptions/201901/09/1_1547014765_Qu52vM4aF7.png')
      const productPromise = getImageInfo("https://image.develop.mircrotv.com/admin/products/201901/09/1_1547017115_IFQWnxb063.jpg")

      Promise.all([avatarPromise, backgroundPromise, productPromise])
        .then(([avatar, background,product]) => {
          const ctx = wx.createCanvasContext('share', this)
          /* 
            320 468 为自己设置canvas的宽高 640rpx 946rpx 根据自己的宽高 修改 320 468
            所有 y轴位置 都 根据rpx2px(100rpx)  ps量的长度如 100
          */

          const canvasW = rpx2px(320 * 2)
          const canvasH = rpx2px(465 * 2)
          console.log(canvasW, canvasH,"canvasWcanvasW")
      
          // 绘制背景，填充满整个canvas画布
      
          // 绘制背景
          ctx.drawImage(
            background.path,
            0,
            0,
            canvasW,
            canvasH
          )
  
          // 绘制商品名
          ctx.setFontSize(rpx2px(32))
          ctx.setTextAlign('left')
          ctx.setFillStyle('#333')
          console.log(canvasH,'canvasH')
          ctx.fillText(
            "【限量活动】CPB肌肤之钥 ",
            rpx2px(44),
            rpx2px(180),
          )
          // 绘制商品名
          // ctx.setFontSize(rpx2px(32))
          // ctx.setTextAlign('left')
          // ctx.setFillStyle('#333')
          // ctx.fillText(
          //   "【限量活动】CPB肌肤之钥 ",
          //   rpx2px(44),
          //   rpx2px(224),
          // )
          // 绘制商品图片
          const produtW = rpx2px(240 * 2)
          const productH = rpx2px(240 * 2)
          console.log(produtW, productH,'productHproductHproductH')
          ctx.drawImage(
            product.path,
            (canvasW - produtW)/2,
            rpx2px(250),
            produtW,
            productH
          )

          //绘制商品信息现售  
          ctx.setFontSize(rpx2px(32))
          ctx.setTextAlign('left')
          ctx.setFillStyle('#BAA87D')
          ctx.fillText(
            "现售：￥399",
            rpx2px(44),
            canvasH-52,
          )
         //绘制商品信息原价  
          ctx.setFontSize(rpx2px(24))
          ctx.setTextAlign('left')
          ctx.setFillStyle('#B8B8B8')
          ctx.fillText(
            "原价：499",
            rpx2px(236),
            canvasH - 52,
          )


          //绘制用户名
          ctx.setFontSize(rpx2px(28))
          ctx.setTextAlign('left')
          ctx.setFillStyle('#7C7C7C')
          ctx.fillText(
            "来自小白",
            rpx2px(44),
            canvasH-25,
          )
          // 绘制二维码
          ctx.drawImage(
            product.path,
            rpx2px(445),
            rpx2px(770),
            rpx2px(140),
            rpx2px(140)
          )
       

          ctx.stroke()
          ctx.draw(false, () => {
            canvasToTempFilePath({
              canvasId: 'share',
            }, this).then(({
              tempFilePath
            }) => this.setData({
                imageFile: tempFilePath 
            }))
          })

         


          wx.hideLoading()
          this.setData({
            isDraw: true
          })
        })
        .catch(() => {
          // this.setData({
          //   beginDraw: false
          // })
          wx.hideLoading()
        })
    }
  }
})