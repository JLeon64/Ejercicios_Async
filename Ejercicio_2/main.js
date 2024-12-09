const getPokemon = async () => {
  try {
    const randomizer = Math.floor(Math.random() * 1000) + 1;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomizer}`
    );

    if (!response.ok) throw new Error("Failed to get the Pokemon");
    const data = await response.json();

    const animatedSprite =
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default;
    const staticSprite = data.sprites.front_default;
    document.getElementById("name").textContent = data.name;
    document.getElementById("image").src = animatedSprite || staticSprite;
    document.getElementById("image").alt = data.name;
  } catch (error) {
    console.error(error);
    document.getElementById("name").textContent = "Failed to load the Pokemon";
  }
};

getPokemon();
