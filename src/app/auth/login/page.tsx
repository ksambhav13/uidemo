"use client";
import { FormControl, FormLabel, Link } from "@chakra-ui/react";

import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useAuth } from "@/AuthContext";

import { Logo } from "./Logo";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Separator,
  Text,
  TextField,
} from "@radix-ui/themes";

type Inputs = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username: "adam@skillate.com",
      password: "orion123",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    axios
      .post("/api/auth/login", formData, { withCredentials: true })
      .then(() => {
        console.log(data);
        setUser(data);
      });
  };
  if (user) {
    router.push("/");
  }
  return (
    <Container
      size="1"
      py={{ initial: "2", md: "6" }}
      px={{ initial: "0", sm: "2" }}
    >
      <Grid gap="8">
        <Grid gap="2">
          <Flex gap={{ initial: "2", md: "3" }} align="center" justify="center">
            <Logo />
          </Flex>
          <Flex gap={{ initial: "2", md: "3" }} align="center" justify="center">
            <Heading size={{ base: "xs", md: "sm" }} textAlign="center">
              Log in to your account
            </Heading>
          </Flex>
          <Flex gap={{ initial: "2", md: "3" }} align="center" justify="center">
            <Text>
              Don't have an account? <Link href="#">Sign up</Link>
            </Text>
          </Flex>
        </Grid>
        <Card
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Box py="2" px="4">
            <Grid gap="6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid gap="5">
                  <Grid gap="5">
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <TextField.Input
                        size="3"
                        id="email"
                        type="email"
                        {...register("username")}
                      />
                    </FormControl>
                    <PasswordField {...register("password")} />
                  </Grid>
                  <Flex justify="between">
                    <Text as="label" size="2">
                      <Flex gap="2">
                        <Checkbox defaultChecked /> Remember me
                      </Flex>
                    </Text>
                    <Button variant="ghost" size="1">
                      Forgot password?
                    </Button>
                  </Flex>
                  <Grid gap="6">
                    <Button type="submit" size="3">
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Grid gap="6">
                <Grid columns="3" align="center" gap="3">
                  <Separator size="4" />
                  <Box>
                    <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                      or continue with
                    </Text>
                  </Box>
                  <Separator size="4" />
                </Grid>
                <OAuthButtonGroup />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

export default LoginPage;
