import React from 'react';
import { CategorieItem, CategoryColor } from './style';
import PropTypes from 'prop-types';

function index({categoryName, categoryColor}) {
  return <CategorieItem type="button">
      {categoryColor && <CategoryColor bgColor={categoryColor}/>}
      {categoryName}
    </CategorieItem>;
}

index.propTypes = {
  categoryName: PropTypes.string.isRequired,
  CategoryColor: PropTypes.string
}

export default index;
