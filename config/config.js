//Setup enviroment variables for bundle

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
}

export default config