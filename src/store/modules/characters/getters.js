export default {
    listEpisodes: (state) => (id) => {
        let character = state.characters.filter(character => character.id == id)[0];
        let episodes = [];
        character.episode.forEach(url => {
            let myArray = url.split("/");
            episodes.push(myArray[myArray.length - 1])
        });
        return episodes;
    },
    getCharacter: (state) => (id) => {
        return state.characters.filter(character => character.id == id)[0];
    }
}