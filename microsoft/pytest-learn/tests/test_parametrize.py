import pytest

@pytest.mark.parametrize(
  "item",
  ["0", "1", "10", "33", "9"]
)
def test_string_is_digit(item):
  assert item.isdigit()

# The following example was extract to:
# https://docs.pytest.org/en/7.3.x/how-to/parametrize.html
# Use multiple arguments example
@pytest.mark.parametrize(
  "test_input, expected",
  [("3 + 5", 8), ("2 + 4", 6), ("6 * 9", 54)]
)
def test_eval(test_input, expected):
  assert eval(test_input) == expected
