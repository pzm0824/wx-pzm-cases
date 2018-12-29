// component/popup/index.js
Component({
  /**
   * 组件的属性列表
   */
   options: {
      multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
  properties: {
    /*
     modalDirection 动画方向  默认从底部弹出
    */
   
    modalDirection: {
      type: String,
      value: "",
      observer(newVal, oldVal, changedPath) {
        console.log(newVal, oldVal, 'newVal, oldVal')
        if (newVal == 'bottom' || newVal == "top") {
          this.setData({
            width: "100%",
            height: "auto"
          })
        } else if (newVal == 'left' || newVal == "right") {
          this.setData({
            width: "auto",
            height: '100%'
          })
        } else {
          this.setData({
            width: "auto",
            height: 'auto'
          })
        }
      }
    },
    status: {
      type: String,
      value: "hide",

    },
    bgColor: {
      type: String,
      value: "#fff"
    },
    zIndex: {
      type: [String, Number],
      value: 100,
      // 当传值为空的时候 选择默认的值
      observer(newVal, oldVal, changedPath) {
        console.log(newVal, oldVal, changedPath, 222)
        this.setData({
          zIndex: newVal != "" ? newVal : oldVal
        })
      }
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    zIndex: 100,
    height: 0,
    width: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show(e) {
      this.setData({
        status: 'show'
      })
    },
    hide() {
      this.setData({
        status: 'hide'
      })
    }
  }
})