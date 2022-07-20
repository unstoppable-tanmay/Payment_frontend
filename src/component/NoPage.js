import React from 'react'
import "./NoPage.css"
import errorimg from "../res/404-error-lost-space-concept-illustration_114360-7891.webp"

const NoPage = () => {
    return (
        <>
          <div className="no_page">
            <div className="no_page_content">
              <img className="errorimg" src={errorimg} alt="" />
              <h3>Page Not Found</h3>
            </div>
          </div>
        </>
      );
}

export default NoPage