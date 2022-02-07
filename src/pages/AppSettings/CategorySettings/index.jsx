import React, { useContext } from 'react';
import { CategoriesSettings } from './style'
import { CategoriesList } from './style';
import SettingWrapper from '../SettingWrapper';
import CategoryItem from '../../../components/CategoryItem'
import NewCategoryForm from './NewCategoryForm';
import { CategoriesContext } from '../../../context/categoriesContext';

function index() {
    const { categories }= useContext(CategoriesContext)

    return <CategoriesSettings flow="row" align="flex-start" gap="36px">
        <SettingWrapper heading="New category">
            <NewCategoryForm/>
        </SettingWrapper>
        <SettingWrapper heading="Categories list">
            <CategoriesList gap="12px" wrap="wrap">
                {categories.map(category => <CategoryItem key={category.id} categoryName={category.name} categoryColor={category.color}/>)}
            </CategoriesList>
        </SettingWrapper>
    </CategoriesSettings>
}

export default index;