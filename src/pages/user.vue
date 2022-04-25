<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore();

// using this $ref was the problem
// just v-model directly into the store property
// const name =  $ref(user.bookName)
const { t } = useI18n()
</script>

<template>
  <div>
   
    <p>
      <em text-sm opacity-75>{{ t('user.desc') }}</em>
    </p>

    <div py-4 />

    <input
      id="bookname"
      v-model="user.bookName"
      :placeholder="t('user.name-default')"
      :aria-label="t('user.name-default')"
      type="text"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
     
    >
    <label class="hidden" for="input">{{ t('user.name-default') }}</label>

  </div>
</template>