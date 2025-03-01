const parsePrice = (priceStr) => {
  return parseFloat(priceStr?.replace('$', '') || '0')
}

const foodItems = [
  {
    Item: "Little House Salad",
    Category: "Small Plates",
    Price: 9.95
  },
  {
    Item: "Street Corn",
    Category: "Small Plates",
    Price: 10.95
  },
  {
    Item: "Chicken Taquitos",
    Category: "Small Plates",
    Price: 12.50
  },
  {
    Item: "Korean Fried Cauliflower",
    Category: "Small Plates",
    Price: 12.95
  },
  {
    Item: "Avocado Tacos",
    Category: "Small Plates",
    Price: 12.50
  },
  {
    Item: "Stuffed Mushrooms",
    Category: "Small Plates",
    Price: 13.95
  },
  {
    Item: "Fried Zucchini",
    Category: "Small Plates",
    Price: 12.95
  },
  {
    Item: "Crispy Brussels Sprouts",
    Category: "Small Plates",
    Price: 12.95
  },
  {
    Item: "Beet and Avocado Salad",
    Category: "Small Plates",
    Price: 13.95
  },
  {
    Item: "Cheeseburger Spring Rolls",
    Category: "Small Plates",
    Price: 13.95
  },
  {
    Item: "Crispy Crab Bites",
    Category: "Small Plates",
    Price: 13.50
  },
  {
    Item: "Crispy Fried Cheese",
    Category: "Small Plates",
    Price: 13.95
  },
  {
    Item: "Crab Wontons",
    Category: "Small Plates",
    Price: 13.95
  },
  // Appetizers
  {
    Item: "Roadside Sliders",
    Category: "Appetizers",
    Price: 15.95
  },
  {
    Item: "Tex Mex Eggrolls",
    Category: "Appetizers",
    Price: 15.95
  },
  {
    Item: "Chicken Potstickers",
    Category: "Appetizers",
    Price: 17.95
  },
  {
    Item: "Chicken Quesadilla",
    Category: "Appetizers",
    Price: 18.95
  },
  {
    Item: "Thai Chili Shrimp",
    Category: "Appetizers",
    Price: 14.95
  },
  {
    Item: "Avocado Egg Rolls",
    Category: "Appetizers",
    Price: 17.95
  },
  {
    Item: "Warm Crab Dip",
    Category: "Appetizers",
    Price: 16.50
  },
  {
    Item: "Fried Calamari",
    Category: "Appetizers",
    Price: 18.95
  },
  {
    Item: "Spicy Tuna",
    Category: "Appetizers",
    Price: 18.95
  },
  {
    Item: "Eggroll Sampler",
    Category: "Appetizers",
    Price: 18.95
  },
  {
    Item: "Ahi Poke Nachos",
    Category: "Appetizers",
    Price: 19.95
  },
  {
    Item: "Housemade Meatballs",
    Category: "Appetizers",
    Price: 15.50
  },
  {
    Item: "Pretzel Bites and Cheese",
    Category: "Appetizers",
    Price: 15.95
  },
  {
    Item: "Fried Mac and Cheese",
    Category: "Appetizers",
    Price: 18.95
  },
  {
    Item: "Sweet Corn Tamale Cakes",
    Category: "Appetizers",
    Price: 17.95
  },
  {
    Item: "Hot Spinach and Cheese Dip",
    Category: "Appetizers",
    Price: 19.95
  },
  {
    Item: "Buffalo Blasts",
    Category: "Appetizers",
    Price: 18.95
  },
  {
    Item: "Factory Nachos w/ Spicy Chicken",
    Category: "Appetizers",
    Price: 20.95
  },
  {
    Item: "Thai Lettuce Wraps",
    Category: "Appetizers",
    Price: 20.95
  },
  {
    Item: "Buffalo Wings",
    Category: "Appetizers",
    Price: 18.95
  },
  {
    Item: "Housemade Soup",
    Category: "Appetizers",
    Price: 10.95
  },
  {
    Item: "Cheese",
    Category: "Flatbread Pizzas",
    Price: 13.50
  },
  {
    Item: "Margherita",
    Category: "Flatbread Pizzas",
    Price: 14.50
  },
  {
    Item: "Basil, Tomato, Cheese",
    Category: "Flatbread Pizzas",
    Price: 14.50
  },
  {
    Item: "Pepperoni",
    Category: "Flatbread Pizzas",
    Price: 14.95
  },
  {
    Item: "Everything",
    Category: "Flatbread Pizzas",
    Price: 15.50
  },
  {
    Item: "Bee Sting",
    Category: "Flatbread Pizzas",
    Price: 15.95
  },
  {
    Item: "Tossed Green Salad",
    Category: "Salads",
    Price: 11.95
  },
  {
    Item: "Chicken Caesar",
    Category: "Salads",
    Price: 23.50
  },
  {
    Item: "Mexicali",
    Category: "Salads",
    Price: 17.95
  },
  {
    Item: "Chicken Club Salad",
    Category: "Salads",
    Price: 18.95
  },
  {
    Item: "Factory Chopped Salad",
    Category: "Salads",
    Price: 18.95
  },
  {
    Item: "Vegan Cobb",
    Category: "Salads",
    Price: 19.95
  },
  {
    Item: "Chinese Chicken Salad",
    Category: "Salads",
    Price: 20.95
  },
  {
    Item: "Thai Chicken Salad",
    Category: "Salads",
    Price: 20.95
  },
  {
    Item: "Shiela's Chicken and Avocado",
    Category: "Salads",
    Price: 20.95
  },
  {
    Item: "BBQ Ranch Chicken Salad",
    Category: "Salads",
    Price: 20.95
  },
  {
    Item: "Santa Fe Salad",
    Category: "Salads",
    Price: 20.95
  },
  {
    Item: "Cobb",
    Category: "Salads",
    Price: 21.95
  },
  {
    Item: "Ahi Tuna Salad",
    Category: "Salads",
    Price: 28.95
  },
  {
    Item: "Renee's Special",
    Category: "Lunch Favorites",
    Price: 17.95
  },
  {
    Item: "Lunch Soup and Salad",
    Category: "Lunch Favorites",
    Price: 13.95
  },
  {
    Item: "Lunch Salad",
    Category: "Lunch Favorites",
    Price: 17.95
  },
  {
    Item: "Lunch Flatbread Pizza and Salad",
    Category: "Lunch Favorites",
    Price: 17.95
  },
  {
    Item: "Lunch Pasta",
    Category: "Lunch Favorites",
    Price: 18.95
  },
  {
    Item: "Lunch Chicken Special",
    Category: "Lunch Favorites",
    Price: 18.95
  },
  {
    Item: "Lunch Favorite",
    Category: "Lunch Favorites",
    Price: 18.95
  },
  {
    Item: "Lunch Salmon",
    Category: "Lunch Favorites",
    Price: 21.95
  },
  {
    Item: "Old Fashioned Burger",
    Category: "Glamburgers and Sandwiches",
    Price: 18.95
  },
  {
    Item: "Bistro Burger",
    Category: "Glamburgers and Sandwiches",
    Price: 19.50
  },
  {
    Item: "Classic Burger",
    Category: "Glamburgers and Sandwiches",
    Price: 19.50
  },
  {
    Item: "French Dip Cheeseburger",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Smokehouse BBQ Burger",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Americana Cheeseburger",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Mac and Cheese Burger",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Mushroom Burger",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Bacon Bacon Cheeseburger",
    Category: "Glamburgers and Sandwiches",
    Price: 21.95
  },
  {
    Item: "Factory Turkey Burger",
    Category: "Glamburgers and Sandwiches",
    Price: 19.95
  },
  {
    Item: "Veggie Burger Melt",
    Category: "Glamburgers and Sandwiches",
    Price: 19.95
  },
  {
    Item: "Impossible Burger",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Renee's Special",
    Category: "Glamburgers and Sandwiches",
    Price: 17.95
  },
  {
    Item: "Chicken Salad Sandwich",
    Category: "Glamburgers and Sandwiches",
    Price: 18.50
  },
  {
    Item: "Cuban Sandwich",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "The Club",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Grilled Chicken and Avocado Club",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Spicy Crispy Chicken Sandwich",
    Category: "Glamburgers and Sandwiches",
    Price: 20.50
  },
  {
    Item: "Chicken Parmesan Sandwich",
    Category: "Glamburgers and Sandwiches",
    Price: 20.95
  },
  {
    Item: "Tomato Basil Pasta",
    Category: "Pastas",
    Price: 22.95
  },
  {
    Item: "Fettuccini Alfredo",
    Category: "Pastas",
    Price: 24.95
  },
  {
    Item: "Pasta Carbonara",
    Category: "Pastas",
    Price: 24.95
  },
  {
    Item: "Four Cheese Pasta",
    Category: "Pastas",
    Price: 24.50
  },
  {
    Item: "Spicy Rigatoni Vodka",
    Category: "Pastas",
    Price: 24.95
  },
  {
    Item: "Spaghetti and Meatballs",
    Category: "Pastas",
    Price: 26.95
  },
  {
    Item: "Evelyn's Favorite Pasta",
    Category: "Pastas",
    Price: 24.95
  },
  {
    Item: "Pasta da Vinci",
    Category: "Pastas",
    Price: 26.95
  },
  {
    Item: "Louisiana Chicken Pasta",
    Category: "Pastas",
    Price: 26.95
  },
  {
    Item: "Farfalle with Chicken and Roasted Garlic",
    Category: "Pastas",
    Price: 25.95
  },
  {
    Item: "Spicy Chicken Chipotle Pasta",
    Category: "Pastas",
    Price: 25.95
  },
  {
    Item: "Italian Sausage and Fresh Mushroom Rigatoni",
    Category: "Pastas",
    Price: 26.95
  },
  {
    Item: "Bistro Shrimp Pasta",
    Category: "Pastas",
    Price: 29.95
  },
  {
    Item: "Cajun Jambalaya Pasta",
    Category: "Pastas",
    Price: 28.95
  },
  {
    Item: "Green Chile Chicken Enchiladas",
    Category: "Specialties",
    Price: 19.95
  },
  {
    Item: "Korean Fried Chicken",
    Category: "Specialties",
    Price: 22.95
  },
  {
    Item: "White Chicken Chili",
    Category: "Specialties",
    Price: 21.95
  },
  {
    Item: "Chicken Parm Pizza Style",
    Category: "Specialties",
    Price: 25.95
  },
  {
    Item: "Chicken Littles",
    Category: "Specialties",
    Price: 22.95
  },
  {
    Item: "Crispy Pineapple Chicken and Shrimp",
    Category: "Specialties",
    Price: 23.95
  },
  {
    Item: "Shepherd's Pie",
    Category: "Specialties",
    Price: 24.95
  },
  {
    Item: "Baja Chicken Tacos",
    Category: "Specialties",
    Price: 21.95
  },
  {
    Item: "Fish Tacos",
    Category: "Specialties",
    Price: 23.95
  },
  {
    Item: "Grilled Steak Tacos",
    Category: "Specialties",
    Price: 24.95
  },
  {
    Item: "Factory Meatloaf",
    Category: "Specialties",
    Price: 25.95
  },
  {
    Item: "Chicken Madeira",
    Category: "Specialties",
    Price: 28.95
  },
  {
    Item: "Chicken Bellagio",
    Category: "Specialties",
    Price: 26.95
  },
  {
    Item: "Spicy Cashew Chicken",
    Category: "Specialties",
    Price: 26.95
  },
  {
    Item: "Crusted Chicken Romano",
    Category: "Specialties",
    Price: 27.95
  },
  {
    Item: "Orange Chicken",
    Category: "Specialties",
    Price: 26.95
  },
  {
    Item: "Truffle Honey Chicken",
    Category: "Specialties",
    Price: 25.95
  },
  {
    Item: "Parmasean Herb Crusted Chicken",
    Category: "Specialties",
    Price: 27.95
  },
  {
    Item: "Crispy Chicken Costoletta",
    Category: "Specialties",
    Price: 26.95
  },
  {
    Item: "Chicken Piccata",
    Category: "Specialties",
    Price: 27.95
  },
  {
    Item: "Bang Bang Chicken and Shrimp",
    Category: "Specialties",
    Price: 29.95
  },
  {
    Item: "Shrimp Scampi and Steak Diane",
    Category: "Specialties",
    Price: 29.95
  },
  {
    Item: "Chicken Madeira and Steak Diane",
    Category: "Specialties",
    Price: 29.95
  },
  {
    Item: "Steak Diane and Herb Crusted Salmon",
    Category: "Specialties",
    Price: 29.95
  },
  {
    Item: "Fish and Chips",
    Category: "Fish and Seafood",
    Price: 24.95
  },
  {
    Item: "Shrimp and Chicken Gumbo",
    Category: "Fish and Seafood",
    Price: 26.95
  },
  {
    Item: "Fried Shrimp Platter",
    Category: "Fish and Seafood",
    Price: 26.95
  },
  {
    Item: "Shrimp Scampi",
    Category: "Fish and Seafood",
    Price: 27.95
  },
  {
    Item: "Jamaican Black Pepper Shrimp",
    Category: "Fish and Seafood",
    Price: 25.95
  },
  {
    Item: "Fresh Grilled Salmon",
    Category: "Fish and Seafood",
    Price: 29.95
  },
  {
    Item: "Cajun Salmon",
    Category: "Fish and Seafood",
    Price: 29.95
  },
  {
    Item: "Herb Crusted Filet of Salmon",
    Category: "Fish and Seafood",
    Price: 29.95
  },
  {
    Item: "Miso Salmon",
    Category: "Fish and Seafood",
    Price: 29.95
  },
  {
    Item: "Carne Asada Steak",
    Category: "Steaks",
    Price: 27.95
  },
  {
    Item: "Steak Diane",
    Category: "Steaks",
    Price: 29.95
  },
  {
    Item: "Grilled Ribeye Steak",
    Category: "Steaks",
    Price: 42.95
  },
  {
    Item: "Petite Filet",
    Category: "Steaks",
    Price: 38.95
  },
  {
    Item: "Filet Mignon",
    Category: "Steaks",
    Price: 45.95
  },
  {
    Item: "Farm Fresh Eggs",
    Category: "Eggs and Omelettes",
    Price: 13.50
  },
  {
    Item: "Brioche Breakfast Sandwich",
    Category: "Eggs and Omelettes",
    Price: 17.50
  },
  {
    Item: "Factory Create an Omleette",
    Category: "Eggs and Omelettes",
    Price: 17.95
  },
  {
    Item: "California Omelette",
    Category: "Eggs and Omelettes",
    Price: 17.95
  },
  {
    Item: "Spinach, Mushroom, Bacon, and Cheese Omelette",
    Category: "Eggs and Omelettes",
    Price: 18.50
  },
  {
    Item: "Loaded Mashed Potato Omelette",
    Category: "Eggs and Omelettes",
    Price: 18.50
  },
  {
    Item: "Little House Salad",
    Category: "Skinnylicious Small Plates",
    Price: 9.95
  },
  {
    Item: "Skinny Avocado Tacos",
    Category: "Skinnylicious Small Plates",
    Price: 10.50
  },
  {
    Item: "Chicken Taquitos",
    Category: "Skinnylicious Small Plates",
    Price: 12.50
  },
  {
    Item: "Stuffed Mushrooms",
    Category: "Skinnylicious Small Plates",
    Price: 13.95
  },
  {
    Item: "Crispy Brussels Sprouts",
    Category: "Skinnylicious Small Plates",
    Price: 12.95
  },
  {
    Item: "Beet and Avocado Salad",
    Category: "Skinnylicious Small Plates",
    Price: 13.95
  },
  {
    Item: "Crispy Crab Bites",
    Category: "Skinnylicious Small Plates",
    Price: 13.50
  },
  {
    Item: "Asian Chicken Lettuce Wrap Tacos",
    Category: "Skinnylicious Small Plates",
    Price: 12.95
  },
  {
    Item: "Crab Wontons",
    Category: "Skinnylicious Small Plates",
    Price: 13.95
  },
  {
    Item: "Chicken Potstickers",
    Category: "Skinnylicious Small Plates",
    Price: 17.95
  },
  {
    Item: "Spicy Tuna",
    Category: "Skinnylicious Small Plates",
    Price: 18.95
  },
  {
    Item: "Tossed Green Salad",
    Category: "Skinnylicious Salads",
    Price: 11.95
  },
  {
    Item: "Skinny Chopped Salad",
    Category: "Skinnylicious Salads",
    Price: 18.95
  },
  {
    Item: "Skinny Asian Chicken Salad",
    Category: "Skinnylicious Salads",
    Price: 18.95
  },
  {
    Item: "Mexican Tortilla Salad",
    Category: "Skinnylicious Salads",
    Price: 18.95
  },
  {
    Item: "Skinny Hamburger",
    Category: "Skinnylicious Specialties",
    Price: 18.50
  },
  {
    Item: "Impossible Burger",
    Category: "Skinnylicious Specialties",
    Price: 18.95
  },
  {
    Item: "Skinny Crispy Chicken Sandwich",
    Category: "Skinnylicious Specialties",
    Price: 19.95
  },
  {
    Item: "Skinny Grilled Turkey Burger",
    Category: "Skinnylicious Specialties",
    Price: 18.95
  },
  {
    Item: "Skinny Turkey and Avocado Sandwich",
    Category: "Skinnylicious Specialties",
    Price: 19.95
  },
  {
    Item: "Skinny Soft Tacos",
    Category: "Skinnylicious Specialties",
    Price: 16.95
  },
  {
    Item: "Skinny White Chicken Chili",
    Category: "Skinnylicious Specialties",
    Price: 21.95
  },
  {
    Item: "Skinny Chicken Pasta",
    Category: "Skinnylicious Specialties",
    Price: 21.95
  },
  {
    Item: "Lemon Herb Parmesean Chicken",
    Category: "Skinnylicious Specialties",
    Price: 23.95
  },
  {
    Item: "Sesame Ginger Chicken",
    Category: "Skinnylicious Specialties",
    Price: 23.95
  },
  {
    Item: "Tuscan Chicken",
    Category: "Skinnylicious Specialties",
    Price: 24.95
  },
  {
    Item: "Lemon Garlic Shrimp",
    Category: "Skinnylicious Specialties",
    Price: 23.95
  },
  {
    Item: "Spicy Shrimp Pasta",
    Category: "Skinnylicious Specialties",
    Price: 24.95
  },
  {
    Item: "Skinny Grilled Salmon",
    Category: "Skinnylicious Specialties",
    Price: 26.95
  },
  {
    Item: "Grilled Steak Medallions",
    Category: "Skinnylicious Specialties",
    Price: 27.95
  }
].map(item => ({
  ...item,
  Price: typeof item.Price === 'string' ? parsePrice(item.Price) : item.Price
}))

