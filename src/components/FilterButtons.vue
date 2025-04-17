<template>
    <div class="flex justify-center gap-6 mb-8">
      <button
        v-for="(filter, index) in filters"
        :key="index"
        @click="onFilterClick(filter)"
        class="bg-gold text-white py-2 px-6 rounded hover:bg-darkGold transition"
      >
        {{ filter.label }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      filters: {
        type: Array,
        required: true,
        default: () => [
          { label: "Haircuts", value: "haircuts" },
          { label: "Coloring", value: "coloring" },
          { label: "Bridal", value: "bridal" },
          { label: "Texturizing", value: "texturizing" },
        ],
      },
    },
    methods: {
      onFilterClick(filter) {
        this.$emit("filter-selected", filter.value);
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-gold {
    background-color: #d4af37;
  }
  .hover\:bg-darkGold:hover {
    background-color: #a3785e;
  }
  </style>
  