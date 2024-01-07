import React from 'react'
import IconDatabiz from '../assets/images/client-databiz.svg'
import IconAudiophile from '../assets/images/client-audiophile.svg'
import IconMeet from '../assets/images/client-meet.svg'
import IconMaker from '../assets/images/client-maker.svg'

const Main = () => {
  return (
    <div className="article">
        <div className="flex-icons">

            <div className="content column">
                <h1>Make {' '} <span>remote work</span></h1>

                <p className="content-text">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

                <input className="btn-main btn-header" type="button" value="Learn more" />
            </div>

            <div className="content-icons">
                <img src={IconDatabiz} alt="icon databiz" />
                <img src={IconAudiophile} alt="icon audiophile" />
                <img src={IconMeet} alt="icon meet" />
                <img src={IconMaker} alt="icon maker" />
            </div>

        </div>

        <div className="content-img column"></div>
    </div>
  )
}

export default Main