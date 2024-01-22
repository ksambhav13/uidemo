// import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { Box, Button, Flex, Grid } from "@radix-ui/themes";
import { GitHubIcon, GoogleIcon, TwitterIcon } from "./ProviderIcons";

const providers = [
  { name: "Google", icon: <GoogleIcon /> },
  { name: "Twitter", icon: <TwitterIcon /> },
  { name: "GitHub", icon: <GitHubIcon /> },
];

export const OAuthButtonGroup = () => (
  <Flex variant="secondary" gap="4">
    {providers.map(({ name, icon }) => (
      <Grid key={name} grow="1">
        <Button variant="outline">
          {/* <VisuallyHidden>Sign in with {name}</VisuallyHidden> */}
          {icon}
        </Button>
      </Grid>
    ))}
  </Flex>
);
