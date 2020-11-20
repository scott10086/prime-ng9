
export const MENU_LIST1 = [
  {
    label: 'File',
    items: [
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Open', icon: 'pi pi-download' }
    ]
  },
  {
    label: 'Edit',
    items: [
      { label: 'Undo', icon: 'pi pi-refresh' },
      { label: 'Redo', icon: 'pi pi-repeat' }
    ]
  }
];

export const MENU_LIST = [
  {
    label: '欢迎页',
    routerLink: '/pages/basic/welcome',
    items: [
      {
        label: '管道页',
        items: [
          {
            label: '管道页',
            routerLink: '/pages/basic/source/pipe',
          },
          { label: 'Video 1.2' }
        ]
      },
    ]
  },
  {
    label: '布局页',
    routerLink: '/pages/basic/layout',
    items: [
      {
        label: 'Video 1',
        items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
      },
    ]
  },
  {
    label: '元素页',
    routerLink: '/pages/basic/source/element',
    items: [
      {
        label: 'Video 1',
        items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
      },
    ]
  },
  // {
  //   label: '管道页',
  //   routerLink: '/pages/basic/source/pipe',
  //   items: [
  //     [
  //       {
  //         label: 'Video 1',
  //         items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
  //       },
  //     ],
  //   ]
  // },
];
