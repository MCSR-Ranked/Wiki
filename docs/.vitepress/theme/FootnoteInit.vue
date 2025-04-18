<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import initFootnote from '../plugins/footnote'

onMounted(() => {
    initFootnote()
})

onUpdated(() => {
    initFootnote()
})
</script>

<template>
    <div style="display: none;" />
</template>
