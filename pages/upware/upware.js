// pages/upware/upware.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
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
      gridConfig: {
        column: 4,
        width: 160,
        height: 160,
      },
      config: {
        count: 1,
      },
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

      showDialog(e) {
        const { key } = e.currentTarget.dataset;
        this.setData({ [key]: true, dialogKey: key });
      },
  
      closeDialog() {
        const { dialogKey } = this.data;
        this.setData({ [dialogKey]: false });
      },

      handlePopup(e) {
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
    }
  )