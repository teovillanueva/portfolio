import NextLink from "next/link";
import { Box, Flex, Heading, Link, Text } from "@modulz/design-system";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <Flex
      as="header"
      css={{
        py: "$4",
        px: "$4",
        jc: "space-between",
        position: "relative",
        zIndex: "1",
      }}
    >
      <Box></Box>
      <Flex as="nav" css={{ ai: "center", gap: "$3" }}>
        {/* <Link href="https://github.com/stitchesjs/stitches" variant="subtle">
          <Text>Career</Text>
        </Link>
        <Link href="https://github.com/stitchesjs/stitches" variant="subtle">
          <Text>Projects</Text>
        </Link> */}
        <Link
          target="_blank"
          href="https://github.com/teovillanueva"
          variant="subtle"
        >
          <Text>GitHub</Text>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/teovillanueva/"
          variant="subtle"
        >
          <Text>Linkedin</Text>
        </Link>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
