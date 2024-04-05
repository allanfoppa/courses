def test_dictionaries():
  left = {
    "street": "Ferry Ln.",
    "number": 39,
    "state": "Nevada",
    "zipcode": 30877,
    "county": "Frett"
  }
  right = {
    "street": "Ferry Ln.", # Ferry Lane to ger error
    "number": 39, # 38 to get error
    "state": "Nevada",
    "zipcode": 30877,
    "county": "Frett"
  }

  assert left == right
