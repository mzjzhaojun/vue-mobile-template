<template>
  <div>
    <van-search
        v-model="queryvalue"
        placeholder="请输入搜索名称"
        @search="onSearch">
    </van-search>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="'+'+item.todayincome+' 余额:'+item.incomecount" :value="item.dateval" :label="'成功:'+item.successorder+' 总单:'+item.todayorder+' 成率:'+item.payoutrate"/>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup name="Msg">

import {ref} from 'vue';
import systemstatisticalreportsApi from "@/api/account/systemstatisticalreports";

const list = ref([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const pageParams = ref(1);
const queryvalue = ref('');


function onLoad(){

   setTimeout(() => {
     if (refreshing.value) {
       list.value = [];
       refreshing.value = false;
     }
    getData();
   }, 1000);


};

function onSearch(){
  list.value = [];
  pageParams.value = 1;
  getData();
}

async function getData(){
  let page = {pageNum:pageParams.value,pageSize:10,orderBy:'create_time',dir:'desc'};
  let params = {accname:queryvalue.value,type:20}
  let res = await systemstatisticalreportsApi.page(params,page);
  console.info(res)
  if (res.body.records.length > 0) {
    let data = res.body.records;
    //  分页操作
    if (data.length > 0) {
      data.forEach(curr => {
        list.value.push(curr);
      })
      loading.value = false;
      pageParams.value++;
    } else {
      finished.value = true;
    }
  } else {
    finished.value = true;
    loading.value = false;
  }
}


function onRefresh(){

  finished.value = false;

  loading.value = true;

  pageParams.value = 1;

  list.value = [];

  onLoad();
};

</script>

<style>

</style>