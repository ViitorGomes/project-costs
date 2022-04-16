import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { CategoriesWindow } from './style'
import { useClickOut } from '../../../../hooks/useClickOut'
import { CategoriesContext } from '../../../../context/categoriesContext'
import Loader from '../../../Loader'
import { FlexContainer } from '../../../Container/style'
import { P } from '../../../style/elements/Typoghaphy/style'
import CategoryItem from '../../../CategoryItem'
import { Link } from 'react-router-dom'

function index({clickOutCb, handlePush}) {

  const categoriesWindowRef = useClickOut(() => {
    clickOutCb()
  })

  const { categories, loading } = useContext(CategoriesContext)

  return (
    <CategoriesWindow ref={categoriesWindowRef}>
      <legend>Categories</legend>
      <fieldset>
        {
          !loading 
            ? categories.length > 0
              ? categories.map(category => <CategoryItem 
                key={category.id}
                categoryName={category.name}
                categoryColor={category.color}
                onClick={e => handlePush(category)}
              />)
              : (
                <FlexContainer align="center" justify="center">
                   <P>Category list is empty</P>
                </FlexContainer>
              )
            : <Loader size="36px"/>
        }
      </fieldset>
      <FlexContainer>
        <Link to="/settings/categories">
          New category
        </Link>
      </FlexContainer>
    </CategoriesWindow>
  )
}

index.propTypes = {
  clickOutCb: PropTypes.func.isRequired,
  handlePush: PropTypes.func.isRequired
}

export default index