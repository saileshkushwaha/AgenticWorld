# Data Model - SupplementStore

**Created**: 2026-08-31 | **Status**: Complete | **Version**: 1.0

---

## 1. Entity-Relationship Diagram

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│    USERS     │       │   PRODUCTS   │       │   ORDERS     │
├──────────────┤       ├──────────────┤       ├──────────────┤
│ id (PK)      │       │ id (PK)      │       │ id (PK)      │
│ email        │       │ name         │       │ user_id (FK) │
│ password     │       │ slug         │       │ status       │
│ first_name   │       │ description  │       │ total        │
│ last_name    │       │ price        │       │ created_at   │
│ avatar       │       │ sale_price   │       │ updated_at   │
│ role         │       │ category_id  │       └──────┬───────┘
│ created_at   │       │ brand        │              │
│ updated_at   │       │ image_url    │              │
└──────┬───────┘       │ gallery      │              │
       │               │ ingredients  │              │
       │               │ nutrition    │              │
       │               │ dosage       │              │
       │               │ stock        │              │
       │               │ rating       │              │
       │               │ review_count │              │
       │               │ is_active    │              │
       │               │ created_at   │              │
       │               │ updated_at   │              │
       │               └──────┬───────┘              │
       │                      │                      │
       │                      │                      │
       ▼                      ▼                      ▼
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│   REVIEWS    │       │   CATEGORIES │       │ORDER_ITEMS   │
├──────────────┤       ├──────────────┤       ├──────────────┤
│ id (PK)      │       │ id (PK)      │       │ id (PK)      │
│ user_id (FK) │       │ name         │       │ order_id(FK) │
│ product_id(FK)│      │ slug         │       │ product_id   │
│ rating       │       │ description  │       │ quantity     │
│ title        │       │ image_url    │       │ price        │
│ comment      │       │ parent_id    │       │ created_at   │
│ is_verified  │       │ is_active    │       └──────────────┘
│ created_at   │       │ created_at   │
│ updated_at   │       └──────────────┘
└──────────────┘

