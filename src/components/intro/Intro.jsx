import "./intro.css";
import ralph from "../../img/ralph-at-table.jpg";
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi! my name is</h2>
                    <h2 className="i-name">Ralph Pierre</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">HTML5 • CSS3 • JavaScript • NodeJS</div> 
                             <div className="i-title-item">Express • MySQL • MongoDB </div>
                            <div className="i-title-item"> GraphQl • ReactJS • Redux</div>
                        </div>
                    </div>
              
                </div>

                <p className="i-desc">
                    My enthusiasm for development is unrivaled. I get excited to collaborate, 
                    design, and code every day. Every aspect of bringing an idea to life excites 
                    me, and I enjoy every step of the process. <br></br>
                    <br></br>
                    Checkout my tech stack! <br></br><br></br>
                    {/* Learn more in <a href=""></a>about me page! */}
                    </p>
                    

                    
                    
                    
                  
                    
                <svg
         
        >
          <g id="scroll">
            
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            
          </g>
        </svg>


            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={ralph} className="i-img" alt="" />
            </div>
        </div>
    )
}

export default Intro
