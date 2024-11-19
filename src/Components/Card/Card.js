import React from 'react'

import './Card.css'
import noPriority from '../../Assets/Images/No-priority.svg'
import lowPriority from '../../Assets/Images/Img - Low Priority.svg'
import highPriority from '../../Assets/Images/Img - High Priority.svg'
import mediumPriority from '../../Assets/Images/Img - Medium Priority.svg'
import urgentPriority from '../../Assets/Images/SVG - Urgent Priority colour.svg'
export default function Card(props) {
  return (
    <>
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{props.cardDetails.id}</div>
                <div className="card-profile">
                    <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                    <div className={props.cardDetails.userObj.available ?"card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                </div>
            </div>
            <div className="card-title">
                {props.cardDetails.title}
            </div>
            <div className="card-tag">
                {
                    {
                        0: <div className="card-tag-icon"><img src={noPriority} alt="" /></div>,
                        1: <div className="card-tag-icon"><img src={lowPriority} alt="" /></div>,
                        2: <div className="card-tag-icon"><img src={mediumPriority} alt="" /></div>,
                        3: <div className="card-tag-icon"><img src={highPriority} alt="" /></div>,
                        4: <div className="card-tag-icon"><img src={urgentPriority} alt="" /></div>
                    }[props.cardDetails.priority]
                }

                {
                    props.cardDetails.tag.map((tag) => {
                        return(
                            <div className="card-tag-box">
                                <div className="card-tag-title">{tag}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}
