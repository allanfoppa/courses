# These tests work better to undertood than course

ASSERT_FIRST_NAME  = 'Allan'
ASSERT_MIDDLE_NAME = 'Foppa'
ASSERT_LAST_NAME   = 'Fagundes'
ASSERT_FULL_NAME   = 'Allan Foppa Fagundes'
ASSERT_IS_EVEN     = [0, 2, 4, 6, 8]

def test_first_name(first_name):
  assert first_name == ASSERT_FIRST_NAME

def test_middle_name(middle_name):
  assert middle_name == ASSERT_MIDDLE_NAME

def test_last_name(last_name):
  assert last_name == ASSERT_LAST_NAME

def test_full_name(full_name):
  assert full_name == ASSERT_FULL_NAME

def test_is_even(is_even):
  assert is_even == ASSERT_IS_EVEN
