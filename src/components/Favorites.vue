<template>
  <div class="favorites-component">
    <!-- Positive Filters -->
    <div class="filter-bar positive">
      <div class="filter-input">
        <input
          type="text"
          v-model="newFilter"
          @keyup.enter="addFilter"
          placeholder="Add filter"
        />
        <button class="add-filter-btn" @click="addFilter">Add</button>
      </div>

      <div class="selected-filters">
        <span
          v-for="(filter, index) in selectedFilters"
          :key="index"
          class="selected-filter"
        >
          {{ filter }}
          <button @click="removeFilter(index)">x</button>
        </span>
      </div>
    </div>

    <!-- Negative Filters -->
    <div class="filter-bar negative">
      <div class="filter-input">
        <input
          type="text"
          v-model="newNegativeFilter"
          @keyup.enter="addNegativeFilter"
          placeholder="Add negative filter"
        />
        <button class="add-filter-btn" @click="addNegativeFilter">Add</button>
      </div>

      <div class="selected-filters">
        <span
          v-for="(filter, index) in negativeFilters"
          :key="index"
          class="selected-filter"
        >
          {{ filter }}
          <button @click="removeNegativeFilter(index)">x</button>
        </span>
      </div>
    </div>

    <div v-if="filteredFavoriteRestaurants.length === 0" class="no-favorites">
      No favorite dishes found.
    </div>
    <div v-else>
      <div
        v-for="restaurant in filteredFavoriteRestaurants"
        :key="restaurant.name"
        class="restaurant-row py-4"
      >
        <h1 class="restaurant-name">{{ restaurant.name }}</h1>
        <div class="container restaurant">
          <div
            v-for="dish in filteredList(restaurant.dishes)"
            :key="dish.name"
            class="container card"
          >
            <RestaurantCard
              :image-src="dish.image_url"
              :restaurant-name="restaurant.name"
              :dish-name="dish.name"
              :dish="dish"
            >
            </RestaurantCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import RestaurantCard from "./dish/RestaurantCard.vue";

const newFilter = ref("");
const newNegativeFilter = ref("");
const selectedFilters = ref([]);
const negativeFilters = ref([]);

const store = useStore();

// Function to filter dishes based on selected filters
const filteredList = (dishes) => {
  return dishes.filter((dish) => {
    const includesPositiveFilters = selectedFilters.value.every(
      (filter) =>
        dish.description.toLowerCase().includes(filter.toLowerCase()) ||
        dish.name.toLowerCase().includes(filter.toLowerCase())
    );

    const excludesNegativeFilters = !negativeFilters.value.some(
      (filter) =>
        dish.description.toLowerCase().includes(filter.toLowerCase()) ||
        dish.name.toLowerCase().includes(filter.toLowerCase())
    );

    return includesPositiveFilters && excludesNegativeFilters;
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

  return Object.values(groupedByRestaurant).filter(
    (restaurant) => filteredList(restaurant.dishes).length > 0
  );
});

const addFilter = () => {
  if (
    newFilter.value.trim() !== "" &&
    !selectedFilters.value.includes(newFilter.value.trim())
  ) {
    selectedFilters.value.push(newFilter.value.trim());
    newFilter.value = "";
  }
};

const addNegativeFilter = () => {
  if (
    newNegativeFilter.value.trim() !== "" &&
    !negativeFilters.value.includes(newNegativeFilter.value.trim())
  ) {
    negativeFilters.value.push(newNegativeFilter.value.trim());
    newNegativeFilter.value = "";
  }
};

const removeFilter = (index) => {
  selectedFilters.value.splice(index, 1);
};

const removeNegativeFilter = (index) => {
  negativeFilters.value.splice(index, 1);
};
</script>
