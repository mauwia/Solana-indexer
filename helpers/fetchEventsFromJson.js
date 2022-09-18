let fetchEventsFromJson =  (json) => {
    let events=json.events.map(event=>{
        return {
            name:event.name,
            fields:event.fields.map(field=>{
                return Object.values(field)[0]
            })
        }
    })
    return events
}
module.exports = fetchEventsFromJson;