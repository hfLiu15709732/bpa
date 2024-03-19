
// import Toast from 'tdesign-miniprogram/miniprogram_dist/toast/index';

const menuData = [
  [
    {
      title: '任务排行榜',
      tit: '',
      url: '/pages/ranking/ranking',
      type: 'rank',
    },
    {
      title: '申诉记录',
      tit: '',
      url: '/pages/report/report',
      type: 'report',
    },
    {
      title: '积分兑换',
      tit: '',
      url: '/pages/mall/mall',
      type: 'integral',
    },
  ],
  [
    {
      title: '成就中心',
      tit: '',
      url: '',
      type: 'achievement',
    },
    {
      title: '客服热线',
      tit: '',
      url: '',
      type: 'service',
      icon: 'service',
    },
  ],
];

const orderTagInfos = [
  {
    title: '待付款',
    iconName: 'wallet',
    orderNum: 0,
    tabType: 5,
    status: 1,
  },
  {
    title: '待发货',
    iconName: 'deliver',
    orderNum: 0,
    tabType: 10,
    status: 1,
  },
  {
    title: '待收货',
    iconName: 'package',
    orderNum: 0,
    tabType: 40,
    status: 1,
  },
  {
    title: '待评价',
    iconName: 'comment',
    orderNum: 0,
    tabType: 60,
    status: 1,
  },
  {
    title: '退款/售后',
    iconName: 'exchang',
    orderNum: 0,
    tabType: 0,
    status: 1,
  },
];


Page({
  data: {
    showMakePhone: false,
    logoList: [
        {
          icon: 'https://tdesign.gtimg.com/mobile/demos/logo2.png',
          title: '新苗同学APP',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/logo1.png',
        },
      ],
    userInfo: {
      avatarUrl: '',
      nickName: '正在登录...',
      phoneNumber: '1451',
    },
    img1: 'https://tdesign.gtimg.com/mobile/demos/example1.png',
    img2: 'https://tdesign.gtimg.com/mobile/demos/example2.png',
    img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    menuData,
    customerServiceInfo: {},
    currAuthStep: 1,
    showKefu: true,
    versionNo: '',
    orderTagInfos:orderTagInfos,
      title: {
        type: String,
        value: '我的订单',
      },
      desc: {
        type: String,
        value: '全部订单',
      },
  },

  onLoad() {
    this.getVersionInfo();
  },

  onShow() {
  },
  onPullDownRefresh() {
  },




  onClickCell({ currentTarget }) {
      console.log(2);
    const { type } = currentTarget.dataset;
    console.log(type);

    switch (type) {
      case 'rank': {
        wx.navigateTo({ url: '/pages/ranking/ranking' });
        break;
      }
      case 'integral': {
        wx.navigateTo({ url: '/pages/mall/mall' });
        break;
      }
      case 'report': {
        wx.navigateTo({ url: '/pages/report/report' });
        break;
      }
      case 'achievement': {
        wx.navigateTo({ url: '/pages/achievement/achievement' });
        break;
      }
      case 'service': {
        this.openMakePhone();
        break;
      }
      case 'help-center': {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '你点击了帮助中心',
          icon: '',
          duration: 1000,
        });
        break;
      }
      case 'point': {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '你点击了积分菜单',
          icon: '',
          duration: 1000,
        });
        break;
      }
      case 'coupon': {
        wx.navigateTo({ url: '/pages/coupon/coupon-list/index' });
        break;
      }
      default: {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '未知跳转',
          icon: '',
          duration: 1000,
        });
        break;
      }
    }
  },

  jumpNav(e) {
    const status = e.detail.tabType;

    if (status === 0) {
      wx.navigateTo({ url: '/pages/order/after-service-list/index' });
    } else {
      wx.navigateTo({ url: `/pages/order/order-list/index?status=${status}` });
    }
  },

  jumpAllOrder() {
    wx.navigateTo({ url: '/pages/order/order-list/index' });
  },

  openMakePhone() {
    this.setData({ showMakePhone: true });
  },

  closeMakePhone() {
    this.setData({ showMakePhone: false });
  },

  call() {
    wx.makePhoneCall({
      phoneNumber: this.data.customerServiceInfo.servicePhone,
    });
  },

  gotoUserEditPage() {
    const { currAuthStep } = this.data;
    if (currAuthStep === 2) {
      wx.navigateTo({ url: '/pages/usercenter/person-info/index' });
    } else {
      this.fetUseriInfoHandle();
    }
  },

  getVersionInfo() {
    const versionInfo = wx.getAccountInfoSync();
    const { version, envVersion = __wxConfig } = versionInfo.miniProgram;
    this.setData({
      versionNo: envVersion === 'release' ? version : envVersion,
    });
  },
});
