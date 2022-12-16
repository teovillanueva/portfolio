import { Box, Link, Paragraph } from "@modulz/design-system";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { TitleAndMetaTags } from "../components/title-and-meta-tags";

export default function Home() {
  return (
    <>
      <Box
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: "absolute",
          zIndex: "-1",
          background:
            "radial-gradient(circle at top left, $grassA5, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $violet4, rgba(255, 255, 255, 0) 15%)",
          "@bp2": {
            background:
              "radial-gradient(circle at 15% 50%, $grassA5, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $violet4, rgba(255, 255, 255, 0) 25%)",
          },
        }}
      />
      <TitleAndMetaTags />
      <Header />
      <Hero />
      <Box css={{ position: "absolute", bottom: "$2", right: "$4" }}>
        <Paragraph size="2" css={{ fontSize: "$1", opacity: 0.6 }}>
          This page was heavily inspired by{" "}
          <Link target="_blank" href="https://stitches.dev">
            stitches.dev
          </Link>{" "}
          landing page
        </Paragraph>
      </Box>
    </>
  );
}
