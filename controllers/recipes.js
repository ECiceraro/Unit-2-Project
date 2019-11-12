// Bringing in required app and variables
const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes.js');
const User = require('../models/users.js');

//_______________________
// Routes
//_______________________

// Seed Route
router.get('/seed', (req,res) => {
    Recipes.create(
        [
            {
                name: "Al Pastor Pork Tacos",
                sides: "with pineapple and chipotle",
                ingredients: "1 Lime,  1 Shallot,  2 Garlic Cloves,  1 Poblano Pepper,  3 oz. Pineapple Chunks,  12 oz. Ground Pork,  1 tsp. Chipotle Seasoning,  6 Small Flour Tortillas,  2 Tbsp. Tomato Paste,  ½ oz. Crispy Jalapeños",
                img: "/images/AlPastorPorkTacos.jpg",
                cooking1: "Prepare Ingredients and Marinate Shallot - Zest lime, halve, and juice. Halve and peel shallot. Cut into thin strips. In a mixing bowl, combine shallot strips with lime juice and a pinch of salt and pepper. Set aside at least 10 minutes, stirring a couple times to marinate evenly. While shallot marinates, stem poblano pepper, seed, and cut into ½ dice. Poblano peppers can vary in spice level; most are mild, but a few can be quite hot. Wash hands and cutting board after prepping.Cut pineapple chunks into small pieces. Mince garlic.",
                cooking2: "Cook the Pork - Place a medium non-stick pan over medium heat. Add 1 tsp. olive oil, ground pork, ¼ tsp. salt, and chipotle seasoning to hot pan. Cook, breaking up meat, until no pink remains, 6-8 minutes. Add garlic and cook until aromatic, 30-60 seconds. Transfer pork to a plate. Reserve pan; no need to wipe clean. While pork cooks, warm tortillas.",
                cooking3: "Warm the Tortillas - Stack tortillas and cover with a moist paper towel. Microwave until warm, 30 seconds. Transfer warmed tortillas immediately to a piece of foil and form a pouch to keep warm.",
                cooking4: "Cook the Filling - Return pan used to cook pork to medium-high heat. Add 1 tsp. olive oil, poblano pepper, ¼ tsp. salt, and a pinch of pepper to hot pan. Stir occasionally until softened, 3-4 minutes. Add ground pork, tomato paste, and pineapple chunks and stir occasionally until tomato paste coats pork, 4-5 minutes. Remove from burner and stir in 1 tsp. lime zest (reserve remaining for garnish).",
                cooking5: "Finish the Dish - Plate dish as pictured, placing filling in each tortilla and garnishing with pickled shallot (to taste), crispy jalapeños (to taste), and remaining lime zest. Bon appétit!"
            },
            {
                name: "Apple Cider-Glazed Bone-in Chicken",
                sides: "with smoky roasted sweet potato wedges",
                ingredients: "2 tsp. Grainy Mustard,  ½ fl. oz. Honey,  3 fl. oz. Apple Cider,  16 oz. Bone-in Skin-On Chicken Breasts,  2 tsp. Chile and Cumin Rub,  1 Shallot,  6 Chive Sprigs,  2 tsp. Chicken Demi-Glace,  18 oz. Sweet Potato,  1 oz. Butter",
                img: "/images/AppleCiderglazedChicken.jpg",
                cooking1: "Start the Sweet Potatoes - Slice sweet potato into ½ inch wedges. Place sweet potato on prepared baked sheet and toss with 1 Tbsp. olive oil and seasoning rub. Massage oil and seasoning into potatoes. Spread into a single layer on one half of baking sheet and roast in hot oven, 15 minutes. Remove from oven and gently flip wedges. Sweet potato will finish cooking in a later step. While potatoes roast, cook chicken.",
                cooking2: "Cook Chicken and Finish Sweet Potatoes - Pat chicken breasts dry, and season both sides with ¼ tsp. salt and a pinch of pepper. Place a medium non-stick pan over medium-high heat and add 2 tsp. olive oil. Add chicken to hot pan, skin side down, and sear until golden brown, 2-3 minutes per side. Transfer to empty half of prepared baking sheet, skin side up. Roast until chicken reaches a minimum internal temperature of 165 degrees, 16-18 minutes. Rest cooked chicken at least 5 minutes. Wipe pan clean and reserve. While chicken cooks, prepare ingredients.",
                cooking3: "Prepare the Ingredients - Mince chives. Peel and halve shallot. Slice thinly. Divide butter into four pieces.",
                cooking4: "Make the Sauce - When chicken has 5 minutes left to cook, return pan used to sear chicken to medium heat and add 1 tsp. olive oil. Add shallot and stir often until softened, 4-5 minutes. Add apple cider, honey, mustard, demi-glace, and a pinch of salt. Stir to combine, then cook until liquid is reduced by half, 1-2 minutes. Add butter, one piece at a time, and stir until each piece is combined. Remove from burner. Add cooked chicken and flip to coat.",
                cooking5: "Finish the Dish - Plate dish as pictured on front of card, spooning sauce over chicken and garnishing chicken with chives. Bon appétit!"
            },
            {
                name: "Apricot Rosemary Mahi-Mahi",
                sides: "with Brussels sprouts and potatoes",
                ingredients: "½ oz. Sliced Almonds,  1 oz. Butter,  2 tsp. Grainy Mustard,  12 oz. Mahi-Mahi Fillets,  8 oz. Brussels Sprouts,  12 oz. Yukon Potatoes,  ½ tsp. Garlic Salt,  1 oz. Apricot Preserves,  1 Rosemary Sprig",
                img: "/images/ApricotRosemaryMahi-Mahi.jpg",
                cooking1: "Prepare the Ingredients - Cut potatoes into ½ inch dice. Trim stems off Brussels sprouts and halve vertically (quarter if larger than a ping-pong ball). Stem and mince rosemary. Pat mahi-mahi dry, and season both sides with ¼ tsp. salt and a pinch of pepper.",
                cooking2: "Cook the Vegetables - Heat 2 tsp. olive oil in a large non-stick pan over medium heat. Add potatoes to hot pan and stir occasionally until lightly browned, 8-10 minutes. Add 1 tsp. olive oil, Brussels sprouts, and garlic salt. Stir occasionally until vegetables are fork-tender, 10-12 minutes. If vegetables brown too quickly, add water, 1 Tbsp. at a time, and cook until evaporated. Repeat until vegetables are cooked. Remove from burner. While vegetables cook, cook mahi-mahi.",
                cooking3: "Cook the Mahi-Mahi - Heat 2 tsp. olive oil in a medium non-stick pan over medium-high heat. Add mahi-mahi to hot pan and cook until fish reaches a minimum internal temperature of 145 degrees, 3-5 minutes per side. Transfer mahi-mahi to a plate and tent with foil. Reserve pan; no need to wipe clean.",
                cooking4: "Make the Apricot Rosemary Glaze - When vegetables have finished cooking, return pan used to cook mahi-mahi to medium heat and add ½ tsp. olive oil. Add rosemary to hot pan and stir until fragrant, 30-60 seconds. Stir in apricot preserves, grainy mustard, and ¼ cup water. Bring to a boil. Once boiling, remove from burner and swirl in butter.",
                cooking5: "Finish the Dish - Plate dish as pictured, topping mahi-mahi with apricot rosemary glaze and garnishing vegetables with almonds. Bon appétit!"
            },
            {
                name: "Chicken with Grape Tomato-Pine Nut Vinaigrette",
                sides: "and truffle cream tortellini",
                ingredients: "13 oz. Boneless Skinless Chicken Breasts,  10 oz. Precooked 5-Cheese Tortellini,  ½ oz. Pine Nuts,  2 oz. Light Cream Cheese,  ¼ fl. oz. Truffle Oil,  2 tsp. Chicken Demi-Glace,  ¼ oz. Parsley,  4 oz. Grape Tomatoes,  1 Shallot,  2 oz. Baby Spinach",
                img: "/images/ChickenwithGrapeTomato.jpg",
                cooking1: "Prepare the Ingredients - Quarter tomatoes. Peel and mince shallot. Coarsely chop parsley (no need to stem). Coarsely chop spinach. Pat chicken dry, and season both sides with a pinch of pepper.",
                cooking2: "Cook the Chicken - Place a medium non-stick pan over medium heat and add 2 tsp. olive oil. Add chicken breasts to hot pan and cook until browned and chicken reaches a minimum internal temperature of 165 degrees, 5-7 minutes per side. Remove from burner. Remove chicken to a plate and tent with foil. Reserve pan; no need to wipe clean.",
                cooking3: "Cook the Pasta - Place a large non-stick pan over medium-high heat. Add ½ cup water, tortellini, cream cheese, demi-glace, spinach, half the truffle oil to hot pan. Bring to a simmer. Once simmering, cook until liquid is reduced by half and thickens slightly, 3-4 minutes. Remove from burner. Add remaining truffle oil if desired. Sauce will thicken as it sits.",
                cooking4: "Make the Vinaigrette - Return pan used to cook chicken to medium heat. Add shallot to hot pan and stir often until softened, 1-2 minutes. Add tomatoes and a pinch of salt and pepper. Stir occasionally until tomatoes start to break down, 1-2 minutes. Remove from burner. Stir in 1 Tbsp. olive oil, parsley, and half the pine nuts (reserve remaining for garnish).",
                cooking5: "Finish the Dish - Plate dish as pictured, placing grape tomato-pine nut vinaigrette on chicken and garnishing tortellini with remaining pine nuts. Bon appétit!"
            },
            {
                name: "Chipotle Shrimp Tostadas",
                sides: "with guacamole and queso fresco",
                ingredients: "1 Roma Tomato,  4 Small Flour Tortillas,  1 Poblano Pepper,  8 oz. Shrimp,  1 oz. Queso Fresco,  4 oz. Guacamole,  2 tsp. Chipotle Seasoning,  2 oz. Sour Cream,  1 Red Onion",
                img: "/images/ChipotleShrimpTostadas.jpg",
                cooking1: "Prepare the Ingredients - Halve and peel onion. Slice halves into thin strips. Core tomato and cut into ¼ inch dice. Stem poblano pepper, seed, and cut into ½ inch dice. Poblano peppers can vary in spice level; most are mild, but a few can be quite hot. Wash hands and cutting board after prepping. Combine tomato, guacamole, and a pinch of salt and pepper in a mixing bowl. Set aside. Pat shrimp dry, and season all over with seasoning blend.",
                cooking2: "Make the Tostadas - Tostadas are a delicious, but messy treat. For this recipe, they can easily be converted to tacos. Simply warm tortillas in oven for 1-2 minutes after completing steps. Poke tortillas with a fork all over, 10 times for each tortilla. Place tortillas on prepared baking sheet. Drizzle with 1 tsp. olive oil and massage oil into tortillas. Bake in hot oven until browned and crispy, 5-7 minutes. While tortillas bake, start topping.",
                cooking3: "Start the Topping - Place a large non-stick pan over medium-high heat and add 2 tsp. olive oil. Add onion to hot pan and stir occasionally until beginning to soften, 1-2 minutes. Add poblano and stir occasionally until lightly charred and tender, 3-5 minutes.",
                cooking4: "Finish the Topping - Working in batches if necessary, add shrimp and a pinch of pepper to pan. Stir occasionally until shrimp reaches a minimum internal temperature of 145 degrees, 3-5 minutes. Remove from burner.",
                cooking5: "Finish the Dish - Plate dish as pictured, spreading guacamole on tostadas and topping with topping. Garnish with sour cream and cheese (crumbling with hands if necessary). Bon appétit!"
            },
            {
                name: "Crispy Orange Chicken",
                sides: "with jasmine rice and broccoli",
                ingredients: "¾ cup Jasmine Rice,  8 oz. Broccoli Florets,  12 oz. Diced Boneless Skinless Chicken Breasts,  6 fl. oz. Canola Oil,  ⅓ cup Tempura Mix,  4 fl. oz. Orange Sauce,  1 tsp. Sriracha",
                img: "/images/CrispyOrangeChicken.jpg",
                cooking1: "Cook the Rice - Bring a small pot with rice and 1½ cups water to a boil. Reduce to a simmer, cover, and cook until tender, 18-20 minutes. Remove from burner. Set aside covered. While rice cooks, roast broccoli.",
                cooking2: "Roast the Broccoli - Cut broccoli into bite-sized pieces. Place broccoli on prepared baking sheet and toss with 1 tsp. olive oil, ¼ tsp. salt, and a pinch of pepper. Spread into a single layer. Roast in hot oven until tender, 14-16 minutes. While broccoli roasts, batter chicken.",
                cooking3: "Batter the Chicken - Add canola oil to a medium non-stick pan and place over medium heat. Let oil heat, 5 minutes. While oil heats, pat diced chicken dry, and season with a pinch of salt. Combine tempura mix, ¼ cup cold water, and a pinch of salt and pepper in a mixing bowl. Stir until a thin batter forms, like a thin pancake batter. If too thick, add cold water 1 Tbsp. at a time until desired consistency is reached. Add chicken pieces to batter and coat evenly.",
                cooking4: "Cook the Chicken - Combine orange sauce and Sriracha (to taste) in another mixing bowl. Test oil temperature by adding a drop of batter to it. It should sizzle gently. If it browns immediately, turn heat down and let oil cool. Working in batches, carefully add chicken pieces to hot oil and cook until golden brown on two sides and pieces reach a minimum internal temperature of 165 degrees, 1-3 minutes per side. Remove chicken to bowl with sauce and coat evenly.",
                cooking5: "Finish the Dish - Plate dish as pictured, combining chicken and broccoli and placing on rice. Drizzle with any remaining sauce. Alternatively, plate chicken and broccoli separately. Bon appétit!"
            },
            {
                name: "Italian Sausage and Pepper Risotto",
                sides: "with spinach and parmesan",
                ingredients: "2 oz. Baby Spinach,  1 oz. Grated Parmesan,  0.125 oz. Oregano,  2 Garlic Cloves,  1 Red Bell Pepper,  4 fl. oz. Marinara Sauce,  2 tsp. Chicken Demi-Glace,  ½ cup Arborio Rice,  8 oz. Italian Pork Sausage Links,  ⅗ oz. Butter",
                img: "/images/ItalianSausageRisotto.jpg",
                cooking1: "Prepare the Ingredients - Stem and mince oregano. Stem, seed, remove ribs, and cut red bell pepper into ½ inch dice. Coarsely chop spinach. Mince garlic. On a separate cutting board, remove Italian sausage from casing.",
                cooking2: "Start the Risotto - Place a medium pot over medium-high heat and add 2 tsp. olive oil. Add rice, garlic, and oregano to hot pot. Stir occasionally until rice is toasted and opaque, 1-2 minutes.",
                cooking3: "Finish the Risotto - Add 1 cup boiling water and demi-glace to pot with rice. Rice should just be covered by liquid. Stir often until nearly all liquid is absorbed. Add ½ cup boiling water and stir often until nearly all liquid is absorbed. Repeat this process, stirring often, 18-20 minutes. Taste risotto as you cook, checking for tenderness. When rice has no more “bite” or crunch, it's done. There may be liquid left. Remove from burner. Stir in Parmesan (reserving 1 Tbsp. for garnish), butter, and a pinch of salt. Cover and set aside.",
                cooking4: "Cook the Sausage Mixture - Place a large non-stick pan over medium heat and add 1 tsp. olive oil. Add sausage and red bell pepper to hot pan. Stir often, breaking up sausage with a spoon, until no pink remains, 4-6 minutes. Stir in spinach, marinara, and a pinch of pepper and cook until spinach is wilted, 30-60 seconds. Remove from burner.",
                cooking5: "Finish the Dish - Plate dish as pictured, topping risotto with sausage mixture and garnishing with reserved Parmesan. Bon appétit!"
            },
            {
                name: "Pear and Blue Cheese Pizza",
                sides: "with smoked almonds",
                ingredients: "1 Yellow Onion,  ½ oz. Baby Arugula,  1 oz. Smoked Almonds,  2 Naan Flatbreads,  1 oz. Blue Cheese,  1 Bosc Pear,  4 oz. Shredded Mozzarella",
                img: "/images/PearBlueCheesePizza.jpg",
                cooking1: "Caramelize the Onion - Halve and peel onion. Slice halves into thin strips. Place a large non-stick pan over medium-low heat. Add 1 Tbsp. olive oil, onion, and a pinch of pepper to hot pan. Stir occasionally until onion is lightly caramelized, 15-20 minutes. While onion caramelizes, prepare ingredients.",
                cooking2: "Prepare the Ingredients - Coarsely chop almonds. Quarter pear and core. Cut quarters into thin slices lengthwise.",
                cooking3: "Par-Bake the Flatbreads - Place flatbreads directly on rack in hot oven and toast, 5 minutes.",
                cooking4: "Bake the Pizzas - Place par-baked flatbreads on a clean work surface. Divide mozzarella evenly on flatbreads, leaving ¼ inch border. Shingle pear slices on top of mozzarella. Drizzle each pizza with 1 tsp. olive oil. Place pizzas directly on oven rack, with prepared baking sheet on rack below to catch any drips. Bake until pizzas are golden brown and pears are tender, but still slightly crisp, 10-12 minutes.",
                cooking5: "Finish the Dish - Plate dish as pictured, garnishing pizzas with caramelized onions, almonds, blue cheese, and arugula. Bon appétit!"
            },
            {
                name: "Thai Weeping Tiger Beef Meatballs",
                sides: "with roasted sesame edamame slaw",
                ingredients: "2 fl. oz. Creamy Roasted Sesame Dressing,  1 Lime,  4 Saltine Crackers,  5 oz. Edamame,  ⅕ fl. oz. Tamari Soy Sauce,  2 oz. Sweet Chili Sauce,  8 oz. Slaw Mix,  10 oz. Ground Beef",
                img: "/images/ThaiWeepingTigerBeefMeatballs.jpg",
                cooking1: "Prepare the Ingredients - Halve lime. Cut one half into wedges and juice the other half. Finely crush crackers. Place a medium non-stick pan over medium heat. Add edamame to dry, hot pan and stir occasionally until warmed through, 1-2 minutes. Remove edamame to a plate. Reserve pan; no need to wipe clean.",
                cooking2: "Make the Meatballs - Combine ground beef, crackers, ¼ tsp. salt, and a pinch of pepper in a mixing bowl. Form mixture into eight evenly-sized meatballs.",
                cooking3: "Make the Slaw - In another mixing bowl, combine slaw mix, creamy roasted sesame dressing, edamame, and ¼ tsp. salt. Set aside.",
                cooking4: "Cook the Meatballs - Return pan used to cook edamame to medium heat and spray with cooking spray. Add meatballs to hot pan. Cover, and cook undisturbed until browned, 3-4 minutes. Uncover, and gently turn meatballs. Cover again, and cook until meatballs reach a minimum internal temperature of 160 degrees, 5-7 minutes. Remove from burner. Add sweet chili sauce, 1 tsp. lime juice, and soy sauce and stir to combine. If sauce is too thick, add 1 Tbsp. water and stir gently until meatballs are glazed.",
                cooking5: "Finish the Dish - Plate dish as pictured, placing meatballs on sauce and squeezing lime wedges over to taste. Bon appétit!"
            }
        ]
    );
    res.redirect('/recipes');
})

