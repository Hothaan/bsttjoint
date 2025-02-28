import React from "react";
import Logo from "./Logo";
import Gnb from "./Gnb";
import ChooseBranch from "./ChooseBranch";

export default function Header() {
  return (
    <header>
      <Logo />
      <Gnb />
      <ChooseBranch />
    </header>
  );
}
