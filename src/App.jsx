import React from "react"
import Navbar from "./components/NavBar"
import ProjectsView from "./components/ProjectsView"
import SizeAvatars from "./components/Dp"
import FloatingActionButtons from "./components/TechStack"
import LabelBottomNavigation from "./components/Footer"
import TypewriterEffect from "./components/TypewriterEffect"

function App() {

  return (
    <>
    <Navbar></Navbar>
    <TypewriterEffect></TypewriterEffect>
    <SizeAvatars></SizeAvatars>
    <ProjectsView></ProjectsView>
    <FloatingActionButtons></FloatingActionButtons>
    <LabelBottomNavigation></LabelBottomNavigation>
    </>
  )
}

export default App
