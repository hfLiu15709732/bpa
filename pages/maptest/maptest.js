Page({
    data: {
      longitude: 113.14278, //地图界面中心的经度
      latitude: 23.02882, //地图界面中心的纬度
      markers: [ //标志点的位置
        //位置0
        {
          id: 0,
          iconPath: "../images/1.png",
          latitude: 30.23311,
          longitude: 120.047748,
          width: 28,
          height: 32
        },
        //位置1
        {
          id: 1,
          iconPath: "../images/1.png",
          latitude: 30.226777,
          longitude: 120.038177,
          width: 28,
          height: 32
        },
        //位置2
        {
          id: 2,
          iconPath: "../images/1.png",
          latitude: 30.225025,
          longitude: 120.034731,
          width: 28,
          height: 32
        },
        //位置3
        {
          id: 3,
          iconPath: "../images/1.png",
          latitude: 30.228499,
          longitude: 120.048942,
          width: 28,
          height: 32
        },
        //位置4
        {
          id: 4,
          iconPath: "../images/1.png",
          latitude: 30.229504,
          longitude: 120.044799,
          width: 28,
          height: 32
        },
      ]
    },
  
    onLoad: function () {
      var that = this;
  
      wx.getLocation({
        type: "wgs84",
        success: function (res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          console.log("当前位置的经纬度为：", res.latitude, res.longitude);
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude,
  
          })
        }
      })
    },
    onReady: function () {
  
    },
  
    /**
     * 地图放大缩小事件触发
     * @param {*} e 
     */
    bindregionchange(e) {
      console.log('=bindregiοnchange=', e)
    },
  
    /**
     * 点击地图事件，有经纬度信息返回
     * @param {*} e 
     */
    bindtapMap(e) {
      console.log('=bindtapMap=', e)
    }
  })
  