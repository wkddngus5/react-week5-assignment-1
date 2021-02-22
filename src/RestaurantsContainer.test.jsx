import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const renderRestaurantsContainer = () => render(<RestaurantsContainer />);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({ restaurants }));
  });

  it('renders restaurants', () => {
    const { queryByText } = renderRestaurantsContainer();

    const restaurantData = restaurants.map((restaurant) => restaurant.name);

    restaurantData.forEach((name) => {
      expect(queryByText(name)).not.toBeNull();
    });
  });
});
