import PageWrapper from "../components/PageWrapper";
import DSC_Vertical_Icon from "../components/DSC_Vertical_Icon";

import "./pages.css";
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import HomeContent from "../data/HomeContent";
import Links from "../data/Links";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
    },
    summary: {
        fontSize: 16,
        marginTop: 12,
    },
    joinUsDesc: {
        fontSize: 16,
        marginTop: 12,
        marginBottom: 24
    },
    joinUsLinks: {
        fontSize: 16,
    }
});

const HomePage = (props) => {
    const classes = useStyles();

    return(
        <PageWrapper>
            <div className={"HomePage"}>
                <div className={"DSC-Vertical-Container-Home"}>
                    <DSC_Vertical_Icon
                        height={150}
                        width={600}
                    />
                </div>

                <div className={"Mission-Container"}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography className={classes.title}>
                                {HomeContent.missionStatement}
                            </Typography>

                            {HomeContent.summary.map((summarySection) => {
                                return(
                                    <Typography className={classes.summary}>
                                        {summarySection}
                                    </Typography>
                                )
                            })}

                        </CardContent>
                    </Card>
                </div>

                <div className={"Join-Us-Container"}>
                    <Card elevation={3}>
                        <CardContent>
                            <Typography className={classes.title}>
                                {HomeContent.joinUsStatement}
                            </Typography>

                            <Typography className={classes.joinUsDesc}>
                                {HomeContent.joinUsDesc}
                            </Typography>

                            <ul>
                                {HomeContent.joinUsLinkNames.map((linkName) => {
                                    const linkData = Links[linkName];
                                    return(
                                        <li>
                                            <Typography className={classes.joinUsLinks}>
                                                <a href={linkData.url}>{linkData.name}</a>
                                            </Typography>
                                        </li>
                                    )
                                })}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </PageWrapper>
    )
}

export default HomePage;