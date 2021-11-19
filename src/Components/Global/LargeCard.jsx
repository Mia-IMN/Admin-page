import React from 'react'

const LargeCard = ({title, Page}) => {
    return (
        <div>
            {/* I used this for the card-like look but it didn't work out
            when i wanted to put the table inside */}
        <h6 className={Page ? "title" : "little-title"}>{title}</h6>
        </div>
    )
}

export default LargeCard
