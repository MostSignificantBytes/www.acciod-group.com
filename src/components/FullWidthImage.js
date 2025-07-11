import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
    const {
        type,
        height = 400,
        img,
        title,
        subheading,
        text,
        imgPosition = "top left",
    } = props;

    return (
        <React.Fragment>
            <div
                className="margin-top-0"
                style={{
                    display: "grid",
                    alignItems: "center",
                }}
            >
                {img?.url ? (
                    <img
                        src={img}
                        objectFit={"cover"}
                        objectPosition={imgPosition}
                        style={{
                            gridArea: "1/1",
                            // You can set a maximum height for the image, if you wish.
                            height: height,
                            width: "100%",
                        }}
                        // You can optionally force an aspect ratio for the generated image
                        aspectratio={3 / 1}
                        // This is a presentational image, so the alt should be an empty string
                        alt=""
                        formats={["auto", "webp", "avif"]}
                    />
                ) : (
                    <GatsbyImage
                        image={img}
                        objectFit={"cover"}
                        objectPosition={imgPosition}
                        style={{
                            gridArea: "1/1",
                            // You can set a maximum height for the image, if you wish.
                            maxHeight: height,
                        }}
                        layout="fullWidth"
                        // You can optionally force an aspect ratio for the generated image
                        aspectratio={3 / 1}
                        // This is a presentational image, so the alt should be an empty string
                        alt=""
                        formats={["auto", "webp", "avif"]}
                    />
                )}
                {(type == "index1") && (
                    <div
                        style={{
                            gridArea: "1/1",
                            position: "relative",
                            placeItems: "center",
                            display: "grid",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "white",
                                color: "black",
                                textAlign: "center",
                                width: "50%",
                            }}
                        >
                            <h3 className="is-size-5">
                                {title}
                            </h3>
                            <h4 className="has-text-weight-bold is-size-4">
                                {subheading}
                            </h4>
                            <p>
                                {text}
                            </p>
                        </div>
                    </div>
                )}
                {((title || subheading) && false) && (
                    <div
                        style={{
                            // By using the same grid area for both, they are stacked on top of each other
                            gridArea: "1/1",
                            position: "relative",
                            // This centers the other elements inside the hero component
                            placeItems: "center",
                            display: "grid",
                        }}
                    >
                        {/* Any content here will be centered in the component */}
                        {title && (
                            <h1
                                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                                style={{
                                    boxShadow:
                                        "rgb(0, 51, 153) 0.5rem 0px 0px, rgb(0, 51, 153) -0.5rem 0px 0px",
                                    backgroundColor: "rgb(0, 51, 153)",
                                    color: "white",
                                    lineHeight: "1",
                                    padding: "0.25em",
                                }}
                            >
                                {title}
                            </h1>
                        )}
                        {subheading && (
                            <h2
                                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                                style={{
                                    boxShadow:
                                        "rgb(0, 51, 153) 0.5rem 0px 0px, rgb(0, 51, 153) -0.5rem 0px 0px",
                                    backgroundColor: "rgb(0, 51, 153)",
                                    color: "white",
                                    lineHeight: "1",
                                    padding: "0.25rem",
                                    marginTop: "0.5rem",
                                }}
                            >
                                {subheading}
                            </h2>
                        )}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}

FullWidthImage.propTypes = {
    type: PropTypes.string,
    img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    height: PropTypes.number,
    subheading: PropTypes.string,
    text: PropTypes.string,
};
