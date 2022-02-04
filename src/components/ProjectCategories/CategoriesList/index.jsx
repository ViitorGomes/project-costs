import React from 'react';
import { SimpleButton } from '../../SimpleButton/style'
import PropTypes from 'prop-types';
import { CategoriesContainer, CategoriesFieldset } from './style';
import { MdOutlineAdd } from "react-icons/md";
import CategoryItem from '../../CategoryItem'
import { P } from '../../style/elements/Typoghaphy/style';
import { FlexContainer } from '../../Container/style'
import { useClickOut } from '../../../hooks/useClickOut';
import { Link } from 'react-router-dom';

function index({categories, clickOutCb}) {

  // outside click check
  const categoriesListRef = useClickOut(() => {
    clickOutCb()
  })

  return <CategoriesContainer ref={categoriesListRef}>
    <CategoriesFieldset>
    <legend>Categories</legend>
    {categories.length > 0 
      ? categories.map(category => <CategoryItem categoryName={category.name} categoryColor={category.color}/>)
      : <FlexContainer justify="center" align="center">
          <P>Category list is empty</P>
      </FlexContainer>
    }
    </CategoriesFieldset>
    <Link to="/">
      <SimpleButton type="button"><MdOutlineAdd />New Category</SimpleButton>
    </Link>
  </CategoriesContainer>;
}

index.propTypes = {
  categories: PropTypes.array.isRequired,

}

export default index;
