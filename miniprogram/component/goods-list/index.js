Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  externalClasses:['pzm-class'],
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    strongT:{
      type: String, 
      value: '标题' 
    },
    des:{
      type:String,
      value:''
    },
    img_url:{
      type:String,
      value:''
    },
    now_price:{
      type:Number,
      value:null
    },
    old_price:{
      type: Number,
      value: null
    }
    
  },

  methods:{
    buy:function(event){
      const myEventDetail = {} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('click', {pzm:'1234'})
      console.log(event,'event')
    }
  }
  
 

})
