//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    navTab: ["按钮1", "按钮2", "按钮3"],
    currentNavtab: "0"
  },
  onLoad: function () {

  },
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  }
})
