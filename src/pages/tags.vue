<script setup lang="ts">
import { useTagStore } from '~/stores/tags';

const tags = useTagStore();

// const { t } = useI18n()
</script>

<template>
    <div>
        Tags Page
        <ul>
            <li v-for="t in tags.tagList" :key="t.name">{{ t.name }}</li>
        </ul>
    </div>
</template>
