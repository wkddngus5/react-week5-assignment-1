import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function updateSelected(type, value) {
  return {
    type: 'updateSelected',
    payload: {
      [type]: value,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { region, categoryId } = getState().selected;

    if (!categoryId) {
      return;
    }

    const restaurants = await fetchRestaurants(region, categoryId);

    dispatch(setRestaurants(restaurants));
  };
}