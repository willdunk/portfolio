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
    content: {
      bg: "greyscale.50",
      color: 'greyscale.900'
    }
  }
})

export default theme;
