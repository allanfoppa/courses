import pytest

def admin_command(command, sudo=True):
  """
  Prefix a command with `sudo` unless it is explicitly not needed.
  Expects `command` to be a list.
  """

  # Returns True if the specified object is of the specified type, otherwise False.
  # in that case command is a list?
  if not isinstance(command, list):
    raise TypeError(f"was expecting command to be a list, but got a {type(command)}")
  if sudo:
    return ["sudo"] + command
  return command

class TestAdminCommand:

  def command(self):
    return ["ps", "aux"]

  def test_no_sudo(self):
    result = admin_command(self.command(), sudo=False)
    assert result == self.command()

  def test_sudo(self):
    result = admin_command(self.command(), sudo=True)
    expected = ["sudo"] + self.command()
    assert result == expected

  def test_non_list_commands(self):
    with pytest.raises(TypeError) as error:
      admin_command("some command", sudo=True)
    assert error.value.args[0] == "was expecting command to be a list, but got a <class 'str'>"
