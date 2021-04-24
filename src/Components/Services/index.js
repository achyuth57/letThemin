import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./servicesElements";
const Services = () => {
  return (
    <>
      <ServicesContainer>
        {/* <ServicesH1>Our Services</ServicesH1> */}
        <ServicesWrapper>
          {/* <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Political Poll</ServicesH2>
            <ServicesP>
              Create your own poll to learn who your audience is most likely to
              vote for. See all answers in a comprehensive report.
            </ServicesP>
          </ServicesCard> */}
          {/* <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Movie Poll</ServicesH2>
            <ServicesP>
              Use polls with funny or cultural content to differentiate yourself
              from boring corporate rivals..
            </ServicesP>
          </ServicesCard> */}
          {/* <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Social Poll</ServicesH2>
            <ServicesP>
              Get feedback on future content from your audience. It works on all
              devices.
            </ServicesP>
          </ServicesCard> */}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
