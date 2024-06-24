<template>
  <div>
    <div class="filter-bar">
      <input type="text" v-model="newFilter" @keyup.enter="addFilter" placeholder="Add filter">
      <button @click="addFilter">Add</button>
    </div>
    <div class="selected-filters">
      <span v-for="(filter, index) in selectedFilters" :key="index" class="selected-filter">
        {{ filter }}
        <button @click="removeFilter(index)">x</button>
      </span>
    </div>
    <div v-for="restaurant of restaurants" :key="restaurant.name" class="container restaurant">
      <div v-for="dish of filteredList(restaurant.dishes)" :key="dish.name" class="container card">
        <RestaurantCard image-src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
          :restaurant-name="restaurant.name" :dish-name="dish.name">
        </RestaurantCard>
        <button @click="toggleFavorite(dish, restaurant.name)">
          <span v-if="isFavorite(dish, restaurant.name)">Remove from Favorites</span>
          <span v-else>Add to Favorites</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

import RestaurantCard from './dish/RestaurantCard.vue';

import axios from 'axios';

const newFilter = ref('');
const selectedFilters = ref([]);

const restaurants = ref(null);
// fetch('https://testapi.io/api/jessedmark/restaurants')
//     .then(response => response.json())
//     .then(data => restaurants.value = data);

const getRestaurants = () => {
  axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log("RESPONSE", response);
      response => response.json()
    })
    .then(data => restaurants.value = data)
    .catch((error) => {
      console.log("ERROR", error);
    })
}

const store = useStore();

const filteredList = (dishes) => {
  return dishes.filter(dish => {
    return selectedFilters.value.every(filter => dish.description.toLowerCase().includes(filter.toLowerCase()));
  });
};

const addFilter = () => {
  if (newFilter.value.trim() !== '' && !selectedFilters.value.includes(newFilter.value.trim())) {
    selectedFilters.value.push(newFilter.value.trim());
    newFilter.value = '';
  }
};

const removeFilter = (index) => {
  selectedFilters.value.splice(index, 1);
};

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
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.selected-filters,
.filter-bar {
  margin-bottom: 1rem;
}

.selected-filter {
  margin-right: 1rem;
}
</style>
