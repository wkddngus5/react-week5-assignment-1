import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Buttons from './Buttons';
import { selectRegion } from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectRegionId: state.selectRegionId,
  }));

  function handleClick(id) {
    dispatch(selectRegion(id));
  }

  return (
    <Buttons
      buttons={regions}
      onClick={handleClick}
      selectId={selectRegionId}
    />
  );
}
