<template>
  <div class="login-container">

  </div>
</template>

<script setup name="Login">
import { reactive,onMounted } from "vue";
import { Button,Dialog } from "vant";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { apiGetUserAccount } from '@/api/login/login'
import {setRsapublickey} from "@/utils/auth";

const router = useRouter();
const userStore = useUserStore();

onMounted(async () => {
  userStore.Initrsakey();

  const tgid = getUrlKey('tgid');

  apiGetUserAccount(tgid).then(res => {
    console.info(res)
    setTimeout(() => {
      userStore.Login(res).then((response) => {
        router.push({path: '/'})
      })
    }, 200);
  });
});


  function getUrlKey(name) {
    return decodeURIComponent(
        (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [","])[1]
            .replace(/\+/g, '%20')
    ) || null;
  }

</script>

<style>
</style>