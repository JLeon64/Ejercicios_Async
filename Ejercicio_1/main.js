const getCharacters = async () => {
  const sourceRes = await fetch("https://thronesapi.com/api/v2/Characters");
  const jsonData = await sourceRes.json();
  printCharacters(jsonData);
};

const printCharacters = (characters) => {
  const characterList = document.querySelector("#character-list");
  const characterContainer = document.querySelector("#characterContainer");

  characterContainer.innerHTML = "";

  for (const character of characters) {
    const option = document.createElement("option");
    option.value = character.id;
    option.textContent = character.fullName;
    characterList.appendChild(option);
  };

  characterList.addEventListener("change", () => {
      const selectedCharacter = characters.find(
        (character) => character.id === parseInt(characterList.value)
      );

      if (selectedCharacter) {
        characterContainer.innerHTML = `
        <h3>${selectedCharacter.fullName}</h3>
        <img src="${selectedCharacter.imageUrl}" alt="${selectedCharacter.fullName}"></img>
        <h4>${selectedCharacter.title}</h4>
        `;
      } else {
        characterContainer.innerHTML = "<p>Select a character...</p>"
      }
  });
};

getCharacters();
