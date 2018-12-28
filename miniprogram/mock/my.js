export default {

  /*
    1  待付款  2 代发货 3 待收货 4待评价 
  */
  order_list: [{
    title: '待付款',
    img_url: "icon-pay",
    color: '#38D29F',
    url: 1
  }, {
    title: '待发货',
    img_url: "icon-time",
    color: '#38D29F',
    url: 2

  }, {
    title: '待收货',
    img_url: "icon-deliver",
    color: '#38D29F',
    url: 3

  }, {
    title: '待评价',
    img_url: "icon-comment",
    color: '#38D29F',
    url: 4

  }, ],
  /*
   title 标题  img_url icon样式或者图片路径  color icon颜色  url跳转路径
  */
  grid_list_menu: [{
      title: "会员中心",
      img_url: "icon-vipcard",
      color: "#e54d42",
      url: ""
    }, {
      title: "我的预约",
      img_url: "icon-time",
      color: "#fbbd08",
      url: ""
    },
    {
      title: "我的拼团",
      img_url: "icon-friend",
      color: "#fbbd08",
      url: ""
    },

    {
      title: "优惠券",
      img_url: "icon-ticket",
      color: "#e54d42",
      url: ""
    },
    {
      title: "我的收藏",
      img_url: "icon-favor",
      color: "#e54d42",
      url: ""
    },
    {
      title: "抽奖",
      img_url: "icon-focus",
      color: "#38D291",
      url: ""
    },

    {
      title: '退换/售后',
      img_url: "icon-moneybag",
      color: '#38D29F',
      url: 5

    },
    
    {
      title: "暂不开放",
      img_url: "icon-lock",
      color: "#aaa",
      url: ""
    }
  ],

  /*linear list  第一个*/
  linear_list_menu_one: [{
    title: '成为分销商',
    img_url: "icon-hotfill",
    url: "",
    color: "#FBB56B"
  }, {
    title: '收货地址',
    img_url: "icon-location",
    url: "",
    color: "#38D291"
  }, {
    title: '绑定手机号',
    img_url: "icon-mobile",
    url: "",
    color: "#38D291"
  }, {
    title: '邀请好友 赢取好礼',
    img_url: "icon-present",
    url: "",
    color: "#FBB56B"
  }],
  linear_list_menu_two:[{
    title:"关于我们",
    img_url:"icon-emojifill",
    url:"",
    color:"#38D29f"
  },{
    title:"暂不开放",
    img_url:"icon-lock",
    color:"#aaa",
    url:""
  }]
}