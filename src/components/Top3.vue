<template>

  <v-card height="94%" class="widget">
    <div class="card-title">
      <h1>Classement</h1>
    </div>
    <div class="chip">
      <span class="chip-avatar"><img src="../assets/gold-medal.svg" /></span>
      <span class="chip-name">{{fmacAddress}}</span>
      <span class="chip-score">{{fvisitTimes}}</span>
    </div>
    <div class="chip">
      <span class="chip-avatar"><img src="../assets/silver-medal.svg" /></span>
      <span class="chip-name">{{smacAddress}}</span>
      <span class="chip-score">{{svisitTimes}}</span>
    </div>
    <div class="chip">
      <span class="chip-avatar"><img src="../assets/bronze-medal.svg" /></span>
      <span class="chip-name">{{tmacAddress}}</span>
      <span class="chip-score">{{tvisitTimes}}</span>
    </div>
  </v-card>

</template>

<script>
import CardReader from '../services/api/CardReaders';
import axios from 'axios';
export default {
  name: 'Top3',
  data() {
    return {
      fmacAddress: '',
      fvisitTimes: '',
      smacAddress: '',
      svisitTimes: '',
      tmacAddress: '',
      tvisitTimes: ''
    };
  },
  mounted() {
    // axios.get('/plugins/7').then(response => console.log(response));
    this.getInfo();
    // CardReader.getCardReaders().then(this.handleGetInfo);
    // handleGetInfo(res)(console.log(res));
  },
  methods: {
    getInfo() {
      CardReader.getCardReaders().then(this.handleGetInfo);
    },
    handleGetInfo(data) {
      if (!Array.isArray(data)) {
        console.error('请输入数组！');
        return;
      }
      // 浏览人关键信息筛选列表（id，次数等等）
      var visitorList = [];
      // 近N天浏览最多人的信息
      var mostVisitor = {
        id: '',
        times: 0,
        macAd: ''
      };
      var firstVisitor = {
        id: '',
        times: 0,
        macAd: ''
      };
      var secondVisitor = {
        id: '',
        times: 0,
        macAd: ''
      };

      var thirdVisitor = {
        id: '',
        times: 0,
        macAd: ''
      };

      data.forEach((item, i) => {
        // 初始化每个浏览人的信息

        visitorList[i] = {
          times: 0, // 记录最近N天的登录次数
          id: item._id, // 记录登录者的id
          macAd: item.mac
        };
        item.tagsHistory.forEach(times => {
          // 如果是近3天登录的话就次数 + 1
          if (compareTime(times.timeStamp, 3)) visitorList[i].times++;
        });
        // 更新最大浏览人的信息
        if (mostVisitor.times < visitorList[i].times)
          mostVisitor = visitorList[i];
      });
      // 返回mostVisitor和visitorList

      console.log(visitorList);
      var length = visitorList.length;

      for (var k = 0; k < 12; k++) {
        for (var j = 0; j < 12 - k - 1; j++) {
          if (visitorList[j].times < visitorList[j + 1].times) {
            var temp = visitorList[j];
            visitorList[j] = visitorList[j + 1];
            visitorList[j + 1] = temp;
          }
        }
      }
      secondVisitor = visitorList[1];
      thirdVisitor = visitorList[2];
      firstVisitor = visitorList[0];
      this.fmacAddress = firstVisitor.macAd;
      this.fvisitTimes = firstVisitor.times;
      this.smacAddress = secondVisitor.macAd;
      this.svisitTimes = secondVisitor.times;
      this.tmacAddress = thirdVisitor.macAd;
      this.tvisitTimes = thirdVisitor.times;

      return { mostVisitor, visitorList };

      function compareTime(time, day = 3) {
        // "timeStamp": "2018-10-31T10:02:47Z"是标准的UTC时间格式所以直接new Date(timeStamp)就能构造标准时间
        var time = new Date(time).getTime();
        var now = new Date().getTime();
        var dayToMs = day * 24 * 3600 * 1000;
        if (now - time <= dayToMs) return true;
        else return false;
      }
    }
  }
};
</script>

<style scoped>
.card-title {
  padding: 2px 16px;
  margin: 2%;
}

.chip {
  display: inline-block;
  padding: 0 25px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #f1f1f1;
  margin: 2%;
  width: 75%;
  font-weight: bold;
  text-overflow: ellipsis;
  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
}

.chip-avatar {
  float: left;
  margin: 0 10px 0 -25px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.chip-score {
  float: right;
  margin: 0;
  height: 25px;
  width: 25px;
}
</style>
