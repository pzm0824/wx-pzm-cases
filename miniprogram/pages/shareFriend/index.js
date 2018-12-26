import Poster from '../../component/canvas/poster/poster';

Page({
  data: {
    jdConfig: {
      width: 750,
      height: 1334,
      backgroundColor: '#fff',
      debug: false,
      blocks: [
        {
          width: 690,
          height: 808,
          x: 30,
          y: 183,
          borderWidth: 2,
          borderColor: '#f0c2a0',
          borderRadius: 20,
        },
        {
          width: 634,
          height: 74,
          x: 59,
          y: 770,
          backgroundColor: '#fff',
          opacity: 0.5,
          zIndex: 100,
        },
      ],
      texts: [
        {
          x: 113,
          y: 61,
          baseLine: 'middle',
          text: 'pzm',
          fontSize: 32,
          color: '#8d8d8d',
        },
        {
          x: 30,
          y: 113,
          baseLine: 'top',
          text: '发现一个好物，推荐给你呀',
          fontSize: 38,
          color: '#080808',
        },
        {
          x: 92,
          y: 810,
          fontSize: 38,
          baseLine: 'middle',
          text: '标题标题标题标题标题标题标题标题标题',
          width: 570,
          lineNum: 1,
          color: '#8d8d8d',
          zIndex: 200,
        },
       
     
        {
          x: 59,
          y: 945,
          baseLine: 'middle',
          text: [
            {
              text: '商家发货&售后',
              fontSize: 28,
              color: '#929292',
            },
            {
              text: '七天退货',
              fontSize: 28,
              color: '#929292',
              marginLeft: 50,
            },
            {
              text: '运费险',
              fontSize: 28,
              color: '#929292',
              marginLeft: 50,
            },
          ]
        },
        {
          x: 360,
          y: 1065,
          baseLine: 'top',
          text: '长按识别小程序码',
          fontSize: 38,
          color: '#080808',
        },
        {
          x: 360,
          y: 1123,
          baseLine: 'top',
          text: '超值好货一起拼',
          fontSize: 28,
          color: '#929292',
        },
      ],
      images: [
        {
          width: 62,
          height: 62,
          x: 30,
          y: 30,
          borderRadius: 62,
          url: 'https://image.hgc12360.com/admin/products/201812/18/1_1545120400_EBjQ3WxuaC.jpg',
        },
        {
          width: 634,
          height: 634,
          x: 59,
          y: 210,
          url: 'https://image.hgc12360.com/admin/products/201812/18/1_1545120400_EBjQ3WxuaC.jpg',
        },
        {
          width: 220,
          height: 220,
          x: 92,
          y: 1020,
          url:'https://image.develop.mircrotv.com/admin/categories/201812/18/1_1545126417_xAsIVHagI8.png',
        },
        {
          width: 750,
          height: 90,
          x: 0,
          y: 1244,
          url:'https://image.develop.mircrotv.com/admin/categories/201812/18/1_1545126408_dpbd9GIRnO.png',
        }
      ]

    },
    demoConfig: {
      width: 750,
      height: 1000,
      backgroundColor: '#fff',
      debug: false,
      blocks: [
        {
          x: 0,
          y: 10,
          width: 750, // 如果内部有文字，由文字宽度和内边距决定
          height: 120,
          paddingLeft: 0,
          paddingRight: 0,
          borderWidth: 10,
          borderColor: 'red',
          backgroundColor: 'blue',
          borderRadius: 40,
          text: {
            text: [
              {
                text: '金额¥ 1.00',
                fontSize: 80,
                color: 'yellow',
                opacity: 1,
                marginLeft: 50,
                marginRight: 10,
              },
              {
                text: '金额¥ 1.00',
                fontSize: 20,
                color: 'yellow',
                opacity: 1,
                marginLeft: 10,
                textDecoration: 'line-through',
              },
            ],
            baseLine: 'middle',
          },
        }
      ],
      texts: [
        {
          x: 0,
          y: 180,
          text: [
            {
              text: '长标题长标题长标题长标题长标题长标题长标题长标题长标题',
              fontSize: 40,
              color: 'red',
              opacity: 1,
              marginLeft: 0,
              marginRight: 10,
              width: 200,
              lineHeight: 40,
              lineNum: 2,
            },
            {
              text: '原价¥ 1.00',
              fontSize: 40,
              color: 'blue',
              opacity: 1,
              marginLeft: 10,
              textDecoration: 'line-through',
            },
          ],
          baseLine: 'middle',
        },
        {
          x: 10,
          y: 330,
          text: '金额¥ 1.00',
          fontSize: 80,
          color: 'blue',
          opacity: 1,
          baseLine: 'middle',
          textDecoration: 'line-through',
        },
      ],
      images: [
        {
          url: 'https://image.hgc12360.com/admin/products/201812/18/1_1545120400_EBjQ3WxuaC.jpg',
          width: 300,
          height: 300,
          y: 450,
          x: 0,
          // borderRadius: 150,
          // borderWidth: 10,
          // borderColor: 'red',
        },
        {
          url: 'https://image.hgc12360.com/admin/products/201812/18/1_1545120400_EBjQ3WxuaC.jpg',
          width: 100,
          height: 100,
          y: 450,
          x: 400,
          borderRadius: 100,
          borderWidth: 10,
        },
      ],
      lines: [
        {
          startY: 800,
          startX: 10,
          endX: 300,
          endY: 800,
          width: 5,
          color: 'red',
        }
      ]

    }
  },
  onPosterSuccess(e) {
    const { detail } = e;
    wx.previewImage({
      current: detail,
      urls: [detail]
    })
  },
  onPosterFail(err) {
    console.error(err);
  },

  /**
   * 异步生成海报
   */
  onCreatePoster() {
    Poster.create();
  }
})