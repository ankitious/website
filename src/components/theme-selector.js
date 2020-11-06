import React from "react"
import Helmet from "react-helmet"
import moon from "../assets/moon.png"
import sun from "../assets/sun.png"
import { FaMoon, FaSun } from "react-icons/fa"

const ThemeSelector = ({ theme, changeTheme }) => {
  return (
    <div className="inbl">
      <Helmet
        meta={[
          {
            name: "theme-color",
            content: theme === "dark" ? "#000" : "#235bc1",
          },
        ]}
      />
      <div>
        <div className="">
          {theme !== "dark" && (
            <FaMoon
              className="pselect ico25 "
              onClick={changeTheme}
              src={sun}
            ></FaMoon>
          )}
          {theme === "dark" && (
            <FaSun
              className="pselect  ico25 "
              onClick={changeTheme}
              src={moon}
            ></FaSun>
          )}
        </div>
      </div>
    </div>
  )
}

export default ThemeSelector
