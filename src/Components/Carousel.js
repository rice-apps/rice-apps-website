import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
const quoteStyle = {
    marginTop: "28vh", 
    color: "#41BFB4", 
    fontSize: "4.5vh",
    position: "relative",
    padding: "0 30vh"};

const emphasis = {
    color: "pink"
};

const quoteeStyle = { 
    color: "#41BFB4", 
    fontSize: "3.5vh",
    position: "relative",
    clear: "right",
    float: "right",
    padding: " 0 30vh"
};

const CustomCarousel = () => {
        return (
            <Carousel>

                <div style = {{height: "50vh"}}>
                    <h1 style = {quoteStyle} >"RICEAPPS WAS INSTRUMENTAL TO MY
                    DEVELOPMENT NOT ONLY AS A <span style = {emphasis}>DEVELOPER</span>, BUT AS A  
                    <span style = {emphasis}> LEADER</span>."</h1>
                    <h1 style = {quoteeStyle}> -Shryans Goyal</h1>
                    <h1 style = {quoteeStyle}> Chair, Class of '21</h1>
                </div>

                <div style = {{height: "50vh"}}>
                    <h1 style = {quoteStyle} >"RICEAPPS WAS INSTRUMENTAL TO MY
                    DEVELOPMENT NOT ONLY AS A <span style = {emphasis}>DEVELOPER</span>, BUT AS A  
                    <span style = {emphasis}> LEADER</span>."</h1>
                    <h1 style = {quoteeStyle}> -Shryans Goyal</h1>
                    <h1 style = {quoteeStyle}> Chair, Class of '21</h1>
                </div>
                
                <div style = {{height: "50vh"}}>
                    <h1 style = {quoteStyle} >"RICEAPPS WAS INSTRUMENTAL TO MY
                    DEVELOPMENT NOT ONLY AS A <span style = {emphasis}>DEVELOPER</span>, BUT AS A  
                    <span style = {emphasis}> LEADER</span>."</h1>
                    <h1 style = {quoteeStyle}> -Shryans Goyal</h1>
                    <h1 style = {quoteeStyle}> Chair, Class of '21</h1>
                </div>
            </Carousel>
        );
    };

export default CustomCarousel;

