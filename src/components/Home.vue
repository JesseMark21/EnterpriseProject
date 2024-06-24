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
    <div v-if="!loading">
      <div v-for="restaurant of restaurants" :key="restaurant.name" class="container restaurant">
        <div v-for="dish of filteredList(restaurant.dishes)" :key="dish.name" class="container card">
          <RestaurantCard :image-src="dish.image_url" :restaurant-name="restaurant.name" :dish-name="dish.name"
            :dish="dish">
          </RestaurantCard>
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

import RestaurantCard from './dish/RestaurantCard.vue';

import { fetchRestaurants } from '@/api/restaurantService';

const newFilter = ref('');
const selectedFilters = ref([]);

const restaurants = ref(null);
const loading = ref(true);
const error = ref(null);

const loadRestaurants = async () => {
  try {
    loading.value = true;
    restaurants.value = await fetchRestaurants();
    console.log("RESTAURANTS:", restaurants.value);
  } catch (e) {
    error.value = 'Failed to fetch restaurants. Please try again later.';
  } finally {
    loading.value = false;
  }
};

const filteredList = (dishes) => {
  return dishes.filter(dish => {
    console.log("dish src", dish.image_url);
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

onMounted(loadRestaurants);
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
