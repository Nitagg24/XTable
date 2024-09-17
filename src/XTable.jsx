import React, { useState } from 'react';

const XTable = () => {
    const [articles, setArticles] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ]);

    const sortByDate = () => {
        const sorted = [...articles].sort((a, b) => {
            if (a.date === b.date) {
                return b.views - a.views;
            }
            return new Date(b.date) - new Date(a.date);
        });
        setArticles(sorted);
    };

    const sortByViews = () => {
        const sorted = [...articles].sort((a, b) => {
            if (a.views === b.views) {
                return new Date(b.date) - new Date(a.date);
            }
            return b.views - a.views;
        });
        setArticles(sorted);
    };

    return (
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={sortByDate}>Sort by Date</button>
            <button onClick={sortByViews}>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map((article, index) => (
                        <tr key={index}>
                            <td>{article.date}</td>
                            <td>{article.views}</td>
                            <td>{article.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default XTable;
