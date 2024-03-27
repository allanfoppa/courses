import pytest

import json
import pathlib


@pytest.fixture
def first_name():
  return 'Allan'

@pytest.fixture
def middle_name():
  return 'Foppa'

@pytest.fixture
def last_name():
  return 'Fagundes'

@pytest.fixture
def full_name(first_name, middle_name, last_name):
  return f"{first_name} {middle_name} {last_name}"

@pytest.fixture
def is_even():
  list_output = []

  for number in range(0, 10):
    if(number % 2 == 0):
      list_output.append(number)

  return list_output

@pytest.fixture
def pokemon_info():
  with pathlib.Path("tests/mocks/squirtle_info.json").open() as fp:
    return json.load(fp)
