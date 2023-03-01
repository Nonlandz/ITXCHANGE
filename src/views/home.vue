<template>
  <header>
  <MyBar/>
  </header>


  <body>
   <div class="justify-content-center text-center " >
   <Button label="Headphone" class="p-button-rounded p-button-secondary mr-5 mb-4" />
   <Button label="Mouse" class="p-button-rounded p-button-secondary mr-5 mb-4" />
   <Button label="Keyboard" class="p-button-rounded p-button-secondary mr-5 mb-4" />
   <Button label="Monitor" class="p-button-rounded p-button-secondary mr-5 mb-4" />
   <Button label="Printer" class="p-button-rounded p-button-secondary mr-5 mb-4" />
   <Button label="Smartphone" class="p-button-rounded p-button-secondary mr-5 mb-4" />
   <Button label="Ipad" class="p-button-rounded p-button-secondary mr-5 mb-4" />
   <Button label="Notebook" class="p-button-rounded p-button-secondary mr-5 mb-4" />
   <Button label="Other" class="p-button-rounded p-button-secondary mr-5 mb-4" />
  </div>
  <div class="w-10 h-6rem bg-secondary border-round-xl text-center mt-4" style="margin-left: 7.5%;">
    <Button label="add post" class="p-button-rounded p-button-secondary mt-4" />
  </div>
  
  </body>





</template>

<script setup>
import MyBar from "../components/MyBar.vue";
</script>

<style  scoped>

body {
  margin: 3%;

}

</style>
