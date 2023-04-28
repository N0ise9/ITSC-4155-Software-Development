-- CreateTable
CREATE TABLE "Restaurant" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cuisine" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "review_count" INTEGER NOT NULL,
    "categories" JSONB NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "price" TEXT,
    "location" JSONB NOT NULL,
    "phone" TEXT NOT NULL,
    "display_phone" TEXT NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestaurantFood" (
    "foodID" TEXT NOT NULL,
    "restaurantID" TEXT NOT NULL,
    "cuisine" INTEGER NOT NULL,
    "flavor" INTEGER[],
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "RestaurantFood_pkey" PRIMARY KEY ("foodID")
);

-- CreateTable
CREATE TABLE "User" (
    "userID" TEXT NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "accountAge" DATE NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_id_key" ON "Restaurant"("id");

-- CreateIndex
CREATE UNIQUE INDEX "restaurantfood_foodid_unique" ON "RestaurantFood"("foodID");

-- CreateIndex
CREATE UNIQUE INDEX "User_userID_key" ON "User"("userID");

-- CreateIndex
CREATE UNIQUE INDEX "useraccount_username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "useraccount_email_unique" ON "User"("email");
