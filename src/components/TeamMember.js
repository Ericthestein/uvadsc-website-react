import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

import "./components.css";

const useStyles = makeStyles({
    name: {
        fontSize: 24,
    },
    title: {
        fontSize: 16,
        marginTop: 12,
    }
});

const TeamMember = (props) => {
    const classes = useStyles();

    const {title, name, avatar} = props;
    return(
        <div>
            <Card elevation={3}>
                <CardContent>
                    <div className={"TeamMemberContentContainer"}>
                        <div className={"TeamMemberAvatarContainer"}>
                            <img
                                className={"TeamMemberAvatar"}
                                src={avatar}
                            />
                        </div>
                        <div className={"TeamMemberTextContainer"}>
                            <Typography className={classes.name}>
                                {name}
                            </Typography>

                            <Typography className={classes.title}>
                                {title}
                            </Typography>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default TeamMember;