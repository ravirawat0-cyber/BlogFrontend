import { Component } from '@angular/core';
import {marked} from "marked";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  markdownString : string = "# E-commerce Project Documentation\n" +
    "\n" +
    "## Table of Contents\n" +
    "\n" +
    "1. [Introduction](#introduction)\n" +
    "2. [Technologies Used](#technologies-used)\n" +
    "3. [Project Structure](#project-structure)\n" +
    "4. [API Documentation](#api-documentation)\n" +
    "   - [Account Controller](#account-controller)\n" +
    "   - [Cart Controller](#cart-controller)\n" +
    "   - [Category Controller](#category-controller)\n" +
    "   - [Upload Controller](#upload-controller)\n" +
    "   - [Order Controller](#order-controller)\n" +
    "   - [Product Controller](#product-controller)\n" +
    "   - [Review Controller](#review-controller)\n" +
    "   - [SubCategory Controller](#subcategory-controller)\n" +
    "   - [Wishlist Controller](#wishlist-controller)\n" +
    "5. [Authentication & Authorization](#authentication--authorization)\n" +
    "6. [Database Schema](#database-schema)\n" +
    "7. [Deployment](#deployment)\n" +
    "8. [Contributing](#contributing)\n" +
    "9. [License](#license)\n" +
    "\n" +
    "## Introduction\n" +
    "\n" +
    "This project is a comprehensive e-commerce platform built with ASP.NET Core Web APIs, Angular for the frontend, MySQL as the database, and integrates various third-party services like Stripe for payments, Azure for deployment, and Google Cloud Storage for file uploads.\n" +
    "\n" +
    "## Technologies Used\n" +
    "\n" +
    "- **Backend:** ASP.NET Core, Dapper\n" +
    "- **Frontend:** Angular\n" +
    "- **Database:** MySQL\n" +
    "- **Payment Processing:** Stripe\n" +
    "- **Cloud Storage:** Google Cloud Storage\n" +
    "- **Deployment:** Azure\n" +
    "- **API Documentation:** Swagger\n" +
    "\n" +
    "## Project Structure\n" +
    "\n" +
    "```plaintext\n" +
    "EcommerceBackend/\n" +
    "├── Controllers/\n" +
    "│   ├── AccountController.cs\n" +
    "│   ├── CartController.cs\n" +
    "│   ├── CategoryController.cs\n" +
    "│   ├── UploadController.cs\n" +
    "│   ├── OrderController.cs\n" +
    "│   ├── ProductController.cs\n" +
    "│   ├── ReviewController.cs\n" +
    "│   ├── SubCategoryController.cs\n" +
    "│   └── WishlistController.cs\n" +
    "├── Models/\n" +
    "│   ├── DBModels/\n" +
    "│   ├── Request/\n" +
    "├── Services/\n" +
    "│   ├── Interfaces/\n" +
    "│   └──Business Logic Implementations/\n" +
    "├── Repository/\n" +
    "│   ├── Interfaces/\n" +
    "│   └── Databae Query Implementations/\n" +
    "├── Helper/\n" +
    "├── Enums/\n" +
    "├── CustomMiddleware/\n" +
    "         ├── ExceptionHandlingMiddleware\n" +
    "├── Program.cs\n" +
    "├── DbContext.cs\n" +
    "└── appsettings.json\n" +
    "```\n" +
    "\n" +
    "## API Documentation\n" +
    "\n" +
    "### Account Controller\n" +
    "\n" +
    "Handles user registration, login, user details retrieval and update, password management, and purchase processing.\n" +
    "\n" +
    "- **Route:** `/Account`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `POST /register` - Register a new user\n" +
    "- `POST /login` - User login\n" +
    "- `GET /` - Get user details (requires authorization)\n" +
    "- `PUT /update` - Update user details (requires authorization)\n" +
    "- `POST /forgot-password` - Forgot password\n" +
    "- `GET /purchase/{uuid}` - Purchase items in the cart (requires authorization)\n" +
    "- `POST /webhook` - Stripe webhook to handle payment events\n" +
    "- `PUT /update-password` - Update password\n" +
    "\n" +
    "### Cart Controller\n" +
    "\n" +
    "Handles operations related to the shopping cart.\n" +
    "\n" +
    "- **Route:** `/Cart`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `POST /add` - Add item to cart (requires authorization)\n" +
    "- `PUT /` - Update cart (requires authorization)\n" +
    "- `DELETE /{productId:int}` - Delete cart item (requires authorization)\n" +
    "- `DELETE /deletecart` - Delete entire cart (requires authorization)\n" +
    "\n" +
    "### Category Controller\n" +
    "\n" +
    "Manages product categories.\n" +
    "\n" +
    "- **Route:** `/Category`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `POST /add` - Create a new category\n" +
    "- `GET /` - Get all categories\n" +
    "- `GET /data` - Get categories with subcategories\n" +
    "- `DELETE /{id:int}` - Delete a category\n" +
    "\n" +
    "### Upload Controller\n" +
    "\n" +
    "Handles image uploads to Google Cloud Storage.\n" +
    "\n" +
    "- **Route:** `/Upload`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `POST /` - Upload an image\n" +
    "\n" +
    "### Order Controller\n" +
    "\n" +
    "Handles user orders.\n" +
    "\n" +
    "- **Route:** `/Order`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `GET /all` - Get all orders for the authenticated user\n" +
    "- `GET /transactionId/{id}` - Get order details by transaction ID\n" +
    "\n" +
    "### Product Controller\n" +
    "\n" +
    "Manages products.\n" +
    "\n" +
    "- **Route:** `/Product`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `POST /add` - Create a new product\n" +
    "- `GET /` - Get all products\n" +
    "- `GET /subcategory/{id}` - Get products by subcategory ID\n" +
    "- `GET /{id}` - Get product by ID\n" +
    "- `DELETE /{id}` - Delete a product\n" +
    "\n" +
    "### Review Controller\n" +
    "\n" +
    "Handles product reviews.\n" +
    "\n" +
    "- **Route:** `/Review`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `POST /add` - Add a review (requires authorization)\n" +
    "- `GET /product/{id}` - Get reviews for a product\n" +
    "- `GET /User/product/{id}` - Get user's review for a product (requires authorization)\n" +
    "- `PUT /update` - Update a review (requires authorization)\n" +
    "- `DELETE /product/{productId:int}` - Delete a review (requires authorization)\n" +
    "\n" +
    "### SubCategory Controller\n" +
    "\n" +
    "Manages product subcategories.\n" +
    "\n" +
    "- **Route:** `/SubCategory`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `POST /add` - Create a new subcategory\n" +
    "- `GET /` - Get all subcategories\n" +
    "- `GET /parentCategory/{id}` - Get subcategories by parent category ID\n" +
    "- `DELETE /{id:int}` - Delete a subcategory\n" +
    "\n" +
    "### Wishlist Controller\n" +
    "\n" +
    "Handles wishlist operations.\n" +
    "\n" +
    "- **Route:** `/Wishlist`\n" +
    "  \n" +
    "#### Endpoints:\n" +
    "\n" +
    "- `POST /add` - Add item to wishlist (requires authorization)\n" +
    "- `DELETE /{productId:int}` - Remove item from wishlist (requires authorization)\n" +
    "\n" +
    "## Authentication & Authorization\n" +
    "\n" +
    "Authentication and authorization are implemented using JWT tokens. Protected routes require a valid JWT token in the `Authorization` header. The token includes user claims that are used to identify and authorize users for specific actions.\n" +
    "\n" +
    "## Database Schema\n" +
    "\n" +
    "The database schema includes tables for users, products, categories, subcategories, orders, cart items, and reviews. Here is a high-level overview:\n" +
    "\n" +
    "- **Users:** Stores user information\n" +
    "- **Products:** Stores product details\n" +
    "- **Categories:** Stores product categories\n" +
    "- **SubCategories:** Stores subcategories linked to categories\n" +
    "- **Orders:** Stores order information\n" +
    "- **CartItems:** Stores items added to the cart by users\n" +
    "- **Reviews:** Stores user reviews for products\n" +
    "\n" +
    "## Deployment\n" +
    "\n" +
    "The project is deployed on Azure. Below are the deployment steps:\n" +
    "\n" +
    "1. **Build the project:** \n" +
    "    ```sh\n" +
    "    dotnet build\n" +
    "    ```\n" +
    "\n" +
    "2. **Publish the project:**\n" +
    "    ```sh\n" +
    "    dotnet publish --configuration Release\n" +
    "    ```\n" +
    "\n" +
    "3. **Deploy to Azure:**\n" +
    "    - Use Azure Portal or Azure CLI to create an App Service.\n" +
    "    - Deploy the published files to the App Service.\n" +
    "\n" +
    "4. **Configure environment variables:**\n" +
    "    - Set the required environment variables like connection strings, API keys, etc., in the Azure App Service configuration settings.\n"


  htmlContent: string | Promise<string>;
  constructor() {
    this.htmlContent = marked(this.markdownString);
  }
}
