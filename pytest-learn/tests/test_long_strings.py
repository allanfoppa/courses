def test_long_strings():
  # left = "this is a very long strings to be compared with another long string"
  left = "This is a very long string to be compared with another long string"
  right = "This is a very long string to be compared with another long string"

  assert left == right
