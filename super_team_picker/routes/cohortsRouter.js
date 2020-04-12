const express = require("express");
const knex = require("../db/connection");

const router = express.Router();

router.get("/new", (reqest, response) => {
    response.render("cohorts/new");
});

router.post("/", (request, response) => {
    const { logoUrl, name, members } = request.body;
    knex("cohorts")
        .insert({
            logoUrl,
            name,
            members
        })
        .returning("*")
        .then((cohort) => {
            response.redirect(`/cohorts/${cohort[0].id}`)
        });
});

router.get("/:id", (request, response) => {

    const id = request.params.id;
    knex("cohorts")
        .where("id", id)
        .first()
        .then((cohort) => {
            console.log(cohort);
            if (cohort) {
                response.render("cohorts/show", { cohort });
            } else {
                response.redirect("/cohorts");
            }
        });
});

router.get("/", (request, response) => {
    knex("cohorts")
        .orderBy("id", "desc")
        .then((cohorts) => {
            response.render("cohorts/index", { cohorts });
        });
});


router.get("/:id/edit", (request, response) => {
    knex("cohorts")
    .where("id", request.params.id)
    .first()
    .then((cohort) => {
        response.render("cohorts/edit", {cohort});
    });
});

module.exports = router;