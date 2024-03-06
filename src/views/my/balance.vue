<template>
    <div style="margin: 16px;">
      <van-form label-width="70" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
              v-model="formdata.amount"
              name="充值金额"
              label="充值金额"
              placeholder="充值金额"
              :rules="[{ required: true, message: '请填写充值金额' }]"
              required
          />
          <van-field
              v-model="formdata.exchange"
              name="充值汇率"
              label="充值汇率"
              placeholder="充值汇率"
              :rules="[{ required: true, message: '请填写充值汇率' }]"
              readonly
              required
          />
          <van-field
              v-model="formdata.merchantexchange"
              name="汇率浮动"
              label="汇率浮动"
              placeholder="汇率浮动"
              :rules="[{ required: true, message: '请填写汇率浮动' }]"
              readonly
              required
          />
          <van-field
              v-model="formdata.usdt"
              label="TRC20"
              placeholder="网络TRC20"
              rows="3"
              type="textarea"
              readonly
              required>
            <template #button>
              <van-tag plain type="primary" ref="copy" :data-clipboard-text="formdata.usdt" @click="copy" id="copy_text">复制</van-tag>
            </template>
          </van-field>
          <van-field name="uploader" label="支付凭证"  required>
            <template #input>
              <van-uploader :max-count="1" :after-read="afterRead" v-model="formdata.imgurl"/>
            </template>
          </van-field>
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
import axios from "axios";
import Clipboard from 'clipboard'
import {Notify} from 'vant';
import payconfigApi from "@/api/account/payconfig";
import merchantApi from "@/api/account/merchant";
import merchantaccountorderApi from "@/api/merchant/merchantaccountorder";
import {getTenantId, getToken} from "@/utils/auth";
import {useRouter} from "vue-router";

const router = useRouter();
let formdata = ref({})
let postdata = ref({});
let uploadUrl = import.meta.env.VITE_APP_BASE_FILE_API;
let show = ref(false);

onMounted(async () => {
  let result = await merchantApi.getdata();
  console.info(result)
  formdata.value.merchantexchange = result.body.downpoint;

  let res = await payconfigApi.get();
  console.info(res)
  formdata.value = res.body;
  formdata.value = {merchantexchange:result.body.downpoint,exchange:res.body.exchange,usdt:res.body.usdt};
});

function copy () {
  let clipboard = new Clipboard('#copy_text')
  clipboard.on('success', (e) => {
    Notify({type:'success',message: '复制成功' });
    clipboard.destroy()
  })
  clipboard.on('error', (e) => {
    Notify({ type:'danger',message: '复制失败' });
    clipboard.destroy()
  })
}

function afterRead (file){
    let formData = new FormData();
    let headers = {Satoken:getToken(),Tenant_Id:getTenantId()};
    formData.append("file", file.file);
    axios.post(uploadUrl, formData, {
          "content-type": "multipart/form-data",
          headers: headers,
        })
        .then((res) => {
          formdata.imgurl=res.data.body.url;
        })
        .catch((err) => {
          console.info(err)
        });

};

async function onSubmit(){

  if(formdata.imgurl == null){
    Notify({ type:'danger',message: '请上传凭证后提交' });
  }else{
    show.value = true;
    postdata = {imgurl:formdata.imgurl,remark:formdata.value.remark,usdt:formdata.value.usdt,merchantexchange:formdata.value.merchantexchange,exchange:formdata.value.exchange,amount:formdata.value.amount};
    let res = await merchantaccountorderApi.add(postdata);

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