const image = 'https://tdesign.gtimg.com/miniprogram/images/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);

Page({
  offsetTopList: [],

  data: {
    sideBarIndex: 1,
    sideBarText:"100%",
    dialogKey: '',
    confirmBtn: { content: '确定', variant: 'base' },
    confirmBtn2: { content: '了解', variant: 'base' },
    showConfirm: false,
    showNotice: false,
    showWarnConfirm: false,
    showTooLongBtnContent: false,
    showMultiBtn: false,
    scrollTop: 0,
    categories: [
      {
        label: '入学必备',
        title: '入学必备',
        badgeProps: {},

      },
      {
        label: '学习用品',
        title: '学习用品',
      },
      {
        label: '起居用品',
        title: '起居用品',
        badgeProps: {
            dot: true,
          },
      },
      {
        label: '洗漱用品',
        title: '洗漱用品',
        badgeProps: {
            dot: true,
          },
      },
      {
        label: '电子物品',
        title: '电子物品',

      },
      {
        label: '其他物品',
        title: '其他物品',
      },
    ],

    pngList:[
        "https://img1.baidu.com/it/u=3097790410,2516839090&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        "https://img1.baidu.com/it/u=1595767967,3416225394&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "https://img2.baidu.com/it/u=2122222094,2983051676&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "https://t14.baidu.com/it/u=1546001449,3957050454&fm=224&app=112&f=JPEG?w=500&h=500",
        "https://img1.baidu.com/it/u=1301101800,954017623&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        "https://img1.baidu.com/it/u=3097790410,2516839090&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
    ],

    dataList:[
        items.slice(0, 10),
        items.slice(0, 3),
        items.slice(0, 2),
        items.slice(0, 9),
        items.slice(0, 5),
        items.slice(0, 1),
    ],
    isLoading: true,

    
  },

  bindToDetail(option){
    let id=option.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    })
},



  onLoad(options) {

    let techArr=[];
    let frontBase=[];
    let frontPlus=[];
    let frontPrj=[];
    let widthFront=[];
    let liveArr=[];
    wx.setNavigationBarTitle({
        title: '物品兑换'
    })
    

    wx.request({
      url: 'https://mock.presstime.cn/mock/65ee8fe897a27576f93a34ef/mpa/',
      success:(value)=>{
          value.data.data.forEach((val,index)=>{
              console.log(val);
              if (val.title.length > 12) {
                val.title= val.title.substring(0, 10) + '...';
            } 
              if(val.type_id=="技术分享"){
                  techArr.push(val);
              }
              else if(val.type_id=="前端学习"&&(val.columnSpe=="HTML"||val.columnSpe=="CSS"||val.columnSpe=="JavaScript"))
              {
                frontBase.push(val);
                if(val.columnSpe=="JavaScript"){
                    frontPlus.push(val);
                }
              }
              else if(val.type_id=="前端学习"&&(val.columnSpe=="后台开发"||val.columnSpe=="Http网络"||val.columnSpe=="数据库"))
              {
                widthFront.push(val);
              }
              else if(val.type_id=="前端学习"&&(val.columnSpe=="框架学习"))
              {
                frontPrj.push(val);
              }
              else if(val.type_id=="前端学习"&&(val.columnSpe==""))
              {
                frontPlus.push(val);
              }
              else if(val.type_id=="生活分享")
              {
                liveArr.push(val);
              }
          })
          this.setData({
            dataList:[
                techArr,
                frontBase,
                frontPlus,
                frontPrj,
                widthFront,
                liveArr
            ],
            isLoading: false,
        })
        console.log(1111);
      },
      fail:(val)=>{
          console.log("出错啦啦啦！！！");
          console.log("error_Data",val);
      }
    })
},
  onSideBarChange(e) {
    const { value } = e.detail;

    this.setData({ 
        sideBarIndex: value,
        sideBarText: value*100+"%"});
  },
  showDialog(e) {
    const { key } = e.currentTarget.dataset;
    this.setData({ [key]: true, dialogKey: key });
  },

  closeDialog() {
    const { dialogKey } = this.data;
    this.setData({ [dialogKey]: false });
  },
  showNoticeDialog(e) {
    const { key } = e.currentTarget.dataset;
    this.setData({ showNotice: true, dialogKey: key,showConfirm:false });
  },

  closeDialogNotice() {
    this.setData({ showNotice: false });
  },
});

