import React from 'react';
import { CategoryItem } from './style';
import PropTypes from 'prop-types';

function index({categoryName, categoryColor, cb}) {
  return <CategoryItem {...cb} bgColor={categoryColor}>
      {categoryName}
    </CategoryItem>;
}

index.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryColor: PropTypes.string,
  cb: PropTypes.object
}

export default index;
