let users = {
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

// module.exports = usersSchema
module.exports = { users }
