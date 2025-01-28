import {Button} from "@heroui/react";

interface SPButtonProps {
    text: string;
  }
  
  function ButtonLogin({ text }: SPButtonProps) {
  
    return (
      <>
        <Button className="login__button" type="submit" radius="none">
          {text}
        </Button>
      </>
    );
  }
  export default ButtonLogin;