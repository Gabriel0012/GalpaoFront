<script setup lang="ts">
import { reactive, watch } from 'vue'
import router from '@/router'
import FormInput from '../../components/form/FormInput.vue'
import GButton from '../../components/shared/GButton.vue'

interface User {
  userName: string
  password: string
}

const formUser = reactive<User>({ userName: '', password: '' })

// watch(formUser, async (newValue, oldValue) => {
//   console.log('🚀 ~ file: LoginPage.vue:7 ~ watch ~ oldValue:', oldValue)
//   console.log('🚀 ~ file: LoginPage.vue:7 ~ watch ~ newValue:', newValue)
// })

function login() {
  sessionStorage.setItem('user', JSON.stringify(formUser))
  router.push({ name: 'home' })
}
</script>

<template>
  <div>
    <h1>Seja bem vindo</h1>
    <FormInput v-model="formUser.userName" type="text" label="Usuário" />
    <FormInput v-model="formUser.password" type="text" label="Senha" />
    <GButton text="Entrar" @click="login" color="primary" shape="blocked" />
  </div>
</template>

<style lang="css"></style>
