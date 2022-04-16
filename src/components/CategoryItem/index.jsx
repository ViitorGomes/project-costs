import React from 'react';
import { CategoryItem } from './style';
import PropTypes from 'prop-types';
import { SimpleButton } from '../buttons/SimpleButton/style';
import { MdOutlineClear } from 'react-icons/md';

function index({categoryName, categoryColor, deleteCb, ...props}) {

  return (
    <CategoryItem 
      categoryColor={categoryColor} 
      element={
        props.onClick ? "button" : "div"
      }
      {...(props.onClick && {type: "button"})} 
      {...props}>
      {categoryName}
      {deleteCb && <SimpleButton type="button" onClick={e => deleteCb()} title='delete this category'><MdOutlineClear/></SimpleButton>}
    </CategoryItem>
  ) 
}

index.propTypes = {
  categoryName: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
  deleteCb: PropTypes.func
}

export default index;
