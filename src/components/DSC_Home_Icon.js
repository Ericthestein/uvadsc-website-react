import {SvgIcon} from "@material-ui/core";

import dsc_icon from "../assets/dsc_icon.png";

const DSC_Home_Icon = (props) => {

    return(
        <img
            src={dsc_icon}
            height={props.height}
            width={props.width}
        />
    )
}

export default DSC_Home_Icon;