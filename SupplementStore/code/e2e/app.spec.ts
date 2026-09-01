import { test, expect } from '@playwright/test'

test.describe('HomePage', () => {
  test('should display hero section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Fuel Your')
    await expect(page.locator('section').first().locator('p').first()).toBeVisible()
  })

  test('should display featured products', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Featured Products')).toBeVisible()
    await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible({ timeout: 10000 })
  })

  test('should display categories section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Shop by Category')).toBeVisible()
    await expect(page.getByText('Proteins')).toBeVisible()
    await expect(page.getByText('Pre-Workout')).toBeVisible()
  })

  test('should navigate to products page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=View All')
    await expect(page).toHaveURL(/\/products/)
  })

  test('should navigate to category page', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Proteins')
    await expect(page).toHaveURL(/\/category\/proteins/)
  })
})

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/')
    
    await page.click('text=Products')
    await expect(page).toHaveURL(/\/products/)
    
    await page.click('text=About')
    await expect(page).toHaveURL(/\/about/)
    
    await page.click('text=Contact')
    await expect(page).toHaveURL(/\/contact/)
    
    await page.click('text=FAQ')
    await expect(page).toHaveURL(/\/faq/)
  })

  test('should navigate to cart page', async ({ page }) => {
    await page.goto('/')
    await page.click('[data-testid="cart-link"]')
    await expect(page).toHaveURL(/\/cart/)
  })

  test('should open auth modal', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Sign In')
    await expect(page.locator('[data-testid="auth-modal"]')).toBeVisible()
  })
})

test.describe('ProductsPage', () => {
  test('should display products grid', async ({ page }) => {
    await page.goto('/#/products')
    await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible({ timeout: 10000 })
  })

  test('should filter products by category', async ({ page }) => {
    await page.goto('/#/products')
    await page.locator('select').first().selectOption('proteins')
    await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible({ timeout: 10000 })
  })

  test('should search products', async ({ page }) => {
    await page.goto('/#/products')
    await page.fill('input[placeholder="Search products..."]', 'whey')
    await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible({ timeout: 10000 })
  })

  test('should sort products', async ({ page }) => {
    await page.goto('/#/products')
    await page.locator('select').nth(1).selectOption('price')
    await expect(page.locator('[data-testid="product-card"]').first()).toBeVisible({ timeout: 10000 })
  })

  test('should navigate to product detail', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await expect(page).toHaveURL(/\/products\//)
  })
})

test.describe('ProductDetailPage', () => {
  test('should display product details', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.getByText('Add to Cart')).toBeVisible()
  })

  test('should add product to cart', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await page.click('text=Add to Cart')
    await expect(page.locator('text=added to cart')).toBeVisible()
  })

  test('should change quantity', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await page.click('[data-testid="quantity-increase"]')
    await expect(page.locator('[data-testid="quantity-value"]')).toHaveText('2')
  })

  test('should display related products', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await expect(page.getByText('Related Products')).toBeVisible({ timeout: 10000 })
  })
})

test.describe('CartPage', () => {
  test('should display empty cart message', async ({ page }) => {
    await page.goto('/#/cart')
    await expect(page.getByText('Your Cart is Empty')).toBeVisible()
  })

  test('should add item and display in cart', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await page.click('text=Add to Cart')
    await page.goto('/#/cart')
    await expect(page.locator('[data-testid="cart-item"]')).toBeVisible()
  })

  test('should remove item from cart', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await page.click('text=Add to Cart')
    await page.goto('/#/cart')
    await page.click('[data-testid="remove-item"]')
    await expect(page.getByText('Your Cart is Empty')).toBeVisible()
  })

  test('should proceed to checkout', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await page.click('text=Add to Cart')
    await page.goto('/#/cart')
    await page.click('text=Proceed to Checkout')
    await expect(page).toHaveURL(/\/checkout/)
  })
})

test.describe('CheckoutPage', () => {
  test('should require login for checkout', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await page.click('text=Add to Cart')
    await page.goto('/#/checkout')
    await expect(page.getByText('Please Log In')).toBeVisible()
  })

  test('should complete checkout flow', async ({ page }) => {
    await page.goto('/#/')
    await page.click('text=Sign In')
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', 'password123')
    await page.click('button:has-text("Sign In")')
    await expect(page.locator('text=Welcome back')).toBeVisible()
    
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await page.click('text=Add to Cart')
    await page.goto('/#/checkout')
    
    await page.fill('input[name="firstName"]', 'John')
    await page.fill('input[name="lastName"]', 'Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('input[name="phone"]', '1234567890')
    await page.fill('input[name="address"]', '123 Main St')
    await page.fill('input[name="city"]', 'New York')
    await page.fill('input[name="state"]', 'NY')
    await page.fill('input[name="zip"]', '10001')
    await page.click('text=Continue to Payment')
    
    await page.fill('input[name="cardNumber"]', '4242424242424242')
    await page.fill('input[name="expiry"]', '12/25')
    await page.fill('input[name="cvc"]', '123')
    await page.fill('input[name="cardName"]', 'John Doe')
    await page.click('text=Place Order')
    
    await expect(page.getByText('Order Placed Successfully')).toBeVisible()
  })
})

