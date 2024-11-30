import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../services/storage";
import { AppContext } from "./AppContext";

export const Header = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    clearLocalStorage();
    navigate("/");
  };

  return (
    <Flex backgroundColor="orange" padding="5px">
      <Box>
        <Center>
          <Text fontSize="3xl">Dio Bank</Text>
        </Center>
      </Box>
      {user && (
        <>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </>
      )}
    </Flex>
  );
};
