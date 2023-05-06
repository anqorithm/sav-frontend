import React from "react";

const Head = () => {
    return (
        <>
           <section className='head'>
            <div className="container d_flex">
            <div className="left row">
                <i className="fa fa-phone"></i>
                <label>+966 5329 37926</label>
                <i className='fa fa-envelope'></i>
                <label>s201834220@kfupm.edu.sa</label>
            </div>
              <div className='right row RText'>
                    <label>Theme FAQ"s</label>
                    <label>Need Help?</label>
                    {/* <span>Lang</span> */}
                    <label>Language: EN</label>
                    {/* <span>Currency</span> */}
                    <label>Currency: SAR</label>
                  </div>
            </div>

           </section>
        </>
    )
}
export default Head