test.describe('Authentication', () => {
  test('should open auth modal', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Sign In')
    await expect(page.locator('[data-testid="auth-modal"]')).toBeVisible()
  })

  test('should login successfully', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Sign In')
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', 'password123')
    await page.click('button:has-text("Sign In")')
    await expect(page.locator('text=Welcome back')).toBeVisible()
  })

  test('should register new account', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Sign In')
    await page.click('text=Sign Up')
    await page.fill('input[name="firstName"]', 'John')
    await page.fill('input[name="lastName"]', 'Doe')
    await page.fill('input[type="email"]', 'john@example.com')
    await page.fill('input[type="password"]', 'password123')
    await page.fill('input[name="confirmPassword"]', 'password123')
    await page.click('button:has-text("Create Account")')
    await expect(page.locator('text=Account created successfully')).toBeVisible()
  })

  test('should logout successfully', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Sign In')
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', 'password123')
    await page.click('button:has-text("Sign In")')
    await expect(page.locator('text=Welcome back')).toBeVisible()
    
    await page.hover('[data-testid="user-menu"]')
    await page.click('text=Sign Out')
    await expect(page.locator('text=Sign In')).toBeVisible()
  })
})

test.describe('Wishlist', () => {
  test('should require login to add to wishlist', async ({ page }) => {
    await page.goto('/#/products')
    await page.click('[data-testid="wishlist-button"] >> nth=0')
    await expect(page.locator('text=Please log in')).toBeVisible()
  })

  test('should add to wishlist when logged in', async ({ page }) => {
    await page.goto('/')
    await page.click('text=Sign In')
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', 'password123')
    await page.click('button:has-text("Sign In")')
    
    await page.goto('/#/products')
    await page.click('[data-testid="wishlist-button"] >> nth=0')
    await expect(page.locator('text=added to wishlist')).toBeVisible()
  })
})

test.describe('Static Pages', () => {
  test('should display About page', async ({ page }) => {
    await page.goto('/#/about')
    await expect(page.getByText('About SupplementStore')).toBeVisible()
  })

  test('should display Contact page', async ({ page }) => {
    await page.goto('/#/contact')
    await expect(page.getByText('Contact Us')).toBeVisible()
  })

  test('should display FAQ page', async ({ page }) => {
    await page.goto('/#/faq')
    await expect(page.getByText('Frequently Asked Questions')).toBeVisible()
  })

  test('should display Privacy Policy page', async ({ page }) => {
    await page.goto('/#/privacy')
    await expect(page.getByText('Privacy Policy')).toBeVisible()
  })

  test('should display Terms page', async ({ page }) => {
    await page.goto('/#/terms')
    await expect(page.getByText('Terms of Service')).toBeVisible()
  })

  test('should display 404 page for unknown routes', async ({ page }) => {
    await page.goto('/#/nonexistent-page')
    await expect(page.locator('text=404')).toBeVisible()
    await expect(page.getByText('Page Not Found')).toBeVisible()
  })
})

test.describe('Search', () => {
  test('should open search bar', async ({ page }) => {
    await page.goto('/')
    await page.click('[data-testid="search-button"]')
    await expect(page.locator('input[placeholder="Search products..."]')).toBeVisible()
  })

  test('should navigate to search results', async ({ page }) => {
    await page.goto('/')
    await page.click('[data-testid="search-button"]')
    await page.fill('input[placeholder="Search products..."]', 'protein')
    await page.press('input[placeholder="Search products..."]', 'Enter')
    await expect(page).toHaveURL(/\/products/)
  })
})

test.describe('Coupons', () => {
  test('should apply valid coupon', async ({ page }) => {
    await page.goto('/#/')
    await page.click('text=Sign In')
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('input[type="password"]', 'password123')
    await page.click('button:has-text("Sign In")')
    
    await page.goto('/#/products')
    await page.click('[data-testid="product-card"] >> nth=0')
    await page.click('text=Add to Cart')
    await page.goto('/#/checkout')
    
    await page.fill('input[placeholder="Enter coupon code"]', 'WELCOME10')
    await page.click('text=Apply')
    await expect(page.locator('text=applied')).toBeVisible()
  })
})

test.describe('Mobile Responsiveness', () => {
  test('should display mobile menu', async ({ page }) => {
    await page.goto('/')
    await page.click('[data-testid="mobile-menu-button"]')
    await expect(page.locator('text=Home')).toBeVisible()
  })

  test('should work on mobile viewport', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.getByText('Featured Products')).toBeVisible()
  })
})
