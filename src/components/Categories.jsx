import React from 'react';
import '../assets/styles/components/Categories.scss'

const Categories = ({children , Title}) =>(
    <div className="categories">
    <h3 className="categories__title">{Title}</h3>
    {children}
    </div>
);

export default Categories;