import PageWrapper from "../components/PageWrapper";
import AboutUs from "../data/AboutUs";
import TeamMember from "../components/TeamMember";

import "./pages.css";

const AboutPage = (props) => {

    let i = 0;
    return(
        <PageWrapper>

            <div className={"TeamMembers"}>
                {AboutUs.map((teamMemberData) => {
                    const alignmentStyle = i % 2 === 0 ? "TeamMemberContainerLeft" : "TeamMemberContainerRight";
                    i++;
                    return(
                        <div className={"TeamMemberContainer " + alignmentStyle}>
                            <div className={"TeamMemberInnerContainer"}>
                                <TeamMember
                                    title={teamMemberData.title}
                                    name={teamMemberData.name}
                                    avatar={teamMemberData.avatar}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </PageWrapper>
    )
}

export default AboutPage;