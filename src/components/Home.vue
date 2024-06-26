<template>
  <div class="home-page">
    <header class="header">
      <img src="../assets/Logo.png" alt="Cuisine Quest Logo" class="logo" />
      <p class="tagline">
        Explore New Flavors: Your Culinary Adventure Starts Here
      </p>
    </header>

    <section class="description">
      <p>
        Embark on a culinary journey with Cuisine Quest, your personal food
        explorer. We're here to take the guesswork out of trying new cuisines
        and dishes. Whether you're a curious foodie, have specific dietary
        needs, or simply want to expand your palate, our app connects you with
        exciting dishes tailored to your tastes. From local hidden gems to
        popular hotspots, we'll guide you to your next favorite meal, one
        ingredient at a time.
      </p>
    </section>

    <section class="steps-wrapper">
      <h1 class="steps-title mb-2">How it works</h1>
      <div class="steps">
        <div class="step">
          <img src="../assets/filter.png" alt="Filter Icon" class="step-icon" />
          <div class="step-title">
            <strong>Filter for Wanted or Unwanted Ingredients</strong>
          </div>
          <p>
            Start by selecting the ingredients you want or need to include in
            your dishes. Whether you have dietary restrictions, allergies, or
            simply preferences, our filter feature allows you to customize your
            search to meet your specific needs. Simply enter the ingredients in
            the search bar and add them to your filter list.
          </p>
        </div>
        <div class="step">
          <img src="../assets/search.png" alt="Search Icon" class="step-icon" />
          <div class="step-title">
            <strong>Search Through Your List of Filtered Restaurants</strong>
          </div>
          <p>
            Once you’ve set your filters, explore the curated list of
            restaurants that meet your criteria. Browse through various options,
            read reviews, and check out the menus to find the perfect spot for
            your next meal. Our extensive database ensures you’ll find a variety
            of restaurants, from hidden local gems to popular hotspots.
          </p>
        </div>
        <div class="step">
          <img
            src="../assets/share.png"
            alt="Try Dishes Icon"
            class="step-icon"
          />
          <div class="step-title">
            <strong>Try New Dishes and Share Your Experience</strong>
          </div>
          <p>
            After selecting a restaurant, it’s time to enjoy your meal! Try new
            dishes that match your filtered ingredients and discover new
            flavors. Don’t forget to share your experience with others. Leave
            reviews, rate the dishes, and upload photos to help fellow foodies
            on their culinary journeys.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

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
  width: 30rem;
  height: auto;
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

  display: flex;
  gap: 2rem;
  text-align: left;
}

.step-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.step-icon {
  width: 3rem;
  width: 3rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}

.steps strong {
  font-size: 1.2rem;
  font-weight: bold;
}

.steps p {
  font-size: 1rem;
  color: #959595;
  margin: 0.5rem 0 0 0;
  text-align: left;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.steps-title {
  color: #FFD53B;
  font-size: 3rem;
}
</style>
