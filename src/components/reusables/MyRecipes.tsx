import React, { useReducer, useEffect } from 'react'
import RecipeCards from './RecipeCards'
import { inputReducer } from '@/components/reusables/reducers';
import { myRecipes } from './OurRecipes';

const initialInput = {
    list: []
};

function OurRecipes() {
    const [input, setInput] = useReducer(inputReducer, initialInput);

    useEffect(() => {
        if (localStorage.getItem("savedRecipes")) {
            let storageRecipes = JSON.parse(`${localStorage.getItem("savedRecipes")}`);
            const getRecipes = myRecipes.filter((item: any) => storageRecipes.includes(item.itemId))

            setInput({
                type: "insertValue",
                field: "list",
                fieldValue: getRecipes,
            })
        }
    }, [])

    return (
        <RecipeCards myRecipes={input['list']} />
    )
}

export default OurRecipes