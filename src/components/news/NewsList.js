import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "antd";
import axios from "axios";

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=4a458cc55f384f26a831d33ddcbd318b');
                setArticles(response.data.articles);
                // console.log(response.data.articles);
            } catch (e) {
                console.log(e)
            }
            setLoading(false);
        }
        fetchData();
    }, []);
    if (loading) {
        return <h1>대기중.......</h1>
    }
    if (!articles) {
        return null;
    }

    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
                {articles.map(
                    article => (
                        <Col span={8}>
                            <Card title={article.title} key={article.title} bordered={false}>
                                {article.description}
                            </Card>
                        </Col>
                    )
                )}
            </Row>
        </div>
    );
};

export default NewsList;
