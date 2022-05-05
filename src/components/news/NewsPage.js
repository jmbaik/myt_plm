import React, {useCallback, useState} from 'react';
import Categories from "./Categories";

const NewsPage = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category, []));

    return (
        <>
            <Categories />
        </>
    );
};

export default NewsPage;
