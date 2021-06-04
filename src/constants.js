export const MENU = [{
  icon: '/img/grass.png',
  pathname: '/grass',
  name: '草地生态',
  enName: 'grass',
},{
  icon: '/img/desert.png',
  pathname: '/desert',
  name: '荒漠生态',
  enName: 'desert',
},{
  icon: '/img/sand.png',
  pathname: '/sand',
  name: '沙地植被',
  enName: 'sand',
},{
  icon: '/img/wich.png',
  pathname: '/wich',
  name: '湿地生态',
  enName: 'wich',
}]

export const TITLE = [{
  name: '物候气象条件',
  child: [{
    name: '生长季长度空间分布',
  },{
    name: '返青期时空分布',
  },{
    name: '黄枯期时空分布',
  }]
},{
  name: '产量时空分布',
  child: [{
    name: '牧草产量空间分布',
  },{
    name: '牧草产量时间变化',
  }]
},{
  name: '植被覆盖度时空分布',
  child: [{
    name: '植被覆盖度空间分布',
  },{
    name: '植被覆盖度时间分布',
  }]
},{
  name: '生态退化趋势',
  child: [{
    name: '近10年牧草产量变化',
  },{
    name: '近10年植被覆盖变化',
  }]
},{
  name: '牧区牧事活动',
  child: []
},{
  name: '牧区气象条件评估',
  child: [{
    name: '春季气象天气',
  },{
    name: '夏季气象天气',
  },{
    name: '秋季气象天气',
  },{
    name: '冬季气象天气',
  }]
},{
  name: '地上生物量',
  child: []
}]
