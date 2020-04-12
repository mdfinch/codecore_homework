const express = require("express");
const knex = require("../db/connection");

const router = express.Router();

router.get("/new", (reqest, response) => {
    response.render("cohorts/new");
});

router.post("/", (request, respones) => {
    const {logoUrl, name, members} = request.body;
    knex("cohorts")
    .insert({
        logoUrl,
        name,
        members
    })
    .returning("*")
    .then((cohort) => {
        // response.redirect(`/cohorts/${cohort[0].id}`)
        respones.redirect("cohorts/new")
    });
});

router.get("/:id", (request, response) => {

    const id = request.params.id;
    knex("cohorts")
      .where("id", id)
      .first()
      .then((note) => {
        console.log(note);
        if (note) {
          response.render("cohorts/show", { note });
        } else {
          response.redirect("/cohorts");
        }
      });
  });

module.exports = router;