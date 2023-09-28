import React from 'react'
import RecipeCards from './RecipeCards'

// test recipes
export const myRecipes = [{
    category: "bread",
    itemId: "quick-bread",
    image_url: "/images/Whole-Grain-Banana-Bread.jpg",
    title: "Whole-Grain Banana Bread",
    description: "This one-bowl Banana Bread — as our 2018 recipe of the year - uses the simplest ingredients, but it's incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all purpose and whole-wheat), we often make the bread 100% whole-wheat, and honestly, no one call tellit's that good! And not only is this bread delicious - it's versatile.",
    prep: "10 Mins",
    bake: "1hr to 1hr 10 Mins",
    total: "1hr 20 Mins",
    yield: "1 loaf, 12 generous servings"
},
{
    category: "bread",
    itemId: "wheat-bread",
    image_url: "/images/bread6.jpg",
    title: "Whole-Wheat Banana Bread",
    description: "This one-bowl Banana Bread — as our 2018 recipe of the year - uses the simplest ingredients, but it's incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all purpose and whole-wheat), we often make the bread 100% whole-wheat, and honestly, no one call tellit's that good! And not only is this bread delicious - it's versatile.",
    prep: "15 Mins",
    bake: "1hr to 1hr 20 Mins",
    total: "1hr 35 Mins",
    yield: "1 loaf, 5 generous servings"
},
{
    category: "bread",
    itemId: "coconut-bread",
    image_url: "/images/Whole-Grain-Banana-Bread.jpg",
    title: "Whole-Wheat Coconut Bread",
    description: "This one-bowl Banana Bread — as our 2018 recipe of the year - uses the simplest ingredients, but it's incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all purpose and whole-wheat), we often make the bread 100% whole-wheat, and honestly, no one call tellit's that good! And not only is this bread delicious - it's versatile.",
    prep: "5 Mins",
    bake: "1hr to 1hr 05 Mins",
    total: "1hr 10 Mins",
    yield: "1 loaf, 10 generous servings"
},
{
    category: "bread",
    itemId: "plantain-bread",
    image_url: "/images/bread6.jpg",
    title: "Whole-Wheat Plantain Bread",
    description: "This one-bowl Banana Bread — as our 2018 recipe of the year - uses the simplest ingredients, but it's incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all purpose and whole-wheat), we often make the bread 100% whole-wheat, and honestly, no one call tellit's that good! And not only is this bread delicious - it's versatile.",
    prep: "10 Mins",
    bake: "1hr to 1hr 10 Mins",
    total: "1hr 20 Mins",
    yield: "1 loaf, 8 generous servings"
}
]

function OurRecipes() {
    return (
        <RecipeCards myRecipes={myRecipes} />
    )
}

export default OurRecipes