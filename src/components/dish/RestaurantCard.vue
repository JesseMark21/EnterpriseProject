<template>
  <div class="restaurant-card">
    <div class="image-container">
      <img :src="`https://jessemark21.github.io/img/${imageSrc}`" alt="Restaurant Image" class="restaurant-image" />
      <div class="overlay">
        <h2 class="restaurant-name">{{ restaurantName }}</h2>
        <button class="favorite-btn" @click="toggleFavorite(dish, restaurantName)">
          <span v-if="isFavorite(dish, restaurantName)">X</span>
          <span v-else>+</span>
        </button>
      </div>
    </div>
    <div class="restaurant-info">
      <h3>{{ dishName }}</h3>
      <!-- <a :href="restaurantLink" target="_blank">Visit Restaurant</a> -->
      <button @click="shareDish">Share</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  restaurantName: {
    type: String,
    required: true,
  },
  dishName: {
    type: String,
    required: true,
  },
  dish: {
    type: Object,
    required: true,
  },
});

const toggleFavorite = (dish, restaurantName) => {
  const isFav = isFavorite(dish, restaurantName);
  if (isFav) {
    dish.restaurantName = restaurantName;
    store.dispatch('removeFromFavorites', dish);
  } else {
    dish.restaurantName = restaurantName;
    store.dispatch('addToFavorites', dish);
  }
};

const isFavorite = (dish, restaurantName) => {
  dish.restaurantName = restaurantName;
  return store.getters.isDishFavorite(dish);
};

const shareDish = () => {
  const shareData = {
    title: `Check out this dish: ${props.dishName}`,
    text: `I found this dish at ${props.restaurantName} and thought you might like it!`,
    url: props.restaurantLink,
  };

  if (navigator.share) {
    navigator.share(shareData).catch(console.error);
  } else {
    alert('Sharing is not supported in this browser.');
  }
};
</script>

<style scoped>
.restaurant-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.image-container {
  position: relative;
}

.restaurant-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.restaurant-name {
  color: white;
  margin: 0;
}

.favorite-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: gold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.favorite-button i {
  font-size: 24px;
}

.restaurant-info {
  margin-top: 16px;
}

button {
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

a {
  display: block;
  margin-top: 8px;
  text-decoration: none;
  color: #007bff;
}

a:hover {
  text-decoration: underline;
}
</style>
