import React from 'react';
import {Menu} from "antd";

const categories = [
    {
        name :'all',
        text : '전체보기',
    },
    {
        name :'business',
        text : '비지니스',
    },
    {
        name :'entertainment',
        text : '엔터테이먼트',
    },
    {
        name :'health',
        text : '건강',
    },
    {
        name :'science',
        text : '과학',
    },
];
const Categories = (category, onSelect) => {
    return (
        <Menu mode="horizontal" selectedKeys={[category]} >
            {categories.map(c => (
                <Menu.Item key={c.name}>{c.text}</Menu.Item>
            ))}
        </Menu>
    );
};

export default Categories;
