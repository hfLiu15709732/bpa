import Toast from 'tdesign-miniprogram/toast/index';
var QQMapWX = require('../../libs/qqmap-wx-jssdk.min');
var qqmapsdk;
Page({
    data: { 
        confirmBtn: { content: '确定', variant: 'base' },
        dialogKey: '',
        showConfirm: false,
      longitude: 120.038183, //地图界面中心的经度
      latitude: 30.226777, //地图界面中心的纬度
      markers: [ //标志点的位置

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

      ],
      circles: [{
        latitude: '30.226777',
        longitude: '120.038177',
        color: '#ff4163',
        fillColor: '#7cb5ec88',
        radius: 700,
        strokeWidth: 2
      }],

    },
  
    onLoad: function () {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
        key: 'IMEBZ-IGKC4-TDFUV-KEJU3-XZHM5-RLFKA'
    });
      var that = this;
  
      wx.getLocation({
        type: "wgs84",
        success: function (res) {
          console.log("当前位置的经纬度为：", res.latitude, res.longitude);
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude,
  
          })
        }
      })
    },
    onReady: function () {
        // qqmapsdk.direction({
        //     mode: 'walking',//可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
        //     //from参数不填默认当前地址
        //     from: {
        //         latitude: 30.984060,
        //         longitude: 120.038177
        //       },
        //     to: {
        //         latitude: 30.226777,
        //         longitude: 120.038177
        //       }, 
        //     success: function (res) {
        //       console.log(res);
        //       var ret = res;
        //       var coors = ret.result.routes[0].polyline, pl = [];
        //       //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        //       var kr = 1000000;
        //       for (var i = 2; i < coors.length; i++) {
        //         coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
        //       }
        //       //将解压后的坐标放入点串数组pl中
        //       for (var i = 0; i < coors.length; i += 2) {
        //         pl.push({ latitude: coors[i], longitude: coors[i + 1] })
        //       }
        //       console.log(pl)
        //       //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
        //       _this.setData({
        //         latitude:pl[0].latitude,
        //         longitude:pl[0].longitude,
        //         polyline: [{
        //           points: pl,
        //           color: '#FF0000DD',
        //           width: 4
        //         }]
        //       })
        //     },
        //     fail: function (error) {
        //       console.error(error);
        //     },
        //     complete: function (res) {
        //       console.log(res);
        //     }
        //   });
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
              wx.openLocation({
                latitude:30.292570054702953 , 
                longitude: 120.16478398014833, 
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

      showSuccessCheck() {
        Toast({
            context: this,
            selector: '#t-toast',
            message: '打卡成功,即将返回主页',
            theme: 'success',
            direction: 'column',
          });

          setTimeout(function() {
            wx.navigateBack({
                delta:-1,
            })
         }, 2000);
      },


      markertap(){
          this.openNavigator();
      }
  })
  