import React from "react";

const Separator = React.forwardRef(({ parameter }, ref) => {
    return (
        <div className="separator hidden" ref={ref}>
            <div></div>
            <h1>{parameter}</h1>
            <div></div>
        </div>
    )
});

export default Separator;
