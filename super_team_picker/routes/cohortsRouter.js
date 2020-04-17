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
            if (cohort) {
                let option = request.query.teamSplit;
                let num = request.query.quantity;
                let arr = cohort.members.split(',');
                let array = [];
                //splits list of names into a trimed array
                for (let element of arr) {
                    array.push(element.trim())
                }
                // randomizes array
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * i)
                    const temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
                let obj = {};
                // creates correct amount of team keys with empty array values for teamCount option
                if (option == 'teamCount') {
                    for (let x = 0; x < num; x++) {
                        obj[`Team_${x + 1}`] = [];
                    }
                }
                // creates correct amount of team keys with empty array values for numPerTeam option
                if (option == 'numPerTeam') {
                    num = Math.round(array.length / num)
                    for (let x = 0; x < num; x++) {
                        obj[`Team_${x + 1}`] = [];
                    }
                }
                // pushes the correct amount people onto each team
                teams = num
                for (let a = 0; a < num; a++) {
                    let number = (array.length / teams)

                    for (let counter = 0; counter < number; counter++) {
                        obj[`Team_${a + 1}`].push(array.shift())
                    }
                    teams--
                }
                response.render("cohorts/show", { cohort, obj });
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
            response.render("cohorts/edit", { cohort });
        });
});

router.patch("/:id", (request, response) => {
    const { logoUrl, name, members } = request.body;
    const updatedCohort = {
        logoUrl,
        name,
        members,
    };

    knex("cohorts")
        .where("id", request.params.id)
        .update(updatedCohort)
        .then(() => {
            response.redirect(`/cohorts/${request.params.id}`);
        });
});

router.delete("/:id", (request, response) => {

    knex("cohorts")
        .where("id", request.params.id)
        .del()
        .then(() => {
            response.redirect("/cohorts");
        });
});

module.exports = router;