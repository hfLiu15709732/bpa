// pages/detail/detail.js

const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
];


Page({

  /**
   * 页面的初始数据
   */
  data: {
    confirmBtn: { content: '确定', variant: 'base' },
    current: 3,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    navigation: { type: '', showControls: true },
    markers: [ //标志点的位置
        //位置0
        {
          id: 0,
          iconPath: "../../assets/mark.png",
          label: {
            content: "计算机楼",
            color: '#22ac38',
            fontSize: 13,
            fontWeight:700,
            bgColor: "#fff",
            borderRadius: 30,
            borderColor: "#22ac38",
            borderWidth: 1,
            padding: 3
          },

          latitude: 30.23311,
          longitude: 120.047748,
          width: 28,
          height: 32
        },
        //位置1
        {
          id: 1,
          iconPath: "../../assets/mark.png",
          label: {
            content: "屏峰体育场1",
            color: '#22ac38',
            fontSize: 13,
            fontWeight:700,
            bgColor: "#fff",
            borderRadius: 30,
            borderColor: "#22ac38",
            borderWidth: 1,
            padding: 3
          },
          latitude: 30.226777,
          longitude: 120.038177,
          width: 28,
          height: 32
        },
        //位置2
        {
          id: 2,
          iconPath: "../../assets/mark.png",
          label: {
            content: "屏峰图书馆",
            color: '#22ac38',
            fontSize: 13,
            fontWeight:700,
            bgColor: "#fff",
            borderRadius: 30,
            borderColor: "#22ac38",
            borderWidth: 1,
            padding: 3
          },
          latitude: 30.225025,
          longitude: 120.034731,
          width: 28,
          height: 32
        },
        //位置3
        {
          id: 3,
          iconPath: "../../assets/mark.png",
          label: {
            content: "麦当劳",
            color: '#22ac38',
            fontSize: 13,
            fontWeight:700,
            bgColor: "#fff",
            borderRadius: 30,
            borderColor: "#22ac38",
            borderWidth: 1,
            padding: 3
          },
          latitude: 30.228499,
          longitude: 120.048942,
          width: 28,
          height: 32
        },
        //位置4
        {
          id: 4,
          iconPath: "../../assets/mark.png",
          label: {
            content: "屏峰食堂1",
            color: '#22ac38',
            fontSize: 13,
            fontWeight:700,
            bgColor: "#fff",
            borderRadius: 30,
            borderColor: "#22ac38",
            borderWidth: 1,
            padding: 3
          },
          latitude: 30.229504,
          longitude: 120.044799,
          width: 28,
          height: 32
        },
      ]
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

  openNavigator(){
    const { dialogKey } = this.data;
    this.setData({ [dialogKey]: false });
    wx.getLocation({
        type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function (res) {
          // success
          console.log(res.latitude);
          console.log(res.longitude);
          console.info(res);
          wx.openLocation({
            latitude:30.292570054702953 , // 纬度，范围为-90~90，负数表示南纬
            longitude: 120.16478398014833, // 经度，范围为-180~180，负数表示西经
            scale: 28, // 缩放比例
            name:"浙江工业大学朝晖校区",
            address:"浙江省杭州市潮王路288号"
          })
        }
      })
  },
  showDialog(e) {
    const { key } = e.currentTarget.dataset;
    this.setData({ [key]: true, dialogKey: key });
  },

  closeDialog() {
    const { dialogKey } = this.data;
    this.setData({ [dialogKey]: false });
  },
})