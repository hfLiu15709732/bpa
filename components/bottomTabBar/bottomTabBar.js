
Component({
    /**
     * 组件的属性列表
     */

        properties: {
            dataPosition:{
                type:String,
                value:"1",
            }
        },


    /**
     * 组件的初始数据
     */
    data: {
        list: [
            { value: 'label_1', label: '文字', icon: 'home' },
            { value: 'label_2', label: '文字', icon: 'app' },
            { value: 'label_3', label: '文字', icon: 'chat' },
            { value: 'label_4', label: '文字', icon: 'user' },
          ],
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(e) {
            console.log(e.detail.value);
            if(e.detail.value==1){
                wx.reLaunch({
                  url: '/pages/market/market',
                })
            }
            else if(e.detail.value==2){
                wx.navigateTo({
                    url: '/pages/product/product',
                  })

            }
            else if(e.detail.value==3){
                wx.navigateTo({
                    url: '/pages/explore/explore',
                  })
            }
            else if(e.detail.value==4){
                wx.navigateTo({
                    url: '/pages/usercenter/usercenter',
                  })
            }
            
            
          },
    }
})
