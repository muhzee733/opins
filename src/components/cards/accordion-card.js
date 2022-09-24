import React, { useState } from "react"

const AccordionCard = props => {
  const [status, setStatus] = useState(props.status)
  const handleClick = () => {
    setStatus(!status)
  }
  return (
    <div className={`accrodion ${status === true ? "active" : ""}`}>
      <div className="accrodion-inner">
        <div
          className="accrodion-title"
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          <h4>{props.title}</h4>
        </div>
        {status === true ? (
          <div className="accrodion-content">
            <div className="inner">
              <p>{props.content}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default AccordionCard
