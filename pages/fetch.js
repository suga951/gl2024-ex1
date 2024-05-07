async function getChampions() {
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/14.9.1/data/en_US/champion/Zac.json");
    const champion = await response.json();
    console.log(champion)
}


getChampions();