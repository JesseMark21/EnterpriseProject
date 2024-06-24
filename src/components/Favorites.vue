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
    <div v-if="filteredFavoriteDishes.length === 0" class="no-favorites">
      No favorite dishes found.
    </div>
    <div v-else class="container restaurant">
      <div v-for="dish in filteredFavoriteDishes" :key="dish.name" class="container card">
        <RestaurantCard :key="dish.name" :restaurant-name="dish.restaurantName" :dish-name="dish.name" :dish="dish"
          image-src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg">
        </RestaurantCard>
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

// Computed property to filter favorite dishes based on selected filters
const filteredFavoriteDishes = computed(() => {
  const favoriteDishes = store.state.favoriteDishes; // Assuming favoriteDishes is stored in Vuex state

  if (selectedFilters.value.length === 0) {
    return favoriteDishes;
  }

  return favoriteDishes.filter(dish => {
    // Check if all selected filters match with dish description
    return selectedFilters.value.every(filter =>
      dish.description.toLowerCase().includes(filter.toLowerCase())
    );
  });
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

.no-favorites {
  text-align: center;
  padding: 20px;
  font-style: italic;
  color: #666;
}
</style>
