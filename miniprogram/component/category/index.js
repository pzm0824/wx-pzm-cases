// component/category/index.js
Component({
  /**
   * 组件的属性列表
   * categoryTitle:左侧 列表   categoryContent右侧列表
   * scrollHeight 左右容器的自适应高度
   * bgColor selectedbgColor color selectedColor  左侧默认背景颜色、颜色 和 选中时背景颜色 颜色
   * showBanner 是否显示 分类 一级banner图 默认显示
   * errBanner  当banner错误时 默认显示一张图片
   */
  properties: {
    categoryTitle: {
      type: Array,
      value: []
    },
    categoryContent: {
      type: Array,
      value: []
    },

    scrollHeight: {
      type: [String, Number],
      value: 0
    },
    bgColor: {
      type: "String",
      value: '#F8F8F8'
    },
    selectedbgColor: {
      type: "String",
      value: '#fff'
    },
    color: {
      type: "String",
      value: '#59585D'
    },
    selectedColor: {
      type: "String",
      value: 'red'
    },
    url:{
      type: "String",
      value: '' 
    },
    moreUrl:{
      type: "String",
      value: ''
    },

    showBanner: {
      type: Boolean,
      value: "true",
    },
    errBanner:{
      type: "String",
      value: "http://pic1.win4000.com/wallpaper/3/543c9f65433d0.jpg"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    scView: "c0", //scroll-view 中 scroll-into-view 滚动定义的id
    categoryCur: 0, //默认选择第一个
    scrollTop: 0,
    showCategory:false,
    list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  },
  pageLifetimes: {
    show() {
      // 页面被展示
      setTimeout(()=>{
        this.setData({
          showCategory:true
        })
      },3000)
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //点击左侧  右侧联动
    categoryLeftSelect(e) {
      this.setData({
        categoryCur: e.target.id
      })
      var curId = e.target.id

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

    // 滚动右侧 左侧联动
    categoryRightScroll(e) {
      var that = this;
      var query = wx.createSelectorQuery().in(this);
      query.selectAll('.category-right-item').boundingClientRect(function(res) {
        res.forEach(function(item) {
          if (item.top > 0 && item.top < 150) {
            var curId = item.id.substr(1);
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
    }
  }
})