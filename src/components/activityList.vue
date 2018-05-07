<template>
  <div class="act-list">
    <div class="act-item" v-for="item in activityList" :key="item.activitySeq">
      <div class="logo-box" :style="{backgroundImage:'url('+item.actLogo+')'}">
        <div class="act-title">
          <p class="title overflow-ellipsis">{{item.actTitle}}</p>
        </div>
      </div>
      <p class="act-desc">{{item.actDesc}}</p>
    </div>
    <div class="null-box" v-if="activityList.length == 0">
      亲，暂时没有活动哦~
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityList',
  data() {
    return {
      activityList: []
    }
  },
  mounted() {
    // 有活动
    this.activityList = [
      {"activitySeq":3,"actBeginDate":'2018/05/01',"couponName":"洗衣液兑换券","actTitle":"体验朝朝盈得洗衣液一份体验朝朝盈得洗衣液一份","actLogo":"act-logo3.png","actDesc":"活动期间，客户在招商银行APP成功体验达标即可免费领取洗衣液，体验1000元以上朝朝盈即可免费领取蓝月亮洗衣液一份。","actEndDate":'2018/05/05'},
      {"activitySeq":2,"actBeginDate":'2018/04/25',"couponName":"洗衣液兑换券","actTitle":"体验生活缴费送雨伞","actLogo":"act-logo2.png","actDesc":"活动期间，客户在招商银行APP成功体验达标即可免费领取洗衣液，体验1000元以上朝朝盈即可免费领取蓝月亮洗衣液一份。","actEndDate":'2018/04/25'},
      {"activitySeq":1,"actBeginDate":'2018/04/27',"couponName":"洗衣液兑换券","actTitle":"体验朝朝盈得洗衣液一份","actLogo":"act-logo1.png","actDesc":"活动期间，客户在招商银行APP成功体验达标即可免费领取洗衣液，体验1000元以上朝朝盈即可免费领取蓝月亮洗衣液一份。","actEndDate":'2018/05/01'}
    ];
    // 无活动
    // this.activityList = [];
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.act-list {
  .act-item {
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
    border-bottom: 0.01rem solid #F1E7E7;
    &:last-child {
      margin-bottom: 0.01rem;
    }
  }
  .null-box {
    text-align: center;
    margin-top: 1rem;
  }
}
.logo-box {
  height: 3.2rem;
  position: relative;
  border: 0.01rem solid #ddd;
  background-position: center;
  background-size: cover;
  .act-title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.8rem;
    line-height: 0.8rem;
    background: rgba(0, 0, 0, .4);
    color: #FFFFFF;
    font-size: 0.36rem;
    padding: 0 0.2rem;
    .title {
      width: 100%;
      font-weight: 600;
    }
  }
}
.act-desc {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0.15rem 0 0.2rem;
  color: #B6ADAD;
  font-size: 0.28rem;
  line-height: 1.5;
}
</style>