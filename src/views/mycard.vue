<template>
  <div class="card">
    <img :src="image" :alt="title" class="card-image" />
    <div class="container">
      <h1 class="card-title">{{ title }}</h1>
      <p class="card-price">{{ price }}</p>
      <router-link :to="`/product/${id}`">
        <button class="card-button">View Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "mycard",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  margin: auto;
  text-align: center;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.container {
  padding: 20px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.card-price {
  font-size: 1.2rem;
  color: #ff6f61;
  margin-bottom: 20px;
}

.card-button {
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  border: none;
  border-radius: 25px;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.card-button:hover {
  background: linear-gradient(90deg, #feb47b, #ff7e5f);
  transform: scale(1.05);
}

.card-button:focus {
  outline: none;
}
</style>
