<template>
  <div class="profile-container">
    <div class="profile-header">
      <div class="profile-header-inner">
        <div class="profile-info">
          <van-image class="profile-info-avatar" round fit="cover" src="/favicon.ico"></van-image>
          <div class="profile-info-main">
            <span class="profile-info-main-nickname">{{getUserName()}}</span>
          </div>
        </div>
        <div class="profile-number">
          <div class="profile-number-box">
            <span class="profile-number-box-num">￥{{formdata.totalincome}}</span>
            <span class="profile-number-box-text">收入金额</span>
          </div>
          <div class="profile-number-box">
            <span class="profile-number-box-num">￥{{formdata.withdrawamount}}</span>
            <span class="profile-number-box-text">提款金额</span>
          </div>
          <div class="profile-number-box">
            <span class="profile-number-box-num">￥{{formdata.balance}}</span>
            <span class="profile-number-box-text">余额</span>
          </div>
        </div>
      </div>
      <van-grid clickable :column-num="4">
<!--        <van-grid-item icon="balance-pay" text="充值" @click="onbalance" />
        <van-grid-item icon="refund-o" text="充值记录" @click="onbalancerecord" />
        <van-grid-item icon="cash-o" text="提现" @click="onwithdraw" />-->
        <van-grid-item icon="after-sale" text="代收明细" @click="onincome" />
        <van-grid-item icon="notes-o" text="渠道列表" @click="onechannel" />
        <van-grid-item icon="service-o" text="商户列表" @click="onmerchant" />
        <van-grid-item icon="comment-o" text="系统收入" @click="onapplyjournal" />
        <van-grid-item icon="refund-o" text="代收统计" @click="onbalancerecord" />
        <van-grid-item icon="close" text="退出" @click="onLogout" />
      </van-grid>
      <!--
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 5px' }">欧易一档买入价</van-divider>
            <van-cell>￥ {{exchangedata.exchange}}
              <template #title>
                <span class="custom-title">$ 1</span>
                <van-icon name="exchange" size="20px"/>
              </template>
            </van-cell>

            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 5px' }">USDT换汇(保永久)</van-divider>
            <van-cell :value="(exchangedata.exchange - 0.1).toFixed(2)">
              <template #title>
                <span class="custom-title">1.00</span>
                <van-icon name="exchange" size="20px"/>
              </template>
            </van-cell>
            <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 5px' }">美金换汇(保永久)</van-divider>
            <van-cell :value="(exchangedata.exchange - 0.15).toFixed(2)">
              <template #title>
                <span class="custom-title">1.00</span>
                <van-icon name="exchange" size="20px"/>
              </template>
            </van-cell>
            -->
    </div>
  </div>
</template>

<script setup name="Profile">

import {onMounted, reactive,ref} from 'vue';
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { getUserName} from '@/utils/auth'
import systemaccountApi from "@/api/account/systemaccount";


const userStore = useUserStore();
const router = useRouter();
let formdata = ref({});


onMounted(async () => {
  let result = await systemaccountApi.get();
  formdata.value = result.body;
});

function onbalance() {
  router.push({ path: '/my/balance' })
}
function onbalancerecord() {
  router.push({ path: '/my/systemstatisticalreports' })
}
function onwithdraw() {
  router.push({ path: '/my/withdraw' })
}
function onincome() {
  router.push({ path: '/my/income' })
}

function onechannel() {
  router.push({ path: '/my/channel' })
}

function onmerchant() {
  router.push({ path: '/my/merchant' })
}

function onapplyjournal() {
  router.push({ path: '/my/applyjournal' })
}

function onLogout() {
  userStore.LogOut();
  router.push({ path: "/#/login" });
}

</script>

<style lang="scss" scoped>

.custom-title {
  margin-right: 129px;
}

.profile-container {

  .profile-header {
    overflow: hidden;

    &-inner {
      position: relative;
      width: 100%;
      height: 240px;
      z-index: 0;

      &:after {
        width: 140%;
        height: 240px;
        position: absolute;
        left: -20%;
        top: 0;
        z-index: -1;
        content: '';
        border-radius: 0 0 50% 50%;
        background-color: #2f343e;
      }

      .profile-info {

        height: 64px;
        color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 20px 0px 20px;



        &-avatar {
          border: 3px solid #aeb0b3;
          width: 64px;
          height: 64px;
        }

        &-main {

          height: 100%;
          padding: 0px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          &-nickname {
            font-size: 20px;
            font-weight: 500;
          }

          &-phone {
            font-size: 14px;
            font-weight: 300;
          }
        }
      }

      .profile-number {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 50px;
        padding: 40px 5px 0px 5px;
        color: #fff;

        &-box {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: calc(100vh / 3);

          &-num {
            font-size: 16px;
            font-weight: 400;
          }

          &-text {
            font-size: 12px;
          }
        }
      }
    }

    .profile-action-card {
      margin: -65px 20px 20px 20px;
    }
  }

}
</style>


