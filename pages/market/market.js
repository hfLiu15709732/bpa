
import Message from 'tdesign-miniprogram/message/index';
const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper0.gif`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper1.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper2.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper3.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper4.jfif`,
];




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
        mockList:[1,2,3,4,5,6,7,8,9,10,11,12,13],
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