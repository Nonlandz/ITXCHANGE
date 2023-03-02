<template>
  <header>
  <MyBar/>
  </header>


  <body>
    <div class="justify-content-center text-center " >
      <Button label="Headphone" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400  mr-5 mb-4" />
      <Button label="Mouse" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Keyboard" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Monitor" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Printer" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Smartphone" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Ipad" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Notebook" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Other" class="p-button-rounded bg-bluegray-200 text-black hover:bg-bluegray-400 mr-5 mb-4" />
    </div>
    <!-- <div class="w-8 h-6rem bg-bluegray-200 text-black border-round-xl text-center mt-4" style="margin-left: 16%;">
        <router-link to="/addpost">
          <Button label="add post" class="p-button-rounded bg-primary-200 text-black hover:bg-primary-300 mt-4" />
        </router-link>
    </div> -->


    <facebook-post></facebook-post>



  

  </body>





</template>

<script >
import MyBar from "../components/MyBar.vue";


import FacebookPost from '@/components/FacebookPost.vue';

export default {
  components: {
    FacebookPost,
    MyBar 
  },
};



</script>

<style  scoped>

body {
  padding: 3%;
  background-color: rgb(211, 232, 232);
  font-family: 'Mitr', sans-serif;
}



</style>
