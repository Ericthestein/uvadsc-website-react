import "./components.css";
import {IconButton} from "@material-ui/core";
import Links from "../data/Links";
import {YouTube, Instagram, LinkedIn, Twitter, Facebook} from "@material-ui/icons";

const Footer = (props) => {

    return(
        <div className={"footer-main"}>

            <IconButton href={Links.Instagram.url}>
                <Instagram />
            </IconButton>

            <IconButton href={Links.YouTube.url}>
                <YouTube />
            </IconButton>

            <IconButton href={Links.LinkedIn.url}>
                <LinkedIn />
            </IconButton>

            <IconButton href={Links.Twitter.url}>
                <Twitter />
            </IconButton>

            <IconButton href={Links.Facebook.url}>
                <Facebook />
            </IconButton>

        </div>
    )
}

export default Footer;