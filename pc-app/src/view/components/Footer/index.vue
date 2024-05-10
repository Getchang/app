<template>
  <!-- footer -->
  <footer id="footer" class="flex">
    <div class="info flex">
      <div class="logo">灵启云</div>
      <div class="info-msg">
        <p>
          <span>公司名称：</span>
          杭州微额科技有限公司
        </p>
        <p>
          <span>联系电话：</span>
          122221222121
        </p>
      </div>
      <div class="info-msg">
        <p>
          <span>电子邮件：</span>
          demo@gmail.com
        </p>
        <p>
          <span>联系地址：</span>
          浙江省杭州市滨江区长河街道越达巷92号创业智慧大厦
        </p>
      </div>
      <div class="qrcode">
        <img src="../../../assets/images/footer_img_erweima.bdbfa02.png" alt="">
        <p>关注了解更多</p>
      </div>
    </div>
    <div class="police-msg flex">
      <div id="recordNo">ICP备案：鲁ICP备20032146号</div>
      <div>版权所有：杭州微额科技有限公司</div>
      <div class="police flex">
        <img src="../../../assets/images/police.jpg">
        <p>浙公网安备：37010102000863</p>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#footer {
  height: 23rem;
  width: 100%;
  background: url(../../../assets/images/foot_bg.jpg) no-repeat;
  background-size: 100% 100%;
  flex-wrap: wrap;
  color: #FFFFFF;

  .info {
    height: 19rem;
    width: 100%;
    padding-top: 50px;
    border-bottom: 1px solid #666;

    >div {
      padding: 0 50px;
      min-width: 250px;

      &:not(:last-child) {
        border-right: 1px solid var(--theme-orange);

      }
    }

    .logo {
      width: 150px;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      background: url('../../../assets/images/logo.png') no-repeat left;
      background-size: 55.2px 39.5px;
      padding-left: 60px;
    }

    .qrcode {
      text-align: center;

      img {
        display: block;
        width: 60px;
        height: 60px;
        margin: 10px auto;
      }

    }

    .info-msg {
      font-size: 1rem;

      p {
        margin: 10px 0;
      }
    }
  }

  .police-msg {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 1rem;

    >div {
      margin: 0 2rem;
    }

    .recordNo {
      cursor: pointer;
    }

    .police {
      img {
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
}
</style>