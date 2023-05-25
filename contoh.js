function getHandlerRequest(req, res) {
  res.send("Apakabar!");
}

app.get("/username/:id([0-9]+)", (req, res) => {
  let username = req.params.id;
  res.send("Hello Apakabar " + username + "!");
});

app.get("/contactus", (req, res) => {
  res.sendFile(__dirname + "/public/contactus.html");
});

app.use(express.urlencoded({ extended: true }));

app.post("/submit-contactus", (req, res) => {
  console.log(req.body);

  sendEmail(req.body.name, req.body.subject, req.body.message)
    .then(() => {
      res
        .status(200)
        .send(`Terima kasih ${req.body.name} telah menghubungi kami`);
    })
    .catch((err) => {
      res.status(500).send(`Ada kesalahan pada server`);
    });
});
