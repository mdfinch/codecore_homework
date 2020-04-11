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
        response.redirect(`/cohorts/${cohort[0].id}`)
    });
});