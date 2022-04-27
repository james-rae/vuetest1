<script setup lang="ts">
const { t } = useI18n();

// whut i want
// Profile
// Tags
// Writer
// Reader
</script>

<template>
    <nav text-xl mt-6>
        <RouterLink class="icon-btn mx-2" to="/user" :title="t('button.user')">
            <div i-carbon-user-avatar-filled-alt />
        </RouterLink>

        <RouterLink class="icon-btn mx-2" to="/tags" :title="t('button.tags')">
            <div i-carbon-tag />
        </RouterLink>

        <RouterLink
            class="icon-btn mx-2"
            to="/write"
            :title="t('button.write')"
        >
            <div i-carbon-pen-fountain />
        </RouterLink>

        <RouterLink class="icon-btn mx-2" to="/read" :title="t('button.read')">
            <div i-carbon-book />
        </RouterLink>
    </nav>
</template>