┌──────────────┐       ┌──────────────┐
│  CART_ITEMS  │       │  WISHLIST    │
├──────────────┤       ├──────────────┤
│ id (PK)      │       │ id (PK)      │
│ user_id (FK) │       │ user_id (FK) │
│ product_id(FK)│      │ product_id(FK)│
│ quantity     │       │ created_at   │
│ created_at   │       └──────────────┘
│ updated_at   │
└──────────────┘
```

---

## 2. Entity Definitions

### 2.1 Users

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK, auto-generated | Unique identifier |
| email | VARCHAR(255) | UNIQUE, NOT NULL | User email |
| password | VARCHAR(255) | NOT NULL | Hashed password |
| first_name | VARCHAR(100) | NOT NULL | First name |
| last_name | VARCHAR(100) | NOT NULL | Last name |
| avatar | VARCHAR(500) | NULLABLE | Avatar URL |
| role | ENUM('user','admin') | DEFAULT 'user' | User role |
| is_active | BOOLEAN | DEFAULT true | Account status |
| created_at | TIMESTAMP | auto-generated | Creation date |
| updated_at | TIMESTAMP | auto-generated | Last update |

### 2.2 Products

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK, auto-generated | Unique identifier |
| name | VARCHAR(255) | NOT NULL | Product name |
| slug | VARCHAR(255) | UNIQUE, NOT NULL | URL slug |
| description | TEXT | NOT NULL | Product description |
| price | DECIMAL(10,2) | NOT NULL | Regular price |
| sale_price | DECIMAL(10,2) | NULLABLE | Sale price |
| category_id | UUID | FK → categories | Category |
| brand | VARCHAR(100) | NOT NULL | Brand name |
| image_url | VARCHAR(500) | NOT NULL | Main image |
 | gallery | JSONB | NULLABLE | Image gallery |
| ingredients | TEXT | NOT NULL | Ingredients list |
| nutrition | JSONB | NULLABLE | Nutrition facts |
| dosage | VARCHAR(255) | NULLABLE | Dosage instructions |
| certifications | JSONB | NULLABLE | Certifications |
| stock | INTEGER | DEFAULT 0 | Stock quantity |
| rating | DECIMAL(3,2) | DEFAULT 0 | Average rating |
| review_count | INTEGER | DEFAULT 0 | Review count |
| is_active | BOOLEAN | DEFAULT true | Product status |
| created_at | TIMESTAMP | auto-generated | Creation date |
| updated_at | TIMESTAMP | auto-generated | Last update |

### 2.3 Categories

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK, auto-generated | Unique identifier |
| name | VARCHAR(100) | NOT NULL | Category name |
| slug | VARCHAR(100) | UNIQUE, NOT NULL | URL slug |
| description | TEXT | NULLABLE | Description |
| image_url | VARCHAR(500) | NULLABLE | Category image |
| parent_id | UUID | FK → categories, NULLABLE | Parent category |
| is_active | BOOLEAN | DEFAULT true | Category status |
| created_at | TIMESTAMP | auto-generated | Creation date |

### 2.4 Orders

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK, auto-generated | Unique identifier |
| user_id | UUID | FK → users | Customer |
| status | ENUM('pending','processing','shipped','delivered','cancelled') | DEFAULT 'pending' | Order status |
| total | DECIMAL(10,2) | NOT NULL | Order total |
| shipping_address | JSONB | NOT NULL | Shipping address |
| billing_address | JSONB | NOT NULL | Billing address |
| payment_method | VARCHAR(50) | NOT NULL | Payment method |
| payment_status | ENUM('pending','paid','failed','refunded') | DEFAULT 'pending' | Payment status |
| tracking_number | VARCHAR(100) | NULLABLE | Tracking number |
| notes | TEXT | NULLABLE | Order notes |
| created_at | TIMESTAMP | auto-generated | Creation date |
| updated_at | TIMESTAMP | auto-generated | Last update |

### 2.5 Order Items

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK, auto-generated | Unique identifier |
| order_id | UUID | FK → orders | Order |
| product_id | UUID | FK → products | Product |
| quantity | INTEGER | NOT NULL | Quantity |
| price | DECIMAL(10,2) | NOT NULL | Price at purchase |
| created_at | TIMESTAMP | auto-generated | Creation date |

### 2.6 Reviews

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK, auto-generated | Unique identifier |
| user_id | UUID | FK → users | Reviewer |
| product_id | UUID | FK → products | Product |
| rating | INTEGER | CHECK (1-5) | Rating (1-5) |
| title | VARCHAR(255) | NOT NULL | Review title |
| comment | TEXT | NOT NULL | Review text |
| is_verified | BOOLEAN | DEFAULT false | Verified purchase |
| created_at | TIMESTAMP | auto-generated | Creation date |
| updated_at | TIMESTAMP | auto-generated | Last update |

### 2.7 Cart Items

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK, auto-generated | Unique identifier |
| user_id | UUID | FK → users | User |
| product_id | UUID | FK → products | Product |
| quantity | INTEGER | NOT NULL, CHECK > 0 | Quantity |
| created_at | TIMESTAMP | auto-generated | Creation date |
| updated_at | TIMESTAMP | auto-generated | Last update |

### 2.8 Wishlist

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | PK, auto-generated | Unique identifier |
| user_id | UUID | FK → users | User |
| product_id | UUID | FK → products | Product |
| created_at | TIMESTAMP | auto-generated | Creation date |

---

## 3. Relationships

| Relationship | Type | Description |
|-------------|------|-------------|
| Users → Orders | 1:N | A user can have many orders |
| Users → Reviews | 1:N | A user can write many reviews |
| Users → Cart Items | 1:N | A user can have many cart items |
| Users → Wishlist | 1:N | A user can have many wishlist items |
| Products → Orders | N:M | Through order_items |
| Products → Reviews | 1:N | A product can have many reviews |
| Products → Cart Items | 1:N | A product can be in many carts |
| Products → Wishlist | 1:N | A product can be in many wishlists |
| Products → Categories | N:1 | A product belongs to one category |
| Categories → Categories | 1:N | Self-referencing (subcategories) |
| Orders → Order Items | 1:N | An order has many items |

---

## 4. Indexes

| Table | Index | Type | Purpose |
|-------|-------|------|---------|
| users | email | UNIQUE | Fast lookup by email |
| products | slug | UNIQUE | Fast lookup by slug |
| products | category_id | INDEX | Filter by category |
| products | brand | INDEX | Filter by brand |
| products | price | INDEX | Sort by price |
| orders | user_id | INDEX | Filter by user |
| orders | status | INDEX | Filter by status |
| reviews | product_id | INDEX | Filter by product |
| reviews | user_id | INDEX | Filter by user |
| cart_items | user_id | INDEX | Filter by user |

---

## 5. Data Validation Rules

| Entity | Rule | Implementation |
|--------|------|----------------|
| Users | Email format | Zod email validation |
| Users | Password strength | Min 8 chars, uppercase, number |
| Products | Price > 0 | Zod positive number |
| Products | Stock >= 0 | Zod non-negative integer |
| Reviews | Rating 1-5 | Zod min(1) max(5) |
| Orders | Total > 0 | Zod positive number |
| Cart Items | Quantity > 0 | Zod positive integer |

---

**Document Control**
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-08-31 | Forge Framework | Initial data model |
