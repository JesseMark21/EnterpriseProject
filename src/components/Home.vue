<template>
  <div class="home-page">
    <header class="header">
      <img src="../assets/logo.svg" alt="Cuisine Quest Logo" class="logo">
      <h1 class="title">Cuisine Quest</h1>
      <p class="tagline">Explore New Flavors: Your Culinary Adventure Starts Here</p>
    </header>

    <section class="description">
      <p>
        Embark on a culinary journey with Cuisine Quest, your personal food explorer. We're here to take the guesswork out of trying new cuisines and dishes. Whether you're a curious foodie, have specific dietary needs, or simply want to expand your palate, our app connects you with exciting dishes tailored to your tastes. From local hidden gems to popular hotspots, we'll guide you to your next favorite meal, one ingredient at a time.
      </p>
    </section>

    <section class="steps">
      <h2>How it works</h2>
      <ol>
        <li>
          <div class="step-title">
            <img src="../assets/logo.svg" alt="Filter Icon" class="step-icon">
            <strong>Filter for Ingredients</strong>
          </div>
          <p>Start by selecting the ingredients you want or need to include in your dishes. Whether you have dietary restrictions, allergies, or simply preferences, our filter feature allows you to customize your search to meet your specific needs. Simply enter the ingredients in the search bar and add them to your filter list.</p>
        </li>
        <li>
          <div class="step-title">
            <img src="../assets/logo.svg" alt="Search Icon" class="step-icon">
            <strong>Search Through Your List of Filtered Restaurants</strong>
          </div>
          <p>Once you’ve set your filters, explore the curated list of restaurants that meet your criteria. Browse through various options, read reviews, and check out the menus to find the perfect spot for your next meal. Our extensive database ensures you’ll find a variety of restaurants, from hidden local gems to popular hotspots.</p>
        </li>
        <li>
          <div class="step-title">
            <img src="../assets/logo.svg" alt="Try Dishes Icon" class="step-icon">
            <strong>Try New Dishes and Share Your Experience</strong>
          </div>
          <p>After selecting a restaurant, it’s time to enjoy your meal! Try new dishes that match your filtered ingredients and discover new flavors. Don’t forget to share your experience with others. Leave reviews, rate the dishes, and upload photos to help fellow foodies on their culinary journeys.</p>
        </li>
      </ol>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
}

.logo {
  width: 150px;
  height: auto;
  margin-bottom: 1rem;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.tagline {
  font-size: 1.25rem;
  color: #cdcdcd;
}

.description {
  font-size: 1.1rem;
  color: #959595;
  margin-bottom: 2rem;
}

.steps {
  font-size: 1.1rem;
  color: #cdcdcd;
}

.steps h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.steps ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
  text-align: left;
  display: inline-block;
}

.steps li {
  margin-bottom: 1.5rem;
  text-align: left;
}

.step-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.step-icon {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}

.steps strong {
  font-size: 1.2rem;
}

.steps p {
  font-size: 1rem;
  color: #959595;
  margin: 0.5rem 0 0 0;
}
</style>
