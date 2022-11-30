import React, { useState, useEffect } from 'react';

import './ThreeColumns.css';
import ThreeColumnsCard from './ThreeColumnsCard';

const ThreeColumns = ({ selectBlog,  blogs, author, scrollToTop }) => {

    const [categories] = useState(['Nutrition', 'Functional Fitness', 'Yoga']);
    const [ colOne, setColOne ] = useState([]);
    const [ colTwo, setColTwo ] = useState([]);
    const [ colThree, setColThree ] = useState([]);

    useEffect(() => {
        const categoryOne = blogs.filter(blog => blog.category === categories[0]).reverse();
        const categoryTwo = blogs.filter(blog => blog.category === categories[1]).reverse();
        const categoryThree = blogs.filter(blog => blog.category === categories[2]).reverse();
        setColOne(categoryOne);
        setColTwo(categoryTwo);
        setColThree(categoryThree);
        console.log(categoryOne, "nutrition", blogs)
        }, [blogs]);

    return(
        <div className="three-columns wrapper">
            <div className="container">
                <div className="grid">
                    <div>
                        <div className="header"><h1>{categories[0]}</h1></div>
                        <ThreeColumnsCard scrollToTop={scrollToTop} selectBlog={selectBlog} blogs={colOne} author={author}/>
                    </div>
                    <div>
                        <div className="header"><h1>{categories[1]}</h1></div>
                        <ThreeColumnsCard scrollToTop={scrollToTop} selectBlog={selectBlog} blogs={colTwo} author={author}/>
                    </div>
                    <div>
                        <div className="header"><h1>{categories[2]}</h1></div>
                        <ThreeColumnsCard scrollToTop={scrollToTop} selectBlog={selectBlog} blogs={colThree} author={author}/>
                    </div>
                </div>
                <div className="side-panel">
                     
                </div>
            </div>
        </div>
    );
};

export default ThreeColumns;