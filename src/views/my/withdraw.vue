<template>
    <div style="margin: 16px;">
      <van-form label-width="70" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
              v-model="formdata.accnumber"
              label="TRC20"
              placeholder="网络TRC20"
              rows="2"
              type="textarea"
              required>
          </van-field>
          <van-field
              v-model="formdata.amount"
              name="提现金额"
              label="提现金额"
              placeholder="提现金额"
              :rules="[{ required: true, message: '请填写提现金额' }]"
              required
          />
          <van-field
              v-model="formdata.totalincome"
              name="可用余额"
              label="可用余额"
              placeholder="可用余额"
              :rules="[{ required: true, message: '可用余额' }]"
              readonly
              required
          />
          <van-field
              v-model="formdata.merchantexchange"
              name="提现汇率"
              label="提现汇率"
              placeholder="提现汇率"
              :rules="[{ required: true, message: '提现汇率' }]"
              required
          />
          <van-field
              v-model="formdata.remark"
              name="备注"
              label="备注"
              placeholder="备注"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  <van-overlay :show="show">
    <van-loading size="24px" vertical>加载中...</van-loading>
  </van-overlay>
</template>

<script setup name="Msg">

import {onMounted, ref} from 'vue';
import {Notify} from 'vant';
import merchantApi from "@/api/account/merchant";
import merchantaccountorderApi from "@/api/merchant/merchantaccountorder";
import {useRouter} from "vue-router";

const router = useRouter();
let formdata = ref({})
let show = ref(false);

onMounted(async () => {
  let result = await merchantApi.getdata();
  console.info(result)
  formdata.value.totalincome = result.body.balance;
});


async function onSubmit(){
  let totalincome = parseInt(formdata.value.totalincome);
  let amount = parseInt(formdata.value.amount);
  if(totalincome < amount){
    Notify({ type:'danger',message: '输入金额要小于可用余额' });
  }else{
    show.value = true;
    let res = await merchantaccountorderApi.withdraw(formdata.value);
    if(res.code == 200){
      Notify({type:'success',message: '提交成功' });
      setTimeout(() => {
        show.value = false;
        router.push({ path: '/my' })
      }, 1000);
    }else{
      show.value = false;
    }
  }
}




</script>

<style>

</style>