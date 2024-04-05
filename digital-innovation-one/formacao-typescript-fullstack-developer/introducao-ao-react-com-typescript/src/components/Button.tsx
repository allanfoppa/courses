import { Button as CButton } from "@chakra-ui/react";

interface IButton {
  text: string
  click: () => void
}

export const Button = ({
  text,
  click
}: IButton) => {
  return (
    <CButton
      className="button"
      onClick={click}
      colorScheme='teal'
      size='sm'
      width='100%'
      marginTop='5px'
    >
      {text}
    </CButton>
  );
};
