exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs Notes",
    description: "Free NodeJs Notes App",
  };
  res.render("index", {
    locals,
    layout: "../views/layouts/front-page.ejs",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "NodeJs Notes",
    description: "Free NodeJs Notes App",
  };
  res.render("about", locals);
};
