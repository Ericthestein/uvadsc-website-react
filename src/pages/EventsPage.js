import PageWrapper from "../components/PageWrapper";
import Links from "../data/Links";
import {Card, CardContent, Typography} from "@material-ui/core";

import "./pages.css";

const EventsPage = (props) => {

    return(
        <PageWrapper>
            <div className={"events-message-container"}>
                <Card elevation={3}>
                    <CardContent>
                        <Typography>To see our upcoming events, please visit <a href={Links.DSC.url}>our DSC website</a></Typography>
                    </CardContent>
                </Card>
            </div>
        </PageWrapper>
    )
}

export default EventsPage;