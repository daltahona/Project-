import { Category } from "../models/Category";
import { ProductDetail } from "../models/ProductDetail";
import { Employee } from "../models/Employee";
import { Supplier } from "../models/Supplier";
import { ProductType } from "../models/ProductType";
import { Product } from "../models/Product";
import { faker } from "@faker-js/faker";

async function createFakerData() {
  // Create fake categories
  await Category.sync(); // This creates the categories table
  for (let i = 0; i < 10; i++) {
    await Category.create({
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
    });
  }

  // Create fake product details
  for (let i = 0; i < 20; i++) {
    await ProductDetail.create({
      description: faker.lorem.sentence(),
      value: faker.commerce.price(),
      isbn: faker.string.alphanumeric(10), // Correct method in recent versions
    });
  }

  // Create fake employees
  for (let i = 0; i < 10; i++) {
    await Employee.create({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phone: faker.phone.number(),
      address: faker.address.streetAddress(),
      position: faker.commerce.product(),
      email: faker.internet.email(),
    });
  }

  // Create fake suppliers
  for (let i = 0; i < 10; i++) {
    await Supplier.create({
      name: faker.company.name(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      taxId: faker.number.int({ min: 1000000000, max: 9999999999 }).toString(),
    });
  }

  // Create fake product types
  for (let i = 0; i < 5; i++) {
    await ProductType.create({
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
    });
  }

  // Create fake products
  const productTypes = await ProductType.findAll();
  const employees = await Employee.findAll();
  const suppliers = await Supplier.findAll();
  const categories = await Category.findAll();

  for (let i = 0; i < 20; i++) {
    await Product.create({
      name: faker.commerce.productName(),
      quantity: faker.number.int({ min: 1, max: 100 }),
      employee_id: employees[faker.number.int({ min: 0, max: employees.length - 1 })].get('id'),
      supplier_id: suppliers[faker.number.int({ min: 0, max: suppliers.length - 1 })].get('id'),
      category_id: categories[faker.number.int({ min: 0, max: categories.length - 1 })].get('id'),
      productType_id: productTypes[faker.number.int({ min: 0, max: productTypes.length - 1 })].get('id'),
      productDetail_id: faker.number.int({ min: 1, max: 20 }),
    });
  }
}

createFakerData().then(() => {
  console.log("Fake data created successfully");
}).catch((error) => {
  console.error("Error creating fake data:", error);
});

