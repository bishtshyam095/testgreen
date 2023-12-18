

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Green grant project",
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:3001'
            }
        ],
    },
    // api: ['./routes/*.js'],
    apis: ['./routes/*.js'],
}; 

module.exports = options;