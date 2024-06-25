<template>
    <div class="search-component py-2">
      <div class="filter-bar">
        <div class="filter-input">
          <input type="text" v-model="newFilter" @keyup.enter="addFilter" placeholder="Add filter">
          <button class="add-filter-btn" @click="addFilter">Add</button>
  
        </div>
  
        <div class="selected-filters">
          <span v-for="(filter, index) in selectedFilters" :key="index" class="selected-filter">
            {{ filter }}
            <button @click="removeFilter(index)">x</button>
          </span>
        </div>
      </div>
  
      <div v-if="!loading">
        <div v-for="restaurant of filteredRestaurants" :key="restaurant.name" class="restaurant-row py-4">
          <h1 class="restaurant-name">{{ restaurant.name }}</h1>
          <div class="container restaurant">
            <div v-for="dish of filteredList(restaurant.dishes)" :key="dish.name" class="container card">
              <RestaurantCard :image-src="dish.image_url" :restaurant-name="restaurant.name" :dish-name="dish.name"
                :dish="dish">
              </RestaurantCard>
            </div>
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
  import { ref, onMounted, computed } from 'vue';
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
    } catch (e) {
      error.value = 'Failed to fetch restaurants. Please try again later.';
    } finally {
      loading.value = false;
    }
  };
  
  const filteredList = (dishes) => {
    return dishes.filter(dish => {
      return selectedFilters.value.every(filter => dish.description.toLowerCase().includes(filter.toLowerCase()));
    });
  };
  
  const filteredRestaurants = computed(() => {
    if (!restaurants.value) return [];
    return restaurants.value.filter(restaurant => filteredList(restaurant.dishes).length > 0);
  });
  
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
  