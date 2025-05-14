<template>
  <div style="position: relative; padding-bottom: 56.25%; height: 0;">
    <iframe
      :src="`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`"
      frameborder="0"
      allowfullscreen
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    ></iframe>
  </div>
</template>

<script setup>
defineProps({
  videoId: String
});
</script>