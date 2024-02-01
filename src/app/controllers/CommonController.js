class NewsController {
  index(req, res) {
    res.send('home');
  }

  search(req, res) {
    res.send('search');
  }
}

module.exports = new NewsController();
