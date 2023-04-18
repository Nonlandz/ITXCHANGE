<template>
  <header>
  <MyBar/>
  </header>


  <body>
    <div class="justify-content-center text-center " >
      <Button label="Headphone" class="p-button-rounded bg-orange-100 text-black hover:bg-bluegray-400  mr-5 mb-4" />
      <Button label="Mouse" class="p-button-rounded bg-orange-100 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Keyboard" class="p-button-rounded bg-orange-100 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Monitor" class="p-button-rounded bg-orange-100 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Smartphone" class="p-button-rounded bg-orange-100 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Ipad" class="p-button-rounded bg-orange-100 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Notebook" class="p-button-rounded bg-orange-100 text-black hover:bg-bluegray-400 mr-5 mb-4" />
      <Button label="Other" class="p-button-rounded bg-orange-100 text-black hover:bg-bluegray-400 mr-5 mb-4" />
    </div>
    

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
