import React, { useContext } from 'react';
import { CategoriesSettings } from './style'
import { CategoriesList } from './style';
import SettingWrapper from '../../../components/SettingWrapper';
import CategoryItem from '../../../components/CategoryItem'
import NewCategoryForm from './NewCategoryForm';
import { CategoriesContext } from '../../../context/categoriesContext';

function index() {
    const { categories, handleCategoryDelete } = useContext(CategoriesContext)

    return (
        <CategoriesSettings flow="column" gap="36px">
            <SettingWrapper heading="New category">
                <NewCategoryForm/>
            </SettingWrapper>
            <SettingWrapper heading="Categories list">
                <CategoriesList>
                    {categories.map(category => <CategoryItem 
                        key={category.id} 
                        categoryName={category.name}
                        categoryColor={category.color} 
                        deleteCb={e => handleCategoryDelete(category)}
                    />)}
                </CategoriesList>
            </SettingWrapper>
        </CategoriesSettings>
    )
}

export default index;
