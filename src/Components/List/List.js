import React from 'react'

import './List.css'
import Card from '../Card/Card'
import Backlog from '../../Assets/Images/Backlog.svg'
import Todo from '../../Assets/Images/To-do.svg'
import inProgress from '../../Assets/Images/in-progress.svg'
import Cancelled from '../../Assets/Images/Cancelled.svg'
import Done from '../../Assets/Images/Done.svg'
import noPriority from '../../Assets/Images/No-priority.svg'
import lowPriority from '../../Assets/Images/Img - Low Priority.svg'
import highPriority from '../../Assets/Images/Img - High Priority.svg'
import mediumPriority from '../../Assets/Images/Img - Medium Priority.svg'
import urgentPriority from '../../Assets/Images/SVG - Urgent Priority colour.svg'
import add from '../../Assets/Images/add.svg'
import dots from '../../Assets/Images/3 dot menu.svg'
let cardCount = 0;

export default function List(props) {
  return (
    <>
        <div className="list-container">
            <div className="list-header">
                <div className="list-header-left">
                    {
                        {
                            'status' : <>{
                                {
                                    'Backlog': <div className="list-icon">
                                  <img src={Backlog} alt="" />
                                    </div>,
                                    'Todo': <div className="list-icon">
                                    <img src={Todo} alt="" />
                                    </div>,
                                    'In progress': <div className="list-icon">
                                   <img src={inProgress} alt="" />
                                    </div>,
                                    'Done': <div className="list-icon">
                                 <img src={Done} alt="" />
                                    </div>,
                                    'Cancelled': <div className="list-icon">
                                   <img src={Cancelled} alt="" />
                                    </div>
                                }[props.listTitle]
                            } </>,
                            'user': <></>,
                            'priority' : <>{
                                {
                                    0: <div className="card-tag-icon"><img src={noPriority} alt="" /></div>,
                        1: <div className="card-tag-icon"><img src={lowPriority} alt="" /></div>,
                        2: <div className="card-tag-icon"><img src={mediumPriority} alt="" /></div>,
                        3: <div className="card-tag-icon"><img src={highPriority} alt="" /></div>,
                        4: <div className="card-tag-icon"><img src={urgentPriority} alt="" /></div>
                                }[props.listTitle]
                            } </>
                        }[props.groupValue]
                    }
                    
                    <div className="list-title">
                        {
                            {
                                'priority' : <>{
                                                props.priorityList
                                                    ? props.priorityList.map(priorityProperty => (
                                                        priorityProperty.priority === props.listTitle
                                                        ? <>{priorityProperty.name}</>
                                                        : null
                                                    ))
                                                    : null
                                                }</>,
                                'status' : <>{props.listTitle}</>,
                                'user' : <>{props.listTitle}</>
                            }[props.groupValue]
                        }
                    </div>
                    <div className="list-sum">{cardCount}</div>
                </div>
                <div className="list-header-right">
                    <div className="list-add-item">
                 <img src={add} alt="" />
                    </div>
                    <div className="list-option-item">
                   <img src={dots} alt="" />
                    </div>
                </div>
            </div>

            <div className="list-card-items">
                {
                    props.ticketDetails.map(ticket => {
                        if(ticket.status === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.priority === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        else if(ticket.userObj.name === props.listTitle){
                            cardCount++;
                            return(<Card cardDetails={ticket} />)
                        }
                        return null
                    }, cardCount = 0)
                    
                }
            </div>
        </div>
    </>
  )
}
