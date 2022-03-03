import * as api from "../utils/api";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom"


export default function Categories () {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.getCategories().then((categories) => {
            setCategories(categories)
        })
    }, [categories]);

    return (
        <nav>
            <Link to={"/"}>All Categories</Link>
            {categories.map(({category_name}) => {
                
                return (
                <Link to={`/categories/${category_name}/items`}>
                {category_name}
                </Link>
                )
            })}
        </nav>
    )
}