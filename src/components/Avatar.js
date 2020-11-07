import React from "react"
import FadeIn from "./FadeIn"
import profilePic from "../assets/profile.jpeg"

const LINKEDIN_URL = "https://www.linkedin.com/in/ankitious"

const Avatar = () => {
  return (
    <div className="margin30">
      <div
        className="posRel h145p op0 opAnimator "
        style={{ animationDelay: "0.07s" }}
      >
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <img
            alt="profileImg"
            className="posAbs avatarImg "
            width="400"
            height="400"
            src={profilePic}
          />
        </a>
      </div>
      <div className="marginT20">
        <div className="padT10 width100 textcenter avatarInto oh">
          <FadeIn className="lh2em" style={{ animationDelay: "0.15s" }}>
            Software Engineer @
            <a
              href="https://www.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="linkHand">IBM</span>
            </a>
          </FadeIn>
        </div>
        <div className="padT10 width100 textcenter avatarInto oh">
          <FadeIn
            className="lh2em"
            style={{ lineHeight: "3em", animationDelay: "0.20s" }}
          >
            Coder | Functional programming enthusiast | Foodie | Learner
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
export default Avatar
