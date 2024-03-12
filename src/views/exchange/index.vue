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
        <van-field
            v-model="formdata.accnumer"
            name="账号"
            label="账号"
            placeholder="账号"
            :rules="[{ required: true, message: '账号' }]"
            required
        />
        <van-field
            v-model="formdata.bankname"
            required
            is-link
            readonly
            name="picker"
            label="银行名称"
            placeholder="点击选择银行名称"
            @click="showBankPicker = true"
        />
        <van-popup v-model:show="showBankPicker" position="bottom">
          <van-picker
              :columns="banks"
              :columns-field-names="{text:'name',value:'code'}"
              @confirm="onBankConfirm"
              @cancel="showBankPicker = false"
          />
        </van-popup>
        <van-field
            v-model="formdata.bankaddress"
            is-link
            required
            readonly
            name="bankaddress"
            label="银行地址"
            placeholder="银行地址"
            @click="showArea = true"
        />
        <van-popup v-model:show="showArea" position="bottom">
          <van-area
              :area-list="areaList"
              @confirm="onAreaConfirm"
              @cancel="showArea = false"
          />
        </van-popup>
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
import {getUserId} from "@/utils/auth";
import merchantApi from "@/api/account/merchant";
import merchantaccountorderApi from "@/api/merchant/merchantaccountorder";
import merchantaisleApi from "@/api/account/merchantaisle";
import sys_bankApi from "@/api/system/sys_bank";
import exchangeApi from '@/api/account/exchange';
import {useRouter} from "vue-router";

const router = useRouter();


let formdata = ref({})
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
  if(totalincome < amount){
    Notify({ type:'danger',message: '输入金额要小于可用余额' });
  }else{
    show.value = true;
    formdata.value.aisleid = aisleid;
    formdata.value.bankcode = bankcode;
    let res = await exchangeApi.add(formdata.value);
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