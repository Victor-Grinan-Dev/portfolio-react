import React from 'react'

const ArticleTitle = ({ title, img }) => {
  return (
    <div className="articleTitle">
        <div className="icon-container">
            <img src={img} alt="skill-icon" className="mid-img"/>
        </div>
        <h2>{title}</h2>
    </div>
  )
}

export default ArticleTitle