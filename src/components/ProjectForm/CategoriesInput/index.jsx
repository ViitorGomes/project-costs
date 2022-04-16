import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MdAdd } from "react-icons/md";
import { CategoriesInput, CategoriesContainer } from './style'
import { Span } from '../../style/elements/Typoghaphy/style'
import Button from '../../buttons/DefaultButton'
import CategoriesWindow from './CategoriesWindow';
import CategoryItem from '../../CategoryItem';
import Warning from '../../InputWarning';

function index({selectedCategories, handleCategoryPush, handleCategoryDelete, invalid}) {

    const [ showCategories, setShowCategories ] = useState(false)

    return (
        <CategoriesInput invalid={invalid}>
            <Span>Categories:</Span>
            <CategoriesContainer>
                <div>
                    {selectedCategories.map(category => <CategoryItem
                        key={category.id} 
                        categoryName={category.name}
                        categoryColor={category.color}
                        deleteCb={e => handleCategoryDelete(category)}
                    />)}
                </div>
                <div>
                    <Button
                        type="button"
                        styleType="active"
                        cornerStyle="basic"
                        onClick={e => {
                            setShowCategories(true)
                        }}
                    >
                        Add<MdAdd/>
                    </Button>
                    { showCategories && <CategoriesWindow 
                        clickOutCb={e => setShowCategories(false)}
                        handlePush={handleCategoryPush}
                    />}
                </div>
            </CategoriesContainer>
            {invalid 
                ? <Warning />
                : null
            }
        </CategoriesInput>
    )
}

index.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    handleCategoryPush: PropTypes.func.isRequired,
    handleCategoryDelete: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
}

export default index