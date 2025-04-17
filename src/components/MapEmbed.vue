<template>
    <div class="rounded-lg overflow-hidden shadow-lg">
      <iframe
        class="w-full h-96"
        :src="src"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  iframe {
    border: none;
  }
  </style>
  