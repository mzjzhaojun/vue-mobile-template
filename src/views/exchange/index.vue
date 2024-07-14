<template>
  <div style="margin: 16px;">
    <van-form label-width="70" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="formdata.aisleid"
            required
            is-link
            readonly
            name="picker"
            label="换汇通道"
            placeholder="点击选择换汇通道"
            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-picker
              :columns="columns"
              :columns-field-names="{text:'name',value:'aisleid'}"
              @confirm="onConfirm"
              @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
            v-model="formdata.amount"
            name="换汇金额"
            label="换汇金额"
            placeholder="换汇金额"
            :rules="[{ required: true, message: '请填写换汇金额' }]"
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
            v-model="formdata.accname"
            name="姓名"
            label="姓名"
            placeholder="姓名"
            :rules="[{ required: true, message: '姓名' }]"
            required
        />
        <van-field name="uploader" label="二维码"  required>
          <template #input>
            <van-uploader :max-count="1" :after-read="afterRead" v-model="formdata.qrcode"/>
          </template>
        </van-field>
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
import { areaList } from '@vant/area-data';
import {getTenantId, getToken, getUserId} from "@/utils/auth";
import merchantApi from "@/api/account/merchant";
import merchantaisleApi from "@/api/account/merchantaisle";
import sys_bankApi from "@/api/system/sys_bank";
import exchangeApi from '@/api/exchange/exchange.js';
import {useRouter} from "vue-router";
import axios from "axios";

const router = useRouter();


let formdata = ref({})
let postdata = ref({});
let show = ref(false);
let showBankPicker = ref(false);
let showPicker = ref(false);
let showArea = ref(false);
let columns = ref([]);
let banks = ref([]);
let aisleid = ref(null)
let aredaddress = ref(null)
let bankname = ref(null);
let bankcode = ref(null);

let uploadUrl = import.meta.env.VITE_APP_BASE_FILE_API;

onMounted(async () => {
  let params = {userid:getUserId(),type:71}
  let result = await merchantaisleApi.list(params);
  columns.value = result.body.records;

  let res = await merchantApi.getdata();
  console.info(res)
  formdata.value.totalincome = res.body.balance;

  let resbank = await sys_bankApi.list();
  banks.value = resbank.body.records;

});

function onConfirm (selectedOptions){
  aisleid = selectedOptions.aisleid;
  formdata.value.aisleid = selectedOptions.name;
  showPicker.value = false;
};

function onBankConfirm (selectedOptions){
  bankname = selectedOptions.name;
  bankcode = selectedOptions.code;
  formdata.value.bankname = selectedOptions.name;
  showBankPicker.value = false;
};


function onAreaConfirm (selectedValues,selectedOptions){
  aredaddress = selectedValues[0].name+selectedValues[1].name+selectedValues[2].name;
  formdata.value.bankaddress = aredaddress;
  showArea.value = false;
};

async function onSubmit(){
  let totalincome = parseInt(formdata.value.totalincome);
  let amount = parseInt(formdata.value.amount);
  if(totalincome < amount || amount <= 0){
    Notify({ type:'danger',message: '输入金额要小于可用余额' });
  }else{
    show.value = true;
    formdata.value.aisleid = aisleid;
    formdata.value.bankcode = bankcode;
    try{
      postdata = {qrcode:formdata.qrcode,remark:formdata.value.remark,aisleid:formdata.value.aisleid,amount:formdata.value.amount,accname:formdata.value.accname,bankname:'微信支付宝'};
      let res = await exchangeApi.add(postdata);
      if(res.code == 200){
        Notify({type:'success',message: '提交成功' });
        setTimeout(() => {
          show.value = false;
          router.push({ path: '/my' })
        }, 1000);
      }
    }catch(e){
      show.value = false;
    }
  }
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
        formdata.qrcode=res.data.body.url;
      })
      .catch((err) => {
        console.info(err)
      });

};

</script>

<style>

</style>