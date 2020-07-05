export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function fetchRestaurants(region, categoryId) {
  const url = `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region}&category=${categoryId}`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}