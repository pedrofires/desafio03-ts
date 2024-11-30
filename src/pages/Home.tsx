import { Box, Center, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { getAllLocalStorage } from "../services/storage";
import { IDIoBank } from "../models/IDioBank";
import { login } from "../services/login";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const userAccount = await login(email, password);
    if (!userAccount) {
      alert("Dados Inválidos");
      return 0;
    }
    const myStorage = getAllLocalStorage() ?? "{}";
    const myCredentials: IDIoBank = JSON.parse(myStorage);

    if (!myCredentials.id) {
      alert("Dados Inválidos");
      return;
    }

    navigate(`/conta/${myCredentials}`);
  };

  useEffect(() => {
    const myStorage = getAllLocalStorage() ?? "{}";
    const myCredentials = JSON.parse(myStorage);

    if (myCredentials.id) {
      console.log(`${myCredentials.id}`);
      navigate(`/conta/${myCredentials.id}`);
    }
  }, [navigate]);

  return (
    <Box padding="25px">
      <Card>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Center>
          <DButton onClick={() => validateUser(email, password)} />
        </Center>
      </Card>
    </Box>
  );
};

export default Home;
