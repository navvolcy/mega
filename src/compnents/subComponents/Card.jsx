import React from "react";

const Card = ({Children}) =>{

    return(
        <div>
            <Card>
                {Children}
            </Card>


        </div>
    )
}
export default Card;