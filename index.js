const data = require('./mock/data.json')
const data2 = require('./mock/data2.json')
const shopcar = require('./mock/shopcar.json')
module.exports = () => ({
  getGoodsList: data.getGoodsList,
  getSimpleUser: data2.getSimpleUser,
  getGoodInfo: data2.getGoodInfo,
  
  getRecommendGoods:shopcar.getRecommendGoods
});