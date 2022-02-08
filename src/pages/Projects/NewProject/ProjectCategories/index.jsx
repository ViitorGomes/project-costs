import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProjectCategories, CategoriesList } from './style'
import CategoriesContainer from './CategoriesList';
import { MdOutlineAdd } from "react-icons/md";
import Button from '../../../../components/buttons/DefaultButton';
import { Span } from '../../../../components/style/elements/Typoghaphy/style';
import CategoryItem from '../../../../components/CategoryItem';

function index({selectedCategories, setCategoriesCb}) {
    const [showCategories, setShowCategories] = useState(false)
    const categories = JSON.parse(localStorage.getItem("categories")) || []

    const handleCategories = selectedCategory => {
        const alreadySelected = selectedCategories.some(category => category.id === selectedCategory.id)
        !alreadySelected ? setCategoriesCb((prev) => [...prev, selectedCategory]) : null
    }

    return <ProjectCategories>
        <Span>Categories:</Span>
        <Button 
            type="button" 
            styleType="active" 
            cornerStyle="rounded"
            cb={{onClick: e => setShowCategories(true)}}
            ><MdOutlineAdd/></Button>
        <CategoriesList>{selectedCategories.map(category => <li key={category.id}>
            <CategoryItem categoryName={category.name} categoryColor={category.color}/>
        </li>)}</CategoriesList>
        {
            showCategories && <CategoriesContainer categories={categories} clickOutCb={e => setShowCategories(false)} handleCategories={handleCategories}/>
        }
    </ProjectCategories>;
}

index.propTypes = {
    selectedCategories: PropTypes.array.isRequired,
    setCategoriesCb: PropTypes.func.isRequired
}

export default index;
