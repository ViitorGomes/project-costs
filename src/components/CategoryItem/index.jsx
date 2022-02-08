import React from 'react';
import { CategoryItem, CategoryColor } from './style';
import PropTypes from 'prop-types';

function index({categoryName, categoryColor, cb}) {
  return <CategoryItem {...cb}>
      {categoryColor && <CategoryColor bgColor={categoryColor}/>}
      {categoryName}
    </CategoryItem>;
}

index.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryColor: PropTypes.string,
  cb: PropTypes.object
}

export default index;
