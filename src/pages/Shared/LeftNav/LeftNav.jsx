import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OtherStories from '../../News/OtherStories/OtherStories';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4 '>
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>
                    </p>)
                }
            </div>
            <OtherStories></OtherStories>
        </div>
    );
};

export default LeftNav;