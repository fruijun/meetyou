// pages/login/index.js
var app=getApp();
Page({
  data:{
    username:null,
    password:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  usernameinput:function(e){
    this.setData({username:e.detail.value});
  },
  passwordinput:function(e){
   this.setData({password:e.detail.value});
  },
  loginBtnClick:function(){
    //验证过程
    app.appData.userInfo={username:this.data.username,    password:this.data.password};
  }
})