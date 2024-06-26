<template>
  <div class="search-component py-2">
    <!-- Positive Filters -->
    <div class="filter-bar positive">
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

    <!-- Negative Filters -->
    <div class="filter-bar negative">
      <div class="filter-input">
        <input type="text" v-model="newNegativeFilter" @keyup.enter="addNegativeFilter" placeholder="Add negative filter">
        <button class="add-filter-btn" @click="addNegativeFilter">Add</button>
      </div>

      <div class="selected-filters">
        <span v-for="(filter, index) in negativeFilters" :key="index" class="selected-filter">
          {{ filter }}
          <button @click="removeNegativeFilter(index)">x</button>
        </span>
      </div>
    </div>

    <!-- Rest of your existing code -->

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
const newNegativeFilter = ref('');
const selectedFilters = ref([]);
const negativeFilters = ref([]);
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
    const includesPositiveFilters = selectedFilters.value.every(filter =>
      dish.description.toLowerCase().includes(filter.toLowerCase()) || dish.name.toLowerCase().includes(filter.toLowerCase())
    );

    const excludesNegativeFilters = !negativeFilters.value.some(filter =>
      dish.description.toLowerCase().includes(filter.toLowerCase()) || dish.name.toLowerCase().includes(filter.toLowerCase())
    );

    return includesPositiveFilters && excludesNegativeFilters;
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

const addNegativeFilter = () => {
  if (newNegativeFilter.value.trim() !== '' && !negativeFilters.value.includes(newNegativeFilter.value.trim())) {
    negativeFilters.value.push(newNegativeFilter.value.trim());
    newNegativeFilter.value = '';
  }
};

const removeFilter = (index) => {
  selectedFilters.value.splice(index, 1);
};

const removeNegativeFilter = (index) => {
  negativeFilters.value.splice(index, 1);
};

onMounted(loadRestaurants);
</script>
