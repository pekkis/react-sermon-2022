import { FC, ReactNode } from "react";
import { Box, Flex } from "theme-ui";

type Props = {
  children: ReactNode;
};

const CinemaScope: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "justify-content": "center",
        height: "100vh",
        backgroundColor: "rgb(0, 0, 0)"
      }}
    >
      <Box
        sx={{
          aspectRatio: "2.66 / 1",
          width: "100vw",
          backgroundColor: "rgb(255, 255, 255)",
          overflowY: "auto",
          padding: 2,

          "::-webkit-scrollbar": {
            width: 2,
            background: "transparent"
          },

          "::-webkit-scrollbar-thumb": {
            background: "#FFFFFF"
          }
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CinemaScope;
