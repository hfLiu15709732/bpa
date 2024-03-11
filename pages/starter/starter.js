import list from './data/index';
import Message from 'tdesign-miniprogram/message/index';
Page({
    data: {
        list,
        originFiles: [
            {
              url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
              name: 'uploaded1.png',
              type: 'image',
            },
            {
              url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
              name: 'uploaded2.png',
              type: 'image',
            },
            {
              url: 'https://tdesign.gtimg.com/mobile/demos/example5.png',
              name: 'uploaded3.png',
              type: 'image',
            },
          ],
        visible:false,
    },
    onLoad(options) {
        const { path, q } = options;
        console.log(path);
        if (q) {
            const str = this.getQueryByUrl(decodeURIComponent(q));
            console.log(str, str.page);
            wx.navigateTo({
                url: `/pages/${str.page}/${str.page}`,
            });
        }
    },
    clickHandle(e) {
        console.log(222);
        this.showDialog()
        // let { name, path = '' } = e.detail.item;
        // if (!path) {
        //     name = name.replace(/^[A-Z]/, (match) => `${match}`.toLocaleLowerCase());
        //     name = name.replace(/[A-Z]/g, (match) => {
        //         return `-${match.toLowerCase()}`;
        //     });
        //     path = `/pages/${name}/${name}`;
        // }
        // wx.navigateTo({
        //     url: path,
        //     fail: () => {
        //         wx.navigateTo({
        //             url: '/pages/home/navigateFail/navigateFail',
        //         });
        //     },
        // });
    },
    onShareAppMessage() {
        return {
            title: 'TDesign UI',
            path: '/pages/home/home',
        };
    },
    getQueryByUrl(url) {
        const data = {};
        const queryArr = `${url}`.match(/([^=&#?]+)=[^&#]+/g) || [];
        if (queryArr.length) {
            queryArr.forEach((para) => {
                const d = para.split('=');
                const val = decodeURIComponent(d[1]);
                if (data[d[0]] !== undefined) {
                    data[d[0]] += `,${val}`;
                }
                else {
                    data[d[0]] = val;
                }
            });
        }
        return data;
    },

    showDialog(e) {
        const { key } = e.currentTarget.dataset;
        this.setData({ [key]: true, dialogKey: key });
      },
  
      closeDialog() {
        const { dialogKey } = this.data;
        this.setData({ [dialogKey]: false });
      },


      handlePopup(e) {
          this.closeDialog();
        const { item } = e.currentTarget.dataset;
  
        this.setData(
          {
            cur: item,
          },
          () => {
            this.setData({ visible: true });
          },
        );
      },
      onVisibleChange(e) {
        this.setData({
          visible: e.detail.visible,
        });
      },

      handleSuccess(e) {
        const { files } = e.detail;
        console.log(333);
        this.setData({
          originFiles: files,
        });
      },
      handleRemove(e) {
        console.log(222);
        const { index } = e.detail;
        const { originFiles } = this.data;
        originFiles.splice(index, 1);
        this.setData({
          originFiles,
        });
      },
      handleClick(e) {
        console.log(e.detail.file);
        console.log(333);
      },
      turnMain(e) {
          // 设置本地存储数据
        wx.setStorageSync('xinmiaoToken', "aehbskfbnawerkfjenrk");

            Message.success({
              context: this,
              offset: [20, 32],
              duration: 3000,
              content: '新苗同学平台--认证成功',
            });

          wx.reLaunch({
            url: '/pages/market/market',
          })
      },

      turnCanel(e) {
        this.setData({ visible: false });
    },
});
