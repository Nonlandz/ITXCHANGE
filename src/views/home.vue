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
    <div class="w-8 h-6rem bg-bluegray-200 text-black border-round-xl text-center mt-4" style="margin-left: 16%;">
        <router-link to="/addpost">
          <Button label="add post" class="p-button-rounded bg-primary-200 text-black hover:bg-primary-300 mt-4" />
        </router-link>
    </div>

    <div class="w-7 h-30rem bg-bluegray-200 text-black border-round-xl text-center mt-4" style="margin-left: 20%;">
      <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 10rem width:12rem" class="mt-4" />
      <img src="https://www.primefaces.org/wp-content/uploads/2020/02/primefacesorg-primevue-2020.png" style="height: 10rem " class="mt-4" />
      <br>
      <br>
      <div class=" bg-cyan-50 text-black border-round-xl text-center field col-10 md:col-4" >

      </div>
      
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


