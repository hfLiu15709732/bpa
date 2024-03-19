// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    right: [
        {
          text: '编辑',
          className: 'btn edit-btn',
        },
        {
          text: '删除',
          className: 'btn delete-btn',
        },
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },
  onActionClick({ detail }) {
    wx.showToast({ title: `你点击了${detail.text}`, icon: 'none' });
  },

  onDelete() {
    wx.showToast({ title: '你点击了删除', icon: 'none' });
  },
  onEdit() {
    wx.showToast({ title: '你点击了编辑', icon: 'none' });
  },
  onFavor() {
    wx.showToast({ title: '你点击了收藏', icon: 'none' });
  },
  onChoice() {
    wx.showToast({ title: '你点击了选择', icon: 'none' });
  },
})