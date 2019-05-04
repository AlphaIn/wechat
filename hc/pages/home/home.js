// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[
    {
      id:1,
      imgUrl:'../images/1.jpg'
    }, 
    {
        id: 2,
        imgUrl: '../images/2.jpg'
    }, 
    {
        id: 3,
        imgUrl: '../images/3.jpg'
    }
    ],
    icons: [
      {
        name:"景点",
        imgUrl:"../images/icon/spot.png"
      },
      {
        name: "酒店",
        imgUrl: "../images/icon/hotel.png"
      },
      {
        name: "餐饮",
        imgUrl: "../images/icon/drink.png"
      },
      {
        name: "交通",
        imgUrl: "../images/icon/traffic.png"
      },
      {
        name: "购物",
        imgUrl: "../images/icon/shopping.png"
      },
      {
        name: "游记",
        imgUrl: "../images/icon/play.png"
      }
    ],
    article: [
      {
        title:"五一假期",
        imgUrl:"../images/article/wuyi.png",
        link:"../article01/article01",
        content:"五一劳动节"
      },
      {
        title: "国博参观",
        imgUrl: "../images/article/libr.png",
        link: "../article02/article02",
        content: "国家博物馆"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})