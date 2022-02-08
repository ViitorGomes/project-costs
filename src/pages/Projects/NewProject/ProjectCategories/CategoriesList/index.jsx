import React from 'react';
import { SimpleButton } from '../../../../../components/buttons/SimpleButton/style'
import PropTypes from 'prop-types';
import { ProjectCategories, CategoriesContainer } from './style';
import { MdOutlineAdd } from "react-icons/md";
import CategoryItem from '../../../../../components/CategoryItem'
import { P } from '../../../../../components/style/elements/Typoghaphy/style';
import { useClickOut } from '../../../../../hooks/useClickOut';
import { Link } from 'react-router-dom';

function index({categories, clickOutCb, handleCategories}) {

  // outside click check
  const categoriesListRef = useClickOut(() => {
    clickOutCb()
  })

  return <ProjectCategories ref={categoriesListRef}>
    <CategoriesContainer flow="column" gap="12px">
    <span>Categories</span>
    <div>
      {categories.length > 0 
        ? categories.map(category => <div key={category.id}>
            <CategoryItem categoryName={category.name} categoryColor={category.color} cb={{
              onClick: e => handleCategories(category)
            }}/>
          </div>)
        : <P>Category list is empty</P>
      }
    </div>
    </CategoriesContainer>
    <Link to="/settings/categories">
      <SimpleButton type="button"><MdOutlineAdd />New Category</SimpleButton>
    </Link>
  </ProjectCategories>;
}

index.propTypes = {
  categories: PropTypes.array.isRequired,
  clickOutCb: PropTypes.func.isRequired,
  handleCategories: PropTypes.func.isRequired
}

export default index;
