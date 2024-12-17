import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NBA Tracker Api',
      version: '1.0.0',
      description: 'API for analytics and match tracker for NBA',
    },
  },
  apis: ['./src/routes/*.ts'],
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
