// pages/achievement/achievement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img1: 'https://t13.baidu.com/it/u=2570932707,489953297&fm=224&app=112&f=JPEG?w=500&h=500',
    img2: 'https://t15.baidu.com/it/u=835284957,2079566460&fm=224&app=112&f=JPEG?w=500&h=500',
    img3: 'https://tdesign.gtimg.com/mobile/demos/example3.png',
    visible: true,
    marquee1: {
      speed: 80,
      loop: -1,
      delay: 0,
    },
    marquee2: {
      speed: 60,
      loop: -1,
      delay: 0,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
        title: '个人成就中心'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})