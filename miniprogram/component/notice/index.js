// component/notice/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    notice: {
      type: "String",
      value: "2018年12月27号' wx-pzm - cases '正式运营了。"
    },
    scroll: {
      type: Boolean,
      value: true
    },
    
    bgColor: {
      type: String,
      value: "rgb(94, 185, 94)"
    },
    bgRgba: {
      type: String,
      value: "rgba(94, 185, 94,0)"
    },
    textColor: {
      type: String,
      value: "#fff"
    },
    textSize: {
      type: [Number, String],
      value: 24
    },
    icon:{
      type: String,
      value:"icon-notification"
    },
    iconColor: {
      type: String,
      value: "#fff"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})