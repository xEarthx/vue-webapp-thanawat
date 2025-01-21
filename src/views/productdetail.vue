<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const product = ref(null);
const loading = ref(true);

onMounted(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      product.value = data;
      loading.value = false;
    })
    .catch((error) => {
      console.error("Error fetching product:", error);
      loading.value = false;
    });
});
</script>

<template>
  <div v-if="loading" class="loading">
    <h1>Loading product...</h1>
  </div>
  <div v-else>
    <div v-if="product" class="container">
      <div class="left-column">
        <img :src="product.image" :alt="product.title" />
      </div>

      <div class="right-column">
        <div class="product-description">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <p class="product-price">Price: ${{ product.price }}</p>
          <router-link to="/product">
            <button class="cart-btn">Back to Products</button>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>Product not found</h1>
      <router-link to="/product">
        <button class="cart-btn">Go back to the product list</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: #f4f4f4;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  margin-top: 5%;
  gap: 2rem;
}

.left-column {
  flex: 2;
  text-align: center;
}

.left-column img {
  border-radius: 5px;
  max-width: 100%;
  height: auto;
}

.right-column {
  flex: 1;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-description {
  margin-bottom: 20px;
}

.product-description h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.product-description p {
  font-size: 1rem;
  color: #555;
}

.product-price {
  font-size: 1.5rem;
  color: #05a18c;
  margin-top: 1rem;
}

.cart-btn {
  background-color: #05a18c;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-btn:hover {
  background-color: #64af3d;
}

@media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 10%;
  }
  .left-column img {
    max-width: 80%;
  }
}

@media (max-width: 535px) {
  .left-column img {
    max-width: 100%;
  }
}
</style>