// New Recipe Route
router.get('/new', (req,res) => {
    res.render(
        'recipes/new.ejs',
        {
            username: req.session.username,
            userId: req.session.userId
        }
    )
})

// Recipe Index Page
router.get('/', (req,res) => {
    Recipes.find({}, (error, allRecipes) => {
        res.render(
            'recipes/index.ejs',
            {
                recipes: allRecipes,
                username: req.session.username,
                userId: req.session.userId
            }
        );
    })
})


// Show Routes
router.get('/:id', (req,res) => {
    Recipes.findById(req.params.id, (error, foundRecipe) => {
        res.render(
            'recipes/show.ejs',
            {
                recipe: foundRecipe,
                username: req.session.username,
                userId: req.session.userId
            }
        )
    })
})

// Create/Post Route
router.post('/', (req,res) => {
    Recipes.create(req.body, (error, createdRecipe) => {
        res.redirect('/recipes')
    })
})

// Edit Route
router.get('/:id/edit', (req,res) => {
    Recipes.findById(req.params.id, (error, editedRecipe) => {
        res.render(
            'recipes/edit.ejs',
            {
                recipe: editedRecipe,
                username: req.session.username
            }
        )
    })
})

// Update Route
router.put('/:id', (req,res) => {
    Recipes.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}, (error, updatedRecipe) => {
            res.redirect('/recipes')
        }
    )
})

// Delete Route
router.delete('/:id', (req,res) => {
    Recipes.findByIdAndRemove(
        req.params.id,
        (error, deletedRecipe) => {
            res.redirect('/recipes')
        })
})



module.exports = router;
