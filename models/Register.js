const mongoos = require('mongoose')
const TeamSchema = new mongoos.Schema({
    team: {
        type: String
    }
})
const Team = new mongoos.model("Team", TeamSchema)

module.exports = Team;