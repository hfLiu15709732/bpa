Component({
    data: {
      placement: 'left',
      sidebar: [],
      baseSidebar: [
        {
          title: '热度递增',
        },
        {
          title: '热度递减',
        },
        {
          title: '剩余时间递增',
        },
        {
          title: '剩余时间递件',
        },
        {
          title: '排序1',
        },
        {
          title: '排序2',
        },
        {
          title: '筛选1',
        },
        {
          title: '筛选2',
        },
      ],
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      openDrawerBase() {
        this.setData({
          visible: true,
          sidebar: this.data.baseSidebar,
        });
      },
  
      itemClick(e) {
        console.log(e.detail);
      },
  
      overlayClick(e) {
        console.log(e.detail);
      },
    },
  });
  