const pokemonCardTemplate = document.querySelector("[data-pokemon-template]")
const pokemonCardContainer = document.querySelector("[data-pokemon-cards-container]")
const searchInput = document.querySelector("[data-search]")

let pokemons = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  pokemons.forEach(pokemon => {
    const isVisible =
      pokemon.name.toLowerCase().includes(value) ||
      pokemon.item.toLowerCase().includes(value)
      pokemon.nature.toLowerCase().includes(value)
      pokemon.evs.toLowerCase().includes(value)
      pokemon.moves.toLowerCase().includes(value)
    pokemon.element.classList.toggle("hide", !isVisible)
  })
})

fetch('pokemon_list.json')
  .then(res => res.json())
  .then(data => {
    pokemons = data.map(pokemon => {
      const card = pokemonCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body_item = card.querySelector("[data-body_item]")
      const body_nature = card.querySelector("[data-body_nature]")
      const body_evs = card.querySelector("[data-body_evs]")
      const body_move1 = card.querySelector("[data-body_move1]")
      const body_move2 = card.querySelector("[data-body_move2]")
      const body_move3 = card.querySelector("[data-body_move3]")
      const body_move4 = card.querySelector("[data-body_move4]")
      header.textContent = pokemon.name
      body_item.textContent = `• ${pokemon.item}`
      body_nature.textContent = `• ${pokemon.nature}`
      body_evs.textContent = `• ${pokemon.evs}`
      body_move1.textContent = `- ${pokemon.moves.move_1}`
      body_move2.textContent = `- ${pokemon.moves.move_2}`
      body_move3.textContent = `- ${pokemon.moves.move_3}`
      body_move4.textContent = `- ${pokemon.moves.move_4}`
      pokemonCardContainer.append(card)
      return { name: pokemon.name, item: pokemon.item, nature: pokemon.nature, evs: pokemon.evs, moves: pokemon.moves.move_1, moves: pokemon.moves.move_2, moves: pokemon.moves.move_3, moves: pokemon.moves.move_4, element: card }
    })
  })