"use client"

import { useState, useEffect } from "react"
import { getWaitlistCount } from "../actions/waitlist"
import { XIcon } from "./icons/x-icon"
import { InstagramIcon } from "./icons/instagram-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { FacebookIcon } from "./icons/facebook-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"
import { Avatar } from "./avatar"
import { SocialIcon } from "./social-icon"
import { WaitlistForm } from "./waitlist-form"

export function WaitlistSignup() {
  const [success, setSuccess] = useState(false)
  useEffect(() => {
  }, [])

  const handleSuccess = (b: boolean) => {
    setSuccess(b)
  }

  return (
    <div id="main-container" className="w-full max-w-xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div id="main-content" className="flex-1 flex flex-col justify-center items-center text-center" style={{ paddingLeft: '60px' }}>
        <div>
          <h2 id="main-title" className="text-4xl sm:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
            Be Among the First
          </h2>
        </div>
        <div>
          <p id="main-description" className="text-lg sm:text-xl mb-8 text-gray-300">
          Leave your email to get onboard and stay in the loop!
          Don't miss this exclusive opportunity to get early access. 
          Be ahead of the trends, find the best deals before anyone else, and unlock smarter shopping.                 
          </p>
        </div>
        <div id="main-form">
          <div className="w-full">
            {success ? <h4 className="text-lg text-green-300 mt-4">🎉 You are on the list! We'll be in touch soon! 🚀</h4> : 
            <WaitlistForm onSuccess={handleSuccess} /> }
          </div>
        </div>
      </div>
      {/* <div className="pt-8 flex justify-center space-x-6" style={{position: 'absolute', bottom: '25%', left: '51%'}}>
        <SocialIcon
          href="https://x.com/motekso"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          icon={<InstagramIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          icon={<DiscordIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          icon={<FacebookIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<LinkedInIcon className="w-6 h-6" />}
        /> 
      </div> */}
    </div>
  )
}

