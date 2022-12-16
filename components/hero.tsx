import React from "react";
import {
  Section,
  Container,
  Box,
  Heading,
  Flex,
  Paragraph,
} from "@modulz/design-system";
import { HomepageButton } from "./homepage-button";
import { ExternalLinkIcon } from "@modulz/radix-icons";

export function Hero() {
  return (
    <Section
      size={{
        "@initial": "2",
        "@bp1": "3",
      }}
      css={{
        pt: "$9",
        ai: "center",

        "@bp2": {
          pt: "$6",
          display: "flex",
          height: "calc(100vh - 65px)",
        },
      }}
    >
      <Container size="3" css={{ flex: 1 }}>
        <Heading
          size="4"
          css={{
            mb: "$3",

            "@bp2": {
              ta: "center",
              px: 180,
            },
            "@bp3": {
              px: 200,
            },
          }}
        >
          Teodoro Villanueva
        </Heading>
        <Paragraph
          size="2"
          css={{
            mb: "$4",
            "@bp2": {
              mx: 230,
              ta: "center",
            },
          }}
        >
          I&apos;m a self taught software developer. My passion is building
          complex tech solutions that people can use to solve problems that
          matter.
        </Paragraph>
        <Flex css={{ "@bp2": { jc: "center", my: "$5" } }}>
          <HomepageButton
            as="a"
            href="https://github.com/teovillanueva"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <Box css={{ ml: "$1" }}>
              <ExternalLinkIcon />
            </Box>
          </HomepageButton>
        </Flex>
      </Container>
    </Section>
  );
}
