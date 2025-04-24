// keep node.js syntax as this function is used both by client and node
const _ = require('lodash')

module.exports = slugHandler = (language, templateKey, slug) => {

    var slugParts = slug.split('+');
    var slugHandled;

    slugParts.forEach((slugPart) => {
        slugPart = _.kebabCase(slugPart);
    })
    
    slugHandled = slugParts.join('/');

    if (slugHandled !== '/') {
        slugHandled = slugHandled + '/';
    }

    if (language !== 'fr') {
        slugHandled = '/' + language + slugHandled;
    }

    return slugHandled;
}
