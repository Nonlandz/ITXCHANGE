<template>
  <div>
    <img src="" alt="" />
  </div>
  <div class="flex text-4xl justify-content-center mt-8">
    <h5>ITxChange</h5>
  </div>
  <div class="flex justify-content-center">
    <Card style="width: 40rem" class="surface-50 border-round-xs">
      <template #content>
        <div class="flex flex-column">
          <h5>Username</h5>
          <InputText type="text" />
          <h5>Passwordㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
            <router-link to="forgotpass/">Forgot password</router-link>
          </h5>
          <InputText type="text" />
        </div>
        <div class="flex flex-column mt-5">
          <Button label="Submit" class="p-button-rounded" />
        </div>
      </template>
    </Card>
  </div>
  <div class="flex justify-content-center mt-4">
    <Card style="width: 25rem" class="border-round-xs">
      <template #content>
        <div class="flex justify-content-center">
            ㅤ Dont have a Account? 
            <router-link to="forgotpass/">
                <span class="ml-2">Create a account</span>
          </router-link>
        </div>
      </template>
    </Card>
  </div>
</template>
