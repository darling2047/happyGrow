Page({
  data: {
    title:'照片列表'
  },
  onLoad: function (options){
    
    this.setData({ array: options }) 
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  }
})