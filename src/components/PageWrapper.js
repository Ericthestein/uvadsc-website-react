import "./components.css";
import Header from "./Header";
import React from "react";
import Footer from "./Footer";

const PageWrapper = (props) => {

    return(
        <div className={"page-wrapper"}>
            <Header />
            <div className={"page-container"}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default PageWrapper;