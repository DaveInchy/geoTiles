import React from "react";
import { Link } from "react-router-dom";

export default function Nav()
{
    return
    <>
        <div>
            <h1>NW Buddy</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/">Home</Link> | {" "}
                <Link to="/nwm">New World Map</Link>
            </nav>
        </div>
    </>;
}