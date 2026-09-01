# API Specification - SupplementStore

**Created**: 2026-08-31 | **Status**: Complete | **Version**: 1.0

---

## 1. API Overview

### Base URL
```
Production: https://api.supplementstore.com/v1
Development: http://localhost:3001/v1
```

### Authentication
All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

### Response Format
All responses follow the standard format:
```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### Error Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      { "field": "email", "message": "Invalid email" }
    ]
  }
}
```

---

## 2. Authentication Endpoints

### POST /auth/register
Register a new user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "user"
    },
    "token": "jwt_token"
  }
}
```

### POST /auth/login
Authenticate a user.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": { "id": "uuid", "email": "user@example.com", ... },
    "token": "jwt_token",
    "refreshToken": "refresh_token"
  }
}
```

### POST /auth/logout
Logout current user.

**Headers:** Authorization: Bearer {token}

**Response:**
```json
{ "success": true, "message": "Logged out successfully" }
```

### GET /auth/me
Get current user profile.

**Headers:** Authorization: Bearer {token}

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "avatar": "url",
    "role": "user"
  }
}
```

---

## 3. Product Endpoints

### GET /products
List products with filtering and pagination.

**Query Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| page | number | Page number (default: 1) |
| limit | number | Items per page (default: 20) |
| category | string | Filter by category slug |
| brand | string | Filter by brand |
| minPrice | number | Minimum price |
| maxPrice | number | Maximum price |
| search | string | Search term |
| sort | string | Sort field (price, rating, created) |
| order | string | Sort order (asc, desc) |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Whey Protein",
      "slug": "whey-protein",
      "price": 49.99,
      "salePrice": 39.99,
      "imageUrl": "url",
      "rating": 4.5,
      "reviewCount": 128,
      "brand": "BrandX",
      "category": "Proteins"
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 100 }
}
```

### GET /products/:id
Get product details.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Whey Protein",
    "slug": "whey-protein",
    "description": "...",
    "price": 49.99,
    "salePrice": 39.99,
    "imageUrl": "url",
    "gallery": ["url1", "url2"],
    "ingredients": "...",
    "nutrition": { "protein": 25, "carbs": 3, "fat": 1 },
    "dosage": "1 scoop per day",
    "certifications": ["GMP", "Informed Sport"],
    "stock": 100,
    "rating": 4.5,
    "reviewCount": 128,
    "brand": "BrandX",
    "category": { "id": "uuid", "name": "Proteins" }
  }
}
```

### GET /products/search
Search products with autocomplete.

**Query Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| q | string | Search query |
| limit | number | Max results (default: 10) |

**Response:**
```json
{
  "success": true,
  "data": [
    { "id": "uuid", "name": "Whey Protein", "slug": "whey-protein" }
  ]
}
```

---

## 4. Cart Endpoints

### GET /cart
Get user's cart.

**Headers:** Authorization: Bearer {token}

**Response:**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "uuid",
        "product": { "id": "uuid", "name": "Whey Protein", "price": 49.99 },
        "quantity": 2,
        "subtotal": 99.98
      }
    ],
    "total": 99.98,
    "itemCount": 2
  }
}
```

### POST /cart/items
Add item to cart.

**Headers:** Authorization: Bearer {token}

**Request:**
```json
{
  "productId": "uuid",
  "quantity": 1
}
```

### PUT /cart/items/:id
Update cart item quantity.

**Headers:** Authorization: Bearer {token}

**Request:**
```json
{ "quantity": 2 }
```

### DELETE /cart/items/:id
Remove item from cart.

**Headers:** Authorization: Bearer {token}

---

## 5. Order Endpoints

### GET /orders
List user's orders.

**Headers:** Authorization: Bearer {token}

**Query Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| page | number | Page number |
| limit | number | Items per page |
| status | string | Filter by status |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "status": "delivered",
      "total": 99.98,
      "itemCount": 2,
      "createdAt": "2026-08-31T10:00:00Z"
    }
  ],
  "meta": { "page": 1, "limit": 10, "total": 5 }
}
```

### GET /orders/:id
Get order details.

**Headers:** Authorization: Bearer {token}

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "status": "delivered",
    "total": 99.98,
    "shippingAddress": { ... },
    "billingAddress": { ... },
    "paymentMethod": "card",
    "paymentStatus": "paid",
    "trackingNumber": "TRACK123",
    "items": [
      {
        "product": { "id": "uuid", "name": "Whey Protein" },
        "quantity": 2,
        "price": 49.99
      }
    ],
    "createdAt": "2026-08-31T10:00:00Z"
  }
}
```

### POST /orders
Create a new order.

**Headers:** Authorization: Bearer {token}

**Request:**
```json
{
  "shippingAddress": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip": "10001",
    "country": "US"
  },
  "billingAddress": { ... },
  "paymentMethod": "card"
}
```

---

## 6. Review Endpoints

### GET /reviews/product/:productId
Get product reviews.

**Query Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| page | number | Page number |
| limit | number | Items per page |
| rating | number | Filter by rating |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "user": { "id": "uuid", "firstName": "John", "lastName": "D." },
      "rating": 5,
      "title": "Great product!",
      "comment": "...",
      "isVerified": true,
      "createdAt": "2026-08-31T10:00:00Z"
    }
  ],
  "meta": { "page": 1, "limit": 10, "total": 50 }
}
```

### POST /reviews
Create a review.

**Headers:** Authorization: Bearer {token}

**Request:**
```json
{
  "productId": "uuid",
  "rating": 5,
  "title": "Great product!",
  "comment": "..."
}
```

---

## 7. Category Endpoints

### GET /categories
List all categories.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Proteins",
      "slug": "proteins",
      "description": "Protein supplements",
      "imageUrl": "url",
      "productCount": 50
    }
  ]
}
```

### GET /categories/:slug
Get category details with products.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Proteins",
    "slug": "proteins",
    "description": "...",
    "products": [...]
  }
}
```

---

## 8. Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| VALIDATION_ERROR | 400 | Input validation failed |
| UNAUTHORIZED | 401 | Authentication required |
| FORBIDDEN | 403 | Insufficient permissions |
| NOT_FOUND | 404 | Resource not found |
| CONFLICT | 409 | Resource already exists |
| RATE_LIMITED | 429 | Too many requests |
| INTERNAL_ERROR | 500 | Internal server error |

---

## 9. Rate Limiting

| Endpoint | Limit | Window |
|----------|-------|--------|
| All endpoints | 100 requests | 1 minute |
| Auth endpoints | 5 requests | 15 minutes |
| Search | 30 requests | 1 minute |

---

**Document Control**
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-08-31 | Forge Framework | Initial API specification |
