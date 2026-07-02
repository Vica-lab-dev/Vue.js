<template>
  <ul>
    <li v-for="phone in phones" :key="phone.name">Name: {{ phone.name }} - Price: {{ phone.price }} - Stock: {{ phone.amount }}</li>
  </ul>
</template>

<script>
export default {
  name: 'Products',

  data() {
    return {
      phones: [
        { name: "iPhone 16 Pro", price: 1199, amount: 12 },
        { name: "Samsung Galaxy S25 Ultra", price: 1299, amount: 8 },
        { name: "Google Pixel 9 Pro", price: 999, amount: 0 },
        { name: "OnePlus 13", price: 899, amount: 15 },
        { name: "Xiaomi 15", price: 799, amount: 20 },
        { name: "Nothing Phone (3)", price: 699, amount: 0 },
        { name: "Sony Xperia 1 VI", price: 1399, amount: 5 },
        { name: "Motorola Edge 50 Pro", price: 649, amount: 18 },
        { name: "Honor Magic7 Pro", price: 1099, amount: 0 },
        { name: "Huawei Pura 70 Pro", price: 999, amount: 10 }
      ]
    };
  },

  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");
  },
}
</script>