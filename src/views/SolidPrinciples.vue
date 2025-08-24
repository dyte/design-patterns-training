<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">SOLID Principles</h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        The SOLID principles are five design principles intended to make
        software designs more understandable, flexible, and maintainable. They
        form the foundation of clean, well-structured object-oriented code.
      </p>
    </div>

    <!-- Navigation Breadcrumb -->
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <router-link
            to="/"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Home
          </router-link>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">
              SOLID Principles
            </span>
          </div>
        </li>
      </ol>
    </nav>

    <!-- Principles Overview -->
    <div class="grid md:grid-cols-1 gap-6">
      <!-- Single Responsibility Principle -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <span class="text-blue-600 font-bold text-lg">S</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              Single Responsibility Principle (SRP)
            </h3>
            <p class="text-gray-600 mb-4">
              A class should have only one reason to change, meaning it should
              have only one job or responsibility. Each class should focus on a
              single concern and do it well.
            </p>

            <!-- Definition -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">Key Concepts</h4>
              <div class="bg-blue-50 p-4 rounded-lg">
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 font-bold">•</span>
                    <span
                      ><strong>One Reason to Change:</strong> If you can think
                      of more than one motive for changing a class, it has more
                      than one responsibility.</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 font-bold">•</span>
                    <span
                      ><strong>High Cohesion:</strong> All methods and
                      properties should be highly related to the single
                      purpose.</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-blue-600 font-bold">•</span>
                    <span
                      ><strong>Separation of Concerns:</strong> Different
                      concerns should be separated into different classes.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Bad Example -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">❌ Violation Example</h4>
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <pre
                  class="text-sm text-gray-800 overflow-x-auto"
                ><code>// ❌ BAD: Multiple responsibilities in one class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // User data management
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  // Email functionality - DIFFERENT RESPONSIBILITY!
  sendWelcomeEmail() {
    console.log(\`Sending email to \${this.email}\`);
    // Email sending logic...
  }

  // Database operations - ANOTHER RESPONSIBILITY!
  save() {
    console.log('Saving user to database...');
    // Database saving logic...
  }

  // Validation logic - YET ANOTHER RESPONSIBILITY!
  validateEmail() {
    return this.email.includes('@');
  }
}</code></pre>
                <p class="text-sm text-red-700 mt-2">
                  <strong>Issues:</strong> This class has multiple reasons to
                  change: user data structure, email service changes, database
                  schema changes, or validation rule changes.
                </p>
              </div>
            </div>

            <!-- Good Example -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">
                ✅ Correct Implementation
              </h4>
              <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <pre
                  class="text-sm text-gray-800 overflow-x-auto"
                ><code>// ✅ GOOD: Single responsibility - User data only
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

// ✅ GOOD: Single responsibility - Email operations
class EmailService {
  sendWelcomeEmail(user) {
    console.log(\`Sending email to \${user.getEmail()}\`);
    // Email sending logic...
  }
}

// ✅ GOOD: Single responsibility - Data persistence
class UserRepository {
  save(user) {
    console.log('Saving user to database...');
    // Database saving logic...
  }
}

// ✅ GOOD: Single responsibility - Validation
class EmailValidator {
  validate(email) {
    return email.includes('@') && email.includes('.');
  }
}

// Usage
const user = new User('John Doe', 'john@example.com');
const emailService = new EmailService();
const userRepo = new UserRepository();
const validator = new EmailValidator();

if (validator.validate(user.getEmail())) {
  userRepo.save(user);
  emailService.sendWelcomeEmail(user);
}</code></pre>
                <p class="text-sm text-green-700 mt-2">
                  <strong>Benefits:</strong> Each class has one clear
                  responsibility and reason to change. Easy to test, maintain,
                  and extend.
                </p>
              </div>
            </div>

            <!-- Real-world Frontend Example -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">🌐 Frontend Example</h4>
              <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <pre
                  class="text-sm text-gray-800 overflow-x-auto"
                ><code>// ❌ BAD: React component with multiple responsibilities
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Data fetching logic
  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  // Validation logic
  const validateUser = (userData) => {
    return userData.email && userData.name && userData.email.includes('@');
  };

  // Formatting logic
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Saving logic
  const saveUser = async (userData) => {
    await fetch(\`/api/users/\${userId}\`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  };

  return (
    &lt;div&gt;
      {loading ? &lt;div&gt;Loading...&lt;/div&gt; : 
        &lt;div&gt;{user?.name} - {formatDate(user?.createdAt)}&lt;/div&gt;
      }
    &lt;/div&gt;
  );
}

// ✅ GOOD: Separated responsibilities
// 1. Custom hook for data fetching
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    UserService.getUser(userId).then(data => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);

  return { user, loading };
}

// 2. Service for API operations
class UserService {
  static async getUser(id) {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
  }

  static async updateUser(id, userData) {
    return fetch(\`/api/users/\${id}\`, {
      method: 'PUT',
      body: JSON.stringify(userData)
    });
  }
}

// 3. Utility for formatting
class DateFormatter {
  static formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
  }
}

// 4. Validator class
class UserValidator {
  static validate(userData) {
    return userData.email && userData.name && userData.email.includes('@');
  }
}

// 5. Simple presentation component
function UserProfile({ userId }) {
  const { user, loading } = useUser(userId);

  if (loading) return &lt;LoadingSpinner /&gt;;
  
  return (
    &lt;div&gt;
      &lt;h2&gt;{user?.name}&lt;/h2&gt;
      &lt;p&gt;Email: {user?.email}&lt;/p&gt;
      &lt;p&gt;Joined: {DateFormatter.formatDate(user?.createdAt)}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
              </div>
            </div>

            <!-- Common Violations -->
            <div class="mb-4">
              <h4 class="text-lg font-semibold mb-3">⚠️ Common Violations</h4>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-yellow-600 font-bold">⚠</span>
                    <span
                      ><strong>God Classes:</strong> Classes that know too much
                      or do too much</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-yellow-600 font-bold">⚠</span>
                    <span
                      ><strong>Mixed Concerns:</strong> UI logic mixed with
                      business logic</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-yellow-600 font-bold">⚠</span>
                    <span
                      ><strong>Data + Behavior:</strong> Classes handling both
                      data structure and operations</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-yellow-600 font-bold">⚠</span>
                    <span
                      ><strong>Swiss Army Knife:</strong> Utility classes with
                      unrelated methods</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Quick Exercise -->
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="text-lg font-semibold mb-2">💡 Quick Exercise</h4>
              <p class="text-sm text-gray-700 mb-2">
                <strong>Identify the responsibilities:</strong> Look at this
                class and list all the different responsibilities it has:
              </p>
              <pre
                class="text-xs bg-white p-2 rounded border"
              ><code>class OrderProcessor {
  validateOrder(order) { /* validation logic */ }
  calculateTotal(items) { /* calculation logic */ }
  applyDiscount(total, coupon) { /* discount logic */ }
  saveOrder(order) { /* database logic */ }
  sendConfirmationEmail(email) { /* email logic */ }
  updateInventory(items) { /* inventory logic */ }
  generateInvoice(order) { /* invoice logic */ }
}</code></pre>
              <p class="text-xs text-gray-600 mt-2">
                <strong>Answer:</strong> This class has at least 7 different
                responsibilities! Each method represents a different concern
                that could change for different reasons.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Open/Closed Principle -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <span class="text-green-600 font-bold text-lg">O</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              Open/Closed Principle (OCP)
            </h3>
            <p class="text-gray-600 mb-4">
              Software entities should be open for extension but closed for
              modification. You should be able to add new functionality without
              changing existing code. This principle promotes code reusability
              and maintainability.
            </p>

            <!-- Definition -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">Key Concepts</h4>
              <div class="bg-green-50 p-4 rounded-lg">
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 font-bold">•</span>
                    <span
                      ><strong>Open for Extension:</strong> You can add new
                      functionality by extending existing code with new classes
                      or modules.</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 font-bold">•</span>
                    <span
                      ><strong>Closed for Modification:</strong> Existing,
                      working code should not be changed when adding new
                      features.</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-green-600 font-bold">•</span>
                    <span
                      ><strong>Abstraction is Key:</strong> Use interfaces,
                      abstract classes, and polymorphism to achieve this
                      principle.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Bad Example -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">❌ Violation Example</h4>
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <pre
                  class="text-sm text-gray-800 overflow-x-auto"
                ><code>// ❌ BAD: Need to modify existing code for new features
class AreaCalculator {
  calculateArea(shapes) {
    let totalArea = 0;
    
    for (const shape of shapes) {
      if (shape.type === 'rectangle') {
        totalArea += shape.width * shape.height;
      } else if (shape.type === 'circle') {
        totalArea += Math.PI * shape.radius * shape.radius;
      }
      // What if we want to add a triangle? 
      // We need to MODIFY this class! 
      // else if (shape.type === 'triangle') {
      //   totalArea += (shape.base * shape.height) / 2;
      // }
    }
    
    return totalArea;
  }
}

const calculator = new AreaCalculator();
const shapes = [
  { type: 'rectangle', width: 5, height: 4 },
  { type: 'circle', radius: 3 }
];
console.log(calculator.calculateArea(shapes));</code></pre>
                <p class="text-sm text-red-700 mt-2">
                  <strong>Problem:</strong> Every time we add a new shape, we
                  must modify the AreaCalculator class, violating the "closed
                  for modification" principle.
                </p>
              </div>
            </div>

            <!-- Good Example -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">
                ✅ Correct Implementation
              </h4>
              <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <pre
                  class="text-sm text-gray-800 overflow-x-auto"
                ><code>// ✅ GOOD: Open for extension, closed for modification
// Abstract interface/base class
class Shape {
  calculateArea() {
    throw new Error('calculateArea method must be implemented');
  }
}

// Concrete implementations
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// NEW SHAPE - No modification of existing code needed!
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

// Calculator remains unchanged regardless of new shapes
class AreaCalculator {
  calculateArea(shapes) {
    return shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
  }
}

// Usage - works with any shape that extends Shape
const calculator = new AreaCalculator();
const shapes = [
  new Rectangle(5, 4),
  new Circle(3),
  new Triangle(6, 4)  // New shape works without changing anything!
];
console.log(calculator.calculateArea(shapes));</code></pre>
                <p class="text-sm text-green-700 mt-2">
                  <strong>Benefits:</strong> Adding new shapes requires no
                  changes to existing code. The AreaCalculator is closed for
                  modification but open for extension.
                </p>
              </div>
            </div>

            <!-- Strategy Pattern Example -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">
                🎯 Strategy Pattern Implementation
              </h4>
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <pre
                  class="text-sm text-gray-800 overflow-x-auto"
                ><code>// Strategy interface
class PaymentStrategy {
  pay(amount) {
    throw new Error('pay method must be implemented');
  }
}

// Concrete strategies
class CreditCardPayment extends PaymentStrategy {
  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }
  
  pay(amount) {
    console.log(\`Paid $\${amount} using Credit Card ending in \${this.cardNumber.slice(-4)}\`);
  }
}

class PayPalPayment extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }
  
  pay(amount) {
    console.log(\`Paid $\${amount} using PayPal account \${this.email}\`);
  }
}

// NEW STRATEGY - No modification needed!
class CryptoPayment extends PaymentStrategy {
  constructor(walletAddress) {
    super();
    this.walletAddress = walletAddress;
  }
  
  pay(amount) {
    console.log(\`Paid $\${amount} using Crypto wallet \${this.walletAddress}\`);
  }
}

// Context class - never needs to change
class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }
  
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  
  processPayment(amount) {
    this.strategy.pay(amount);
  }
}

// Usage
const processor = new PaymentProcessor(new CreditCardPayment('1234-5678-9012-3456'));
processor.processPayment(100);

processor.setStrategy(new PayPalPayment('user@example.com'));
processor.processPayment(50);

processor.setStrategy(new CryptoPayment('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'));
processor.processPayment(75);</code></pre>
              </div>
            </div>

            <!-- Frontend Plugin Example -->
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-3">
                🔌 Frontend Plugin Architecture
              </h4>
              <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <pre
                  class="text-sm text-gray-800 overflow-x-auto"
                ><code>// Plugin interface
class ValidationPlugin {
  validate(value) {
    throw new Error('validate method must be implemented');
  }
  
  getErrorMessage() {
    throw new Error('getErrorMessage method must be implemented');
  }
}

// Built-in plugins
class EmailValidationPlugin extends ValidationPlugin {
  validate(value) {
    return value.includes('@') && value.includes('.');
  }
  
  getErrorMessage() {
    return 'Please enter a valid email address';
  }
}

class MinLengthValidationPlugin extends ValidationPlugin {
  constructor(minLength) {
    super();
    this.minLength = minLength;
  }
  
  validate(value) {
    return value.length >= this.minLength;
  }
  
  getErrorMessage() {
    return \`Minimum length is \${this.minLength} characters\`;
  }
}

// NEW PLUGIN - No existing code modification!
class PhoneValidationPlugin extends ValidationPlugin {
  validate(value) {
    return /^\+?[\d\s-()]+$/.test(value);
  }
  
  getErrorMessage() {
    return 'Please enter a valid phone number';
  }
}

// Form validator - never needs to change
class FormValidator {
  constructor() {
    this.plugins = [];
  }
  
  addPlugin(plugin) {
    this.plugins.push(plugin);
  }
  
  validate(value) {
    for (const plugin of this.plugins) {
      if (!plugin.validate(value)) {
        return { valid: false, message: plugin.getErrorMessage() };
      }
    }
    return { valid: true };
  }
}

// Usage in a form component
function ContactForm() {
  const emailValidator = new FormValidator();
  emailValidator.addPlugin(new EmailValidationPlugin());
  emailValidator.addPlugin(new MinLengthValidationPlugin(5));
  
  const phoneValidator = new FormValidator();
  phoneValidator.addPlugin(new PhoneValidationPlugin());
  
  const handleEmailValidation = (email) => {
    const result = emailValidator.validate(email);
    if (!result.valid) {
      console.log('Email error:', result.message);
    }
  };
  
  const handlePhoneValidation = (phone) => {
    const result = phoneValidator.validate(phone);
    if (!result.valid) {
      console.log('Phone error:', result.message);
    }
  };
  
  // Component render logic...
}</code></pre>
              </div>
            </div>

            <!-- Common Patterns -->
            <div class="mb-4">
              <h4 class="text-lg font-semibold mb-3">
                🛠️ Common Implementation Patterns
              </h4>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start space-x-2">
                    <span class="text-yellow-600 font-bold">🎯</span>
                    <span
                      ><strong>Strategy Pattern:</strong> Encapsulate algorithms
                      and make them interchangeable</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-yellow-600 font-bold">🏗️</span>
                    <span
                      ><strong>Template Method:</strong> Define skeleton of
                      algorithm, let subclasses override specific steps</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-yellow-600 font-bold">👀</span>
                    <span
                      ><strong>Observer Pattern:</strong> Add new observers
                      without modifying the subject</span
                    >
                  </li>
                  <li class="flex items-start space-x-2">
                    <span class="text-yellow-600 font-bold">🔌</span>
                    <span
                      ><strong>Plugin Architecture:</strong> Add functionality
                      through plugins/extensions</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Exercise -->
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="text-lg font-semibold mb-2">💡 Practice Exercise</h4>
              <p class="text-sm text-gray-700 mb-2">
                <strong>Challenge:</strong> Refactor this notification system to
                follow OCP:
              </p>
              <pre
                class="text-xs bg-white p-2 rounded border mb-2"
              ><code>class NotificationService {
  sendNotification(type, message, recipient) {
    if (type === 'email') {
      // Send email
    } else if (type === 'sms') {
      // Send SMS
    } else if (type === 'push') {
      // Send push notification
    }
    // Adding slack notifications requires modifying this method!
  }
}</code></pre>
              <p class="text-xs text-gray-600">
                <strong>Hint:</strong> Create a base NotificationChannel class
                and specific implementations (EmailChannel, SMSChannel, etc.).
                The service should work with any channel without modification.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Liskov Substitution Principle -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <span class="text-yellow-600 font-bold text-lg">L</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              Liskov Substitution Principle (LSP)
            </h3>
            <p class="text-gray-600 mb-4">
              Objects of a superclass should be replaceable with objects of a
              subclass without breaking the application.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Inheritance best practices</li>
                <li>• Contract compliance examples</li>
                <li>• Common LSP violations</li>
                <li>• Refactoring exercises</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Interface Segregation Principle -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <span class="text-purple-600 font-bold text-lg">I</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              Interface Segregation Principle (ISP)
            </h3>
            <p class="text-gray-600 mb-4">
              Clients should not be forced to depend on interfaces they do not
              use. Prefer many specific interfaces over one general-purpose
              interface.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Interface design principles</li>
                <li>• Breaking down fat interfaces</li>
                <li>• TypeScript interface examples</li>
                <li>• Practical refactoring scenarios</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Dependency Inversion Principle -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <span class="text-red-600 font-bold text-lg">D</span>
          </div>
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">
              Dependency Inversion Principle (DIP)
            </h3>
            <p class="text-gray-600 mb-4">
              High-level modules should not depend on low-level modules. Both
              should depend on abstractions. Abstractions should not depend on
              details.
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-sm text-gray-700 font-medium mb-2">Coming Soon:</p>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>• Dependency injection patterns</li>
                <li>• Inversion of Control examples</li>
                <li>• Abstract vs concrete dependencies</li>
                <li>• Testing benefits and examples</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Steps -->
    <div class="bg-blue-50 rounded-lg p-6">
      <h3 class="text-lg font-semibold mb-3">What's Next?</h3>
      <p class="text-gray-700 mb-4">
        Once you understand SOLID principles, you'll be ready to explore how
        these principles apply to interfaces and classes in TypeScript, and how
        they form the foundation for effective design patterns.
      </p>
      <div class="flex space-x-4">
        <router-link
          to="/interfaces-and-classes"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200"
        >
          Next: Interfaces & Classes
        </router-link>
        <router-link
          to="/"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition duration-200"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolidPrinciples",
};
</script>
