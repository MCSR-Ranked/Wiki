<template>
    <Layout>
        <FootnoteInit />
        <div style="color: red">TEST FOOTNOTE COMPONENT</div>
    </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import FootnoteInit from './FootnoteInit.vue'

const { Layout } = DefaultTheme
</script>