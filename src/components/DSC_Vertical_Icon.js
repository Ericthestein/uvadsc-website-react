import {SvgIcon} from "@material-ui/core";

import dsc_vertical from "../assets/dsc_vertical.png";

const DSC_Vertical_Icon = (props) => {

    return(
        <img
            src={dsc_vertical}
            height={props.height}
            width={props.width}
        />
    )
}

export default DSC_Vertical_Icon;