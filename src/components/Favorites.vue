<template>
  <div class="favorites-component">
    <div class="filter-bar">
      <input type="text" v-model="newFilter" @keyup.enter="addFilter" placeholder="Add filter">
      <button class="add-filter-btn" @click="addFilter">Add</button>

      <div class="selected-filters">
        <span v-for="(filter, index) in selectedFilters" :key="index" class="selected-filter">
          {{ filter }}
          <button @click="removeFilter(index)">x</button>
        </span>
      </div>
    </div>
    <div v-if="filteredFavoriteRestaurants.length === 0" class="no-favorites">
      No favorite dishes found.
    </div>
    <div v-else>
      <div v-for="restaurant in filteredFavoriteRestaurants" :key="restaurant.name" class="restaurant-row py-4">
        <h1 class="restaurant-name">{{ restaurant.name }}</h1>
        <div class="container restaurant">
          <div v-for="dish in filteredList(restaurant.dishes)" :key="dish.name" class="container card">
            <RestaurantCard :image-src="dish.image_url" :restaurant-name="restaurant.name" :dish-name="dish.name"
              :dish="dish">
            </RestaurantCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import RestaurantCard from './dish/RestaurantCard.vue';

const newFilter = ref('');
const selectedFilters = ref([]);

const store = useStore();

// Function to filter dishes based on selected filters
const filteredList = (dishes) => {
  return dishes.filter(dish => {
    return selectedFilters.value.every(filter =>
      dish.description.toLowerCase().includes(filter.toLowerCase())
    );
  });
};

// Computed property to filter favorite restaurants based on selected filters
const filteredFavoriteRestaurants = computed(() => {
  const favoriteDishes = store.state.favoriteDishes; // Assuming favoriteDishes is stored in Vuex state
  const groupedByRestaurant = favoriteDishes.reduce((acc, dish) => {
    if (!acc[dish.restaurantName]) {
      acc[dish.restaurantName] = { name: dish.restaurantName, dishes: [] };
    }
    acc[dish.restaurantName].dishes.push(dish);
    return acc;
  }, {});

  return Object.values(groupedByRestaurant).filter(restaurant => filteredList(restaurant.dishes).length > 0);
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
</script>
