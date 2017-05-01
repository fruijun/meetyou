var app = getApp()
Page({
  data:{
    mode:'aspectFit'
  },
  onLoad:function(options){
    console.log('---articalOne page is onLoad---');
  },
  onShow:function(){
    console.log('---articalOne page is onShow---');
  },
  onReady:function(){
    console.log('---articalOne page is  onReady---');
  },
  onHide:function(){
    console.log('---articalOne page is onHide---');
  },
  onUnload:function(){
    console.log('---articalOne page is onUnload---');

  }
})