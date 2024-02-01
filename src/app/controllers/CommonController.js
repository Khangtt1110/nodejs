const Course = require('../models/Course');

class NewsController {

  async index(req, res) {
    const Courses = await Course.find();
    res.status(200).send({
      status: 'Success',
      data: Courses,
    })
  }

  search(req, res) {
    res.send('search');
  }
}

module.exports = new NewsController();
