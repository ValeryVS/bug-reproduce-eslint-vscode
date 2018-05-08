module.exports = {
    extends: [
        'airbnb-base',
    ],
    settings: {
        'import/resolver': {
            webpack: {
                'config-index': 1,
            },
        },
    },
};
