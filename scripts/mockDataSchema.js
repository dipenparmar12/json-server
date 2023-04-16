let usersSchema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 3,
      maxItems: 10,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            unique: true,
            minimum: 1,
          },
          firstName: {
            type: 'string',
            faker: 'name.firstName',
          },
          lastName: {
            type: 'string',
            faker: 'name.lastName',
          },
          email: {
            type: 'string',
            faker: 'internet.email',
          },
        },
        required: ['id', 'type', 'lastname', 'email'],
      },
    },
  },
  required: ['users'],
}

const productSchema = {
  title: 'Product',
  description: "A product from Acme's catalog",
  type: 'object',
  properties: {
    id: {
      description: 'The unique identifier for a product',
      type: 'integer',
    },
    name: {
      description: 'Name of the product',
      type: 'string',
    },
    price: {
      type: 'number',
      minimum: 0,
      exclusiveMinimum: true,
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
      minItems: 1,
      uniqueItems: true,
    },
  },
  required: ['id', 'name', 'price'],
}

// module.exports = usersSchema
module.exports = { users: usersSchema, product: productSchema }
