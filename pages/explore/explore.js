import Toast from 'tdesign-miniprogram/toast/index';
Page({
    data: { 
        confirmBtn: { content: '确定', variant: 'base' },
        dialogKey: '',
        showConfirm: false,
      longitude:120.040441, //地图界面中心的经度
      latitude: 30.228978, //地图界面中心的纬度
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
    },

    showDialog(e) {
        const { key } = e.currentTarget.dataset;
        this.setData({ [key]: true, dialogKey: key });
      },
  
      closeDialog() {
        const { dialogKey } = this.data;
        this.setData({ [dialogKey]: false });
      },

      openDeatil(){
          wx.navigateTo({
            url: '/pages/detail/detail',
          })
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

      showVerticalText() {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '已重新刷新任务点位',
          icon: 'check-circle',
          direction: 'column',
        });
      },


      markertap(){
          this.openNavigator();
      }
  })
  