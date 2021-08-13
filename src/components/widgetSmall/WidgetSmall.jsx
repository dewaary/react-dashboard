import React from 'react'
import "./widgetSmall.css";
import { Visibility } from '@material-ui/icons'

export default function WidgetSmall() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583_960_720.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dewa Ari</span>
                        <span className="widgetUserTitile">Software Enginnner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583_960_720.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dewa Ari</span>
                        <span className="widgetUserTitile">Software Enginnner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583_960_720.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dewa Ari</span>
                        <span className="widgetUserTitile">Software Enginnner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583_960_720.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dewa Ari</span>
                        <span className="widgetUserTitile">Software Enginnner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2015/09/02/12/39/woman-918583_960_720.jpg" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dewa Ari</span>
                        <span className="widgetUserTitile">Software Enginnner</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
