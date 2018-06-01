let repos = require('./data.json');
const fs = require('fs');

fs.watch('./data', function (eventType, filename) {
    if (eventType === 'change') {
        require.cache[require.resolve('./data.json')] = null;
        repos = require('./data.json')
    }
})

module.exports = {
    store() {
        fs.writeFileSync(__dirname + '/data.json', JSON.stringify(repos));
    },
    get(index) {
        return repos[index];
    },
    get list() {
        return repos;
    },
    add(article) {
        repos.push(article);
        this.store();
    },
    del(index) {
        repos.splice(index, 1);
        this.store();
    },
    update(index, newArticle) {
        repos.splice(index, 1, newArticle);
        this.store();
    }
}