function Intro (props)  {
    return (
      <div id="introduction" className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="intro-h1" >
                <h1>Identify cyber security weaknesses </h1>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Intro;
  