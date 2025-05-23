// src/images/index.js
const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
};

export default importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
