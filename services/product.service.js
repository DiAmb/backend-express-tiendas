const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }
  async generate() {
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        img: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }
  async create(data) {
    const newProucto = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProucto);
    return newProucto;
  }
  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 500);
    });
  }
  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new boom.notFound('Not found');
    }
    if (product.isBlock) {
      throw new boom.conflict('product block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new boom.notFound('Not found');
    }
    const producto = this.products[index];
    this.products[index] = {
      ...producto,
      ...changes,
    };
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new boom.notFound('Not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductService;
