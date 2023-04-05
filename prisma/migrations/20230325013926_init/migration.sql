-- CreateTable
CREATE TABLE "FoodChoice" (
    "userID" INTEGER NOT NULL,
    "restaurantID" INTEGER NOT NULL,
    "foodID" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cuisine" INTEGER NOT NULL,
    "flavor" INTEGER[],

    CONSTRAINT "FoodChoice_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Restaurant" (
    "restaurantID" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "rating" INTEGER,
    "cuisine" INTEGER NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("restaurantID")
);

-- CreateTable
CREATE TABLE "RestaurantFood" (
    "foodID" SERIAL NOT NULL,
    "restaurantID" INTEGER NOT NULL,
    "cuisine" INTEGER NOT NULL,
    "flavor" INTEGER[],
    "name" VARCHAR(255) NOT NULL,
    "calories" INTEGER NOT NULL,
    "carbs" INTEGER NOT NULL,
    "protein" INTEGER NOT NULL,
    "fat" INTEGER NOT NULL,

    CONSTRAINT "RestaurantFood_pkey" PRIMARY KEY ("foodID")
);

-- CreateTable
CREATE TABLE "UserAccount" (
    "userID" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "accountAge" DATE NOT NULL,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "UserPrefrences" (
    "userID" INTEGER NOT NULL,
    "range" INTEGER NOT NULL DEFAULT 50,
    "maxCost" INTEGER,
    "cuisine" INTEGER[],
    "flavor" INTEGER[],
    "vegan" BOOLEAN NOT NULL DEFAULT false,
    "vegetarian" BOOLEAN NOT NULL DEFAULT false,
    "lowFat" BOOLEAN NOT NULL DEFAULT false,
    "lowCalorie" BOOLEAN NOT NULL DEFAULT false,
    "ketogenic" BOOLEAN NOT NULL DEFAULT false,
    "atkins" BOOLEAN NOT NULL DEFAULT false,
    "dash" BOOLEAN NOT NULL DEFAULT false,
    "glutenFree" BOOLEAN NOT NULL DEFAULT false,
    "fruitarian" BOOLEAN NOT NULL DEFAULT false,
    "cardiac" BOOLEAN NOT NULL DEFAULT false,
    "paleolithic" BOOLEAN NOT NULL DEFAULT false,
    "pescetarian" BOOLEAN NOT NULL DEFAULT false,
    "pritikin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserPrefrences_pkey" PRIMARY KEY ("userID")
);

-- CreateIndex
CREATE UNIQUE INDEX "foodchoice_foodid_unique" ON "FoodChoice"("foodID");

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_restaurantID_key" ON "Restaurant"("restaurantID");

-- CreateIndex
CREATE UNIQUE INDEX "restaurantfood_foodid_unique" ON "RestaurantFood"("foodID");

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_userID_key" ON "UserAccount"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "useraccount_username_unique" ON "UserAccount"("username");

-- CreateIndex
CREATE UNIQUE INDEX "useraccount_email_unique" ON "UserAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPrefrences_userID_key" ON "UserPrefrences"("userID");
