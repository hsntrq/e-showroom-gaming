DECLARE @db_name VARCHAR(MAX) = 'Test'
DECLARE @db_password VARCHAR(MAX) = 'rigged'
DECLARE @db_user VARCHAR(MAX) = @db_name + '_user'
--
--
USE master
DECLARE @cmd VARCHAR(MAX)
-- Server scope: create SQL Server login and permissions
SET @cmd = 'CREATE LOGIN ' + @db_user + ' WITH PASSWORD = ''' + @db_password + ''''
EXEC(@cmd)
SET @cmd = 'GRANT VIEW SERVER STATE TO ' + @db_user
EXEC(@cmd)
SET @cmd = 'CREATE DATABASE [' + @db_name + ']'
EXEC(@cmd)
-- DB scope: create user for server login and permissions
SET @cmd = 'USE [' + @db_name + '];'
SET @cmd = @cmd + 'CREATE USER ' + @db_user + ' FOR LOGIN ' + @db_user + ';'
SET @cmd = @cmd + 'GRANT SELECT, INSERT, UPDATE, DELETE, ALTER, CREATE TABLE, REFERENCES, EXEC TO ' + @db_user
EXEC(@cmd)

CREATE TABLE Pictures (
  PictureId INTEGER  NOT NULL   IDENTITY ,
  Picture FLOAT  NOT NULL    ,
PRIMARY KEY(PictureId));
GO




CREATE TABLE UserType (
  UserType INTEGER  NOT NULL   IDENTITY ,
  Title VARCHAR(255)      ,
PRIMARY KEY(UserType));
GO




CREATE TABLE Packages (
  PackageId INTEGER  NOT NULL   IDENTITY ,
  Price INTEGER  NOT NULL  ,
  StartTime DATETIME      ,
PRIMARY KEY(PackageId));
GO




CREATE TABLE Category (
  CategoryId INTEGER  NOT NULL   IDENTITY ,
  Name VARCHAR(255)      ,
PRIMARY KEY(CategoryId));
GO




CREATE TABLE User_2 (
  UserId INTEGER  NOT NULL   IDENTITY ,
  UserType_UserType INTEGER  NOT NULL  ,
  Name VARCHAR(255)    ,
  CellPhone VARCHAR(255)    ,
  DateofBirth DATETIME    ,
  Address VARCHAR(255)    ,
  Email VARCHAR(255)      ,
PRIMARY KEY(UserId, UserType_UserType)  ,
  FOREIGN KEY(UserType_UserType)
    REFERENCES UserType(UserType));
GO


CREATE INDEX User_2_FKIndex1 ON User_2 (UserType_UserType);
GO


CREATE INDEX IFK_Rel_01 ON User_2 (UserType_UserType);
GO


CREATE TABLE Ad (
  AdId INTEGER  NOT NULL   IDENTITY ,
  Packages_PackageId INTEGER  NOT NULL  ,
  Date DATETIME    ,
  Description VARCHAR(255)    ,
  IsActive BIT      ,
PRIMARY KEY(AdId, Packages_PackageId)  ,
  FOREIGN KEY(Packages_PackageId)
    REFERENCES Packages(PackageId));
GO


CREATE INDEX Ad_FKIndex1 ON Ad (Packages_PackageId);
GO


CREATE INDEX IFK_Rel_09 ON Ad (Packages_PackageId);
GO


CREATE TABLE Product (
  ProductId INTEGER  NOT NULL   IDENTITY ,
  Ad_AdId INTEGER  NOT NULL  ,
  Category_CategoryId INTEGER  NOT NULL  ,
  Ad_Packages_PackageId INTEGER  NOT NULL  ,
  Pictures_PictureId INTEGER  NOT NULL  ,
  Name VARCHAR(255)    ,
  Desription VARCHAR(255)    ,
  Price INTEGER    ,
  IsBoosted BIT      ,
PRIMARY KEY(ProductId, Ad_AdId, Category_CategoryId, Ad_Packages_PackageId)      ,
  FOREIGN KEY(Ad_AdId, Ad_Packages_PackageId)
    REFERENCES Ad(AdId, Packages_PackageId),
  FOREIGN KEY(Category_CategoryId)
    REFERENCES Category(CategoryId),
  FOREIGN KEY(Pictures_PictureId)
    REFERENCES Pictures(PictureId));
GO


CREATE INDEX Product_FKIndex1 ON Product (Ad_AdId, Ad_Packages_PackageId);
GO
CREATE INDEX Product_FKIndex2 ON Product (Category_CategoryId);
GO
CREATE INDEX Product_FKIndex3 ON Product (Pictures_PictureId);
GO


CREATE INDEX IFK_Rel_04 ON Product (Ad_AdId, Ad_Packages_PackageId);
GO
CREATE INDEX IFK_Rel_07 ON Product (Category_CategoryId);
GO
CREATE INDEX IFK_Rel_08 ON Product (Pictures_PictureId);
GO


CREATE TABLE User_2_has_Product (
  Product_ProductId INTEGER  NOT NULL  ,
  Product_Ad_AdId INTEGER  NOT NULL  ,
  Product_Category_CategoryId INTEGER  NOT NULL  ,
  Product_Ad_Packages_PackageId INTEGER  NOT NULL  ,
  User_2_UserType_UserType INTEGER  NOT NULL  ,
  User_2_UserId INTEGER  NOT NULL    ,
PRIMARY KEY(Product_ProductId, Product_Ad_AdId, Product_Category_CategoryId, Product_Ad_Packages_PackageId)    ,
  FOREIGN KEY(Product_ProductId, Product_Ad_AdId, Product_Category_CategoryId, Product_Ad_Packages_PackageId)
    REFERENCES Product(ProductId, Ad_AdId, Category_CategoryId, Ad_Packages_PackageId),
  FOREIGN KEY(User_2_UserId, User_2_UserType_UserType)
    REFERENCES User_2(UserId, UserType_UserType));
GO


CREATE INDEX User_2_has_Product_FKIndex1 ON User_2_has_Product (Product_ProductId, Product_Ad_AdId, Product_Category_CategoryId, Product_Ad_Packages_PackageId);
GO
CREATE INDEX User_2_has_Product_FKIndex2 ON User_2_has_Product (User_2_UserId, User_2_UserType_UserType);
GO


CREATE INDEX IFK_Rel_03 ON User_2_has_Product (Product_ProductId, Product_Ad_AdId, Product_Category_CategoryId, Product_Ad_Packages_PackageId);
GO
CREATE INDEX IFK_Rel_09 ON User_2_has_Product (User_2_UserId, User_2_UserType_UserType)
GO

CREATE TABLE "auth_group" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "name" varchar(150) NOT NULL UNIQUE)

CREATE TABLE "django_content_type" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "app_label" varchar(100) NOT NULL, "model" varchar(100) NOT NULL)

CREATE TABLE "auth_permission" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "content_type_id" integer NOT NULL REFERENCES "django_content_type" ("id") , "codename" varchar(100) NOT NULL, "name" varchar(255) NOT NULL)

CREATE TABLE "auth_group_permissions" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "group_id" integer NOT NULL REFERENCES "auth_group" ("id") , "permission_id" integer NOT NULL REFERENCES "auth_permission" ("id") )

CREATE TABLE "auth_user" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "password" varchar(128) NOT NULL, "last_login" datetime NULL, "is_superuser" BIT NOT NULL, "username" varchar(150) NOT NULL UNIQUE, "last_name" varchar(150) NOT NULL, "email" varchar(254) NOT NULL, "is_staff" BIT NOT NULL, "is_active" BIT NOT NULL, "date_joined" datetime NOT NULL, "first_name" varchar(150) NOT NULL)

CREATE TABLE "auth_user_groups" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "user_id" integer NOT NULL REFERENCES "auth_user" ("id") , "group_id" integer NOT NULL REFERENCES "auth_group" ("id") )

CREATE TABLE "auth_user_user_permissions" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "user_id" integer NOT NULL REFERENCES "auth_user" ("id") , "permission_id" integer NOT NULL REFERENCES "auth_permission" ("id") )

CREATE TABLE "django_admin_log" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "action_time" datetime NOT NULL, "object_id" text NULL, "object_repr" varchar(200) NOT NULL, "change_message" text NOT NULL, "content_type_id" integer NULL REFERENCES "django_content_type" ("id") , "user_id" integer NOT NULL REFERENCES "auth_user" ("id") , "action_flag" smallint NOT NULL CHECK ("action_flag" >= 0))

CREATE TABLE "django_migrations" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "app" varchar(255) NOT NULL, "name" varchar(255) NOT NULL, "applied" datetime NOT NULL)

CREATE TABLE "django_session" ("session_key" varchar(40) NOT NULL PRIMARY KEY, "session_data" text NOT NULL, "expire_date" datetime NOT NULL)

CREATE TABLE "product_product" ("id" integer NOT NULL PRIMARY KEY IDENTITY, "name" varchar(100) NOT NULL, "description" text NOT NULL, "condition" varchar(100) NOT NULL, "price" decimal NOT NULL, "created" datetime NOT NULL)


/*Index*/

CREATE INDEX "auth_group_permissions_group_id_b120cbf9" ON "auth_group_permissions" ("group_id")

CREATE UNIQUE INDEX "auth_group_permissions_group_id_permission_id_0cd325b0_uniq" ON "auth_group_permissions" ("group_id", "permission_id")

CREATE INDEX "auth_group_permissions_permission_id_84c5c92e" ON "auth_group_permissions" ("permission_id")

CREATE INDEX "auth_permission_content_type_id_2f476e4b" ON "auth_permission" ("content_type_id")

CREATE UNIQUE INDEX "auth_permission_content_type_id_codename_01ab375a_uniq" ON "auth_permission" ("content_type_id", "codename")

CREATE INDEX "auth_user_groups_group_id_97559544" ON "auth_user_groups" ("group_id")

CREATE INDEX "auth_user_groups_user_id_6a12ed8b" ON "auth_user_groups" ("user_id")

CREATE UNIQUE INDEX "auth_user_groups_user_id_group_id_94350c0c_uniq" ON "auth_user_groups" ("user_id", "group_id")

CREATE INDEX "auth_user_user_permissions_permission_id_1fbb5f2c" ON "auth_user_user_permissions" ("permission_id")

CREATE INDEX "auth_user_user_permissions_user_id_a95ead1b" ON "auth_user_user_permissions" ("user_id")

CREATE UNIQUE INDEX "auth_user_user_permissions_user_id_permission_id_14a6b632_uniq" ON "auth_user_user_permissions" ("user_id", "permission_id")

CREATE INDEX "django_admin_log_content_type_id_c4bce8eb" ON "django_admin_log" ("content_type_id")

CREATE INDEX "django_admin_log_user_id_c564eba6" ON "django_admin_log" ("user_id")

CREATE UNIQUE INDEX "django_content_type_app_label_model_76bd3d3b_uniq" ON "django_content_type" ("app_label", "model")

CREATE INDEX "django_session_expire_date_a5c62663" ON "django_session" ("expire_date");