import React, { useState, useEffect, useRef } from 'react';
import { ProjectCategories } from './style'
import CategoriesContainer from './CategoriesList';
import { MdOutlineAdd } from "react-icons/md";
import Button from '../buttons/DefaultButton';
import { Span } from '../style/elements/Typoghaphy/style';

function index() {
    const [showCategories, setShowCategories] = useState(false)
    const categories = () => JSON.parse(localStorage.getItem("categories")) || []

    return <ProjectCategories>
        <Span>Categories:</Span>
        <Button 
            type="button" 
            styleType="active" 
            cornerStyle="rounded"
            cb={{onClick: e => setShowCategories(true)}}
        ><MdOutlineAdd/></Button>
        {
            showCategories && <CategoriesContainer categories={categories} showing={showCategories} clickOutCb={e => setShowCategories(false)}/>
        }
    </ProjectCategories>;
}

export default index;
