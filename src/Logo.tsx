import * as React from "react"
import {
  chakra,

  ImageProps,
  forwardRef,

} from "@chakra-ui/react"
import logo from "./logo.svg"



export const Logo = forwardRef<ImageProps, "img">(() => {


  return <chakra.img src={logo}/>
})
