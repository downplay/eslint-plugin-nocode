module.exports = {
    rules: {
        nocode: context => ({
            "*": (node)=>{
                context.report({
                    node,
                    message: "Unexpected code"
                });
            }
        }),
    },
    configs: {
        nocode: {
            rules: {
                nocode: 2
            }
        }
    }
};