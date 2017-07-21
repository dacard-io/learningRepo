// API.js is the interface used when fetching Github API data

var api = {
    getBio(username){
        username.toLowerCase().trim();
        var url = `https://api.github.com/users/${username}`
        return fetch(url).then((res) => res.json()) // I kinda like fat arrow functions
    },
    getRepos(username){
        username = username.toLowerCase().trim();
        var url = `https://api.github.com/users/${username}/repos` // Notice I'm using back ticks, reason being you can use JSX templates inside, without using + and ,
        return fetch(url).then(
            (res) => res.json()

            // The way fat arrow works is similar to a regular function

            /* The regular way to do it is below, but lets use the fat arrow method
            function(res) {
                res.json()
            }
            */
        )
    },
    getNotes(username){
        // Clean up the username
        username = username.toLowerCase().trim()
        // Get the Firebase url to perform API operations
        var url = `https://egghead-githubnote.firebaseio.com/${username}.json`
        return fetch(url).then((res) => res.json())
    },
    addNote(username, note){
        // Clean up the username
       username = username.toLowerCase().trim()
        var url = `https://egghead-githubnote.firebaseio.com/${username}.json`
        return fetch(url, {
            method: 'post',
            body: JSON.stringify(note)
        }).then((res) => res.json())
    }
}

module.exports = api