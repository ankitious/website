import React, { useState } from "react"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"
import { globalHistory } from "@reach/router"
import { FaDownload } from "react-icons/fa"
import { TiThMenu } from "react-icons/ti"
import ThemeSelector from "./theme-selector"

const LayoutHeader = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false)
  const [theme, setTheme] = useState(   typeof window !== "undefined" && window.__theme)
  const currPath = globalHistory.location.pathname
  return (
    <div>
      {showHeader && (
        <div className="ws-pos-rel">
          <div className="ws-menu-container">
            <div>
              <MdClose
                className={"ws-closebtn ws-menu-items lh2em pselect fb"}
                onClick={() => {
                  let elem = document.querySelector(".ws-menu-container")
                  elem.classList.add("fillout")
                  setTimeout(() => setShowHeader(false), 700)
                }}
              />
              <div className="transCenter ws-menu-heading-container">
                <Link to="/">
                  <div
                    className={
                      "ws-menu-items lh2em pselect fb " +
                      (currPath === "/" ? "themeColor" : "")
                    }
                  >
                    Home
                  </div>
                </Link>
                {/* <Link to="/blog">
                  <div
                    className={
                      "ws-menu-items lh2em pselect fb " +
                      (currPath === "/blog" ? "themeColor" : "")
                    }
                  >
                    Blogs
                  </div>
                </Link>
                <Link to="/portfolio">
                  <div
                    className={
                      "ws-menu-items lh2em pselect fb " +
                      (currPath === "/portfolio" ? "themeColor" : "")
                    }
                  >
                    Portfolio
                  </div>
                </Link>
                <Link to="/skills">
                  <div
                    className={
                      "ws-menu-items lh2em pselect fb " +
                      (currPath === "/skills" ? "themeColor" : "")
                    }
                  >
                    Skills
                  </div>
                </Link>
                <Link to="/aboutme">
                  <div
                    className={
                      "ws-menu-items lh2em pselect fb " +
                      (currPath === "/aboutme" ? "themeColor" : "")
                    }
                  >
                    About Me
                  </div>
                </Link> */}
                <a href="https://drive.google.com/uc?id=19iXVITHtfE8Lb3O4vuL5vp8TXlqPzDLz&export=download">
                  <div className="ws-menu-items lh2em pselect fb ">
                    {" "}
                    Resume
                    <FaDownload style={{ paddingTop: "15px" }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="ws-pos-rel">
        <div className="ws-loader"></div>
        <div>
          <div
            className="inbl fl paddingResizeHam width10Mob op0 opAnimator"
            style={{ animationDelay: "0.5s" }}
          >
            <TiThMenu
              className="pselect fl fadeInWord ico25 crumb"
              onClick={() => setShowHeader(true)}
            />
          </div>
          <div
            className="inbl fr maxWidth75p layoutHeaderwrap marginR5p op0 opAnimator fadeInWord textright width10Mob"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              className={
                "inbl marginR5p hideless500w " + (currPath === "/" ? "fb" : "")
              }
              to="/"
            >
              <div className="">Home</div>
            </Link>
            {/* <Link
              className={
                "inbl marginR5p hideless500w " +
                (currPath === "/blog" ? "fb" : "")
              }
              to="/blog"
            >
              <div className="">Blogs</div>
            </Link>
            <Link
              className={
                "inbl marginR5p hideless500w " +
                (currPath === "/portfolio" ? "fb" : "")
              }
              to="/portfolio"
            >
              <div className="">Portfolio</div>
            </Link> */}
            <ThemeSelector
              className="inbl "
              theme={theme}
              changeTheme={() => {
                window.__setPreferredTheme(theme === "dark" ? "light" : "dark")
                setTheme(theme === "dark" ? "light" : "dark")
              }}
            />
          </div>
        </div>
      </div>
      <>{children}</>
    </div>
  )
}

export default LayoutHeader
