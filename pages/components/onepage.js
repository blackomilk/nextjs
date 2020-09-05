import React, { Component } from 'react'

class onePage extends Component {

    componentDidMount() {
      const logo = document.getElementById('logo')
      logo.style.backgroundPosition="-170px -170px"

      setTimeout(() => {
        logo.style.backgroundPosition="170px 170px"
        setTimeout(() => {
          logo.style.backgroundColor="#fff"
        },500)
      },1100)
      
    }

   render() {
       return (
           <>
            <div className="body-main-page-one-bottom">
                <div className="body-main-page-one-bottomDown">
                <div className="body-main-page-one-bottomUp">
                  <div className="body-main-page-one-bottomUp-logo" id="logo">
                    <img src="/mattti.png"></img>
                  </div>
                  <div className="body-main-page-one-bottomUp-title">
                    <p>Hello I‘m Matti</p>
                    <p>正在努力成为一名前端开发工程师</p>
                    <p>@2020</p>
                  </div>
                </div>
                </div>
              </div>
           </>
       )
   }
}

export default onePage;