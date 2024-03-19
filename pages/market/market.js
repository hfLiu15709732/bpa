
import Message from 'tdesign-miniprogram/message/index';
const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper0.gif`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper1.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper2.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper3.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper4.jfif`,
];

const mockList=[
    {title:"办理体检手续与进行体检",tags:["开学手续","核心任务","全员参与"],props:5,
    startDate:"2024.03.16",endDate:"2024.03.19", id:1,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"新生入学报到",tags:["新生","报到"],props:3,
    startDate:"2024.03.20",endDate:"2024.03.21",id:2,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"新生导览活动",tags:["新生","导览"],props:4,
    startDate:"2024.03.22",endDate:"2024.03.23",id:3,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"开学典礼",tags:["开学","全员参与"],props:5,
    startDate:"2024.03.24",endDate:"2024.03.24",id:5,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"新生家长会",tags:["新生","家长"],props:2,
    startDate:"2024.03.25",endDate:"2024.03.25",id:6,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"社团招新活动",tags:["社团","新生"],props:4,
    startDate:"2024.03.26",endDate:"2024.03.28",id:7,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"校园文化节",tags:["文化节","全员参与"],props:5,
    startDate:"2024.03.29",endDate:"2024.03.31",id:8,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"新生辅导课程",tags:["新生","辅导"],props:3,
    startDate:"2024.04.01",endDate:"2024.04.03",id:9,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"学生会选举",tags:["学生会","选举"],props:4,
    startDate:"2024.04.04",endDate:"2024.04.05",id:10,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"},
    {title:"开学考试",tags:["考试","全员参与"],props:5,
    startDate:"2024.04.06",endDate:"2024.04.08",id:11,
    avatar:"https://img2.baidu.com/it/u=3067116972,2287217023&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=378"}
]





Page({

    /**
     * 页面的初始数据
     */

    data: {
        allListData:[],
        copyListData:[],
        sortList:["时间降序","时间升序","热度降序","热度升序"],
        statusList:["primary","success","danger","warning","success"],
        fixClass:"noFixed",
        mockList:mockList,
        current: 0,
        autoplay: false,
        duration: 400,
        interval: 4500,
        swiperList,
        //轮播图控件信息


        isLoading: true,
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
      wx.hideHomeButton({
          complete(){
              console.log("主按钮消除");
          }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  let token = wx.getStorageSync('xinmiaoToken');
  if(!token){
    Message.warning({
        context: this,
        offset: [20, 32],
        duration: 5000,
        content: '新苗同学APP需要学校认证通过后使用！',
      });
      console.log("没权限");
      wx.navigateTo({
        url: '/pages/starter/starter',
      })
  }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
  openDeatil(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})