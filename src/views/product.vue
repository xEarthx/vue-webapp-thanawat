<script setup>
import mycard from './mycard.vue';
</script>

<template>
  <div class="tx">
    <h1>Products</h1>
  </div>
  <main>
    <div class="grid-container">
      <mycard
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :price="item.price"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: "product",
  components: {
    mycard,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.items = json;
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  },
};
</script>

<style scoped>
/* Header Section */
.tx {
  width: 100%;
  padding: 1rem 2rem;
  background: #f4f4f4;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
}

/* Main Section */
main {
  margin: 2rem auto;
  max-width: 1200px;
  padding: 1rem;
}

/* Grid Layout */
.grid-container {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
}

/* Media Queries */
@media (min-width: 768px) {
  .tx {
    font-size: 2rem;
  }
}

@media (min-width: 992px) {
  .tx {
    font-size: 2.2rem;
  }
  main {
    margin-top: 3rem;
  }
}
</style>
