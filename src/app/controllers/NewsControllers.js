class NewsController {
  index(req, res) {}

  show(req, res) {
    res.send('Detail');
  }
}

module.exports = new NewsController();
