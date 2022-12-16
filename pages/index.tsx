import { Box } from "@modulz/design-system";
import { Header } from "../components/header";
import { Hero } from "../components/hero";

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
      <Header />
      <Hero />
    </>
  );
}
