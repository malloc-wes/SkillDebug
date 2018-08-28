import React from 'react';
import '../App.css';

const ScraperClass = (props) => {
    return (
        <form className="box" onSubmit={props.getJob}>
           <input style={{ margin: "20px auto", display: "block"}} type="text" name="jobtitle" />
            <button class="waves-effect blue-grey lighten-1 btn-small">Submit</button>
        </form>
    );
}
export default ScraperClass;