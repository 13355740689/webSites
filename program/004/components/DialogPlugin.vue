<template>
  <div class="modal-box" v-if="show" @touchmove.prevent>
    <div class="modal-bg"></div>
    <div class="modal-box">
      <div class="modal-main">
        <div class="modal-header" v-if="type">
          <div class="modal-header-inner">{{ title }}</div>
        </div>
        <div class="modal-body">
          <img src="./images/error.png" />
          <div>
            发卡会员卡只针对<span>黄金商家</span>及<span>网店</span>开放
            请前往开通
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="modal-btn modal-btn-text"
            @click="cancelModal"
            v-if="btnShow"
          >
            <span>{{ btn[0] }}</span>
          </button>
          <button
            type="button"
            class="modal-btn modal-btn-primary"
            @click="sureModal"
          >
            <span>{{ btn[1] || btn[0] }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-plugin",
  data() {
    return {
      show: true,
      cancel: null,
      sure: null,
      type: 1,
      btn: ["取消", "确定"],
      btnShow: true,
      title: "系统提示",
      content: "<p>这是一个modal对话框</p>",
    };
  },
  methods: {
    cancelModal() {
      this.show = false;
      this.cancel && this.cancel();
    },
    sureModal() {
      this.show = false;
      // console.log("1111111233213")
      this.sure && this.sure();
    },
  },
};
</script>

<style scoped lang="less">
body {
  height: 100%;
}
.modal-bg {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  z-index: 1000;
}
.modal-box {
  width: 100%;
  text-align: center;
  position: fixed;
  top: 33%;

  z-index: 1001;
  outline: 0;
}
.modal-main {
  width: 300px;
  background-color: #fff;
  border: 0;
  border-radius: 6px;
  margin: 0 auto;
  padding: 19.5px 16px 20px;
}

.modal-header-inner {
  width: fit-content;
  height: 16px;
  font-size: 16px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #333333;
  line-height: 15px;
}
.modal-body {
  padding: 25px 20px 20px;

  scrollbar-base-color: #ff6600;
  -webkit-overflow-scrolling: touch;
  word-break: break-all;
  > img {
    width: 62.5px;
    height: 79.5px;
  }
  >div{
    margin-top:25px;
  }
  span {
    color: rgba(216, 156, 95, 1);
    font-size: 14px;
  }
}
.modal-footer {
  display: flex;
  justify-content: space-around;
}
.modal-btn {
  outline: 0;
  display: inline-block;
  margin-bottom: 0;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;

  white-space: nowrap;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;

  border: none;
  border-radius: 3px;
}
.modal-btn-text {
  width: 120px;
  height: 50px;
  background: #eeeeee;
}
.modal-btn-primary {
  color: rgba(64, 45, 26, 1);
  font-size: 16px;
  font-family: Source Han Sans CN;
  width: 166px;
  height: 50px;
  background: linear-gradient(90deg, #fcdab2, #d89c5e);
}
</style>