import { extendTheme } from "@chakra-ui/react"
import colors from "./colors"

const theme = extendTheme({
  colors: {
    ...colors
  },
  layerStyles: {
    background: {
      bg: 'blue.800'
    },
    base: {
      bg: "blue.600",
      color: 'greyscale.50',
    },
  }
})

export default theme;