const drinkItems = [
  // Cocktails
  {
    Item: "Peach Bellini",
    Category: "Cocktails"
  },
  {
    Item: "Bloody Mary",
    Category: "Cocktails"
  },
  {
    Item: "Strawberry Spritz",
    Category: "Cocktails"
  },
  {
    Item: "Espresso Martini",
    Category: "Cocktails"
  },
  {
    Item: "Sparkling Sunrise Sangria",
    Category: "Cocktails"
  },
  {
    Item: "Georgia Peach",
    Category: "Cocktails"
  },
  {
    Item: "Pineapple Moscow Mule",
    Category: "Cocktails"
  },
  {
    Item: "Red Sangria",
    Category: "Cocktails"
  },
  {
    Item: "Gin Rickey Crush",
    Category: "Cocktails"
  },
  {
    Item: "JW Pink Lemonade",
    Category: "Cocktails"
  },
  {
    Item: "Mai Tai",
    Category: "Cocktails"
  },
  {
    Item: "Paloma Rosa",
    Category: "Cocktails"
  },
  {
    Item: "Strawberry Negroni",
    Category: "Cocktails"
  },
  {
    Item: "Whisky & Ginger",
    Category: "Cocktails"
  },
  {
    Item: "Whiskey Smash",
    Category: "Cocktails"
  },
  {
    Item: "Spanish Whiskey Sour",
    Category: "Cocktails"
  },
  {
    Item: "Old Fashioned",
    Category: "Cocktails"
  },
  {
    Item: "The Ultimate",
    Category: "Cocktails"
  },
  {
    Item: "Strawberry Infused Margarita",
    Category: "Cocktails"
  },
  {
    Item: "Passionfruit Margarita",
    Category: "Cocktails"
  },
  {
    Item: "Pineapple Mezcal",
    Category: "Cocktails"
  },
  {
    Item: "Mojito",
    Category: "Cocktails"
  },
  {
    Item: "Coconut Mojito",
    Category: "Cocktails"
  },
  {
    Item: "Passionfruit Mojito",
    Category: "Cocktails"
  },
  {
    Item: "Raspberry Lemon Drop",
    Category: "Cocktails"
  },
  {
    Item: "Aperol Spritz Martini",
    Category: "Cocktails"
  },
  {
    Item: "Strawberry Blossom",
    Category: "Cocktails"
  },
  {
    Item: "Well Mannered Dirty Martini",
    Category: "Cocktails"
  },
  // Non-Alcoholic
  {
    Item: "Paradise Punch",
    Category: "Non-Alcoholic"
  },
  {
    Item: "Pineapple Cherry Limeade",
    Category: "Non-Alcoholic"
  },
  {
    Item: "Passion Mint Fizz",
    Category: "Non-Alcoholic"
  },
  {
    Item: "Guava Sparkler",
    Category: "Non-Alcoholic"
  },
  {
    Item: "Tropical Ginger Cooler",
    Category: "Non-Alcoholic"
  },
  {
    Item: "Stella Artois NA",
    Category: "Non-Alcoholic"
  },
  {
    Item: "Corona NA",
    Category: "Non-Alcoholic"
  },
  // Draft Beer
  {
    Item: "Stella Artois",
    Category: "Draft Beer"
  },
  {
    Item: "Goose Island IPA",
    Category: "Draft Beer"
  },
  {
    Item: "Firestone 805",
    Category: "Draft Beer"
  },
  {
    Item: "Blue Moon",
    Category: "Draft Beer"
  },
  // Bottled Beer
  {
    Item: "Heineken",
    Category: "Bottled Beer"
  },
  {
    Item: "Corona",
    Category: "Bottled Beer"
  },
  {
    Item: "Modelo Especial",
    Category: "Bottled Beer"
  },
  {
    Item: "Guinness",
    Category: "Bottled Beer"
  },
  {
    Item: "Sam Adams",
    Category: "Bottled Beer"
  },
  {
    Item: "Angry Orchard",
    Category: "Bottled Beer"
  },
  {
    Item: "Stone IPA",
    Category: "Bottled Beer"
  },
  {
    Item: "Budweiser",
    Category: "Bottled Beer"
  },
  {
    Item: "Bud Light",
    Category: "Bottled Beer"
  },
  {
    Item: "Michelob Ultra",
    Category: "Bottled Beer"
  },
  // Skinny Cocktails
  {
    Item: "Long Island Iced Tea",
    Category: "Skinny Cocktails"
  },
  {
    Item: "Red Sangria",
    Category: "Skinny Cocktails"
  },
  {
    Item: "Margarita",
    Category: "Skinny Cocktails"
  },
  {
    Item: "Mojito",
    Category: "Skinny Cocktails"
  },
  {
    Item: "Cosmopolitan",
    Category: "Skinny Cocktails"
  }
]

export { foodItems, drinkItems } 