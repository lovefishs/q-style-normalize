const DEV_ENV = 'development'
const PROD_ENV = 'production'

module.exports = ({ env = DEV_ENV }) => ({
  plugins: {
    precss: {},
    autoprefixer: {},
    cssnano:
      env === PROD_ENV
        ? {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          }
        : false,
  },
})
