<template>
    <div class="bg-lavender p-8 rounded-lg shadow-lg">
      <h3 class="text-xl font-playfair font-bold mb-4 text-darkGold">{{ title }}</h3>
      <p class="text-gray-700" v-html="description"></p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-info-card {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    background-color: rgb(81, 169, 217);
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info-card__icon {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
  
  .contact-info-card__content {
    display: flex;
    flex-direction: column;
  }
  
  .contact-info-card__title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #a3785e;
  }
  
  .contact-info-card__description {
    font-size: 1rem;
    color: #4b5563;
  }
  
  .contact-info-card__extra-info {
    font-size: 0.875rem;
    color: #6b7280;
  }
  </style>