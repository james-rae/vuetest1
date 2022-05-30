<script setup lang="ts">
//import { toggleDark } from '~/composables'

//const { t, availableLocales, locale } = useI18n()

import { useTagStore } from '~/stores/tags';

const tags = useTagStore();
const m = ['Full'].concat(tags.monthNames());

return { m };
</script>

<template>
    <select v-id="combo">
        <option v-for="mm in m" v-key="m">{{ mm }}</option>
    </select>
</template>
