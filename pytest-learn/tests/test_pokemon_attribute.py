import pytest

HEIGHT = 5
WEIGHT = 90
NAME = "squirtle"

def test_pokemon_attribute(pokemon_info):
  assert pokemon_info['name'] == NAME
  assert pokemon_info['height'] == HEIGHT
  assert pokemon_info['weight'] == WEIGHT


@pytest.mark.parametrize(
  "attr_name, attr_value",
  [("name", NAME), ("height", HEIGHT), ("weight", WEIGHT)]
)
def test_pokemon_attribute_with_parametrize(pokemon_info, attr_name, attr_value):
  assert isinstance(pokemon_info, dict)
  assert attr_name in pokemon_info
  assert pokemon_info[attr_name] == attr_value
