/*import { NextPage } from "next";
import Head from 'next/head'
import { Cleanup } from "../../Cleanup";
import { CleanupDisplay } from "../components/CleanupDisplay";

const Feed: NextPage = () => {
  let cleanups: Array<Cleanup> = [];

  cleanups = [
    new Cleanup(
      'Lady Bird Lake Cleanup',
      'Come help out Austin',
      'First St Bridge. Austin, TX 78701',
      new Date(Date.now()),
      new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours after now
      ['https://www.kxan.com/wp-content/uploads/sites/40/2022/08/Trash-building-up-in-Lady-Bird-Lake.png?w=1280']
    ),
    new Cleanup(
      'Galveston Beach',
      'Clear our beaches',
      '6285 Seawall Blvd, Galveston, TX 77551',
      new Date(Date.now() + 48 * 60 * 60 * 1000),
      new Date(Date.now() + 52 * 60 * 60 * 1000),
      ['https://media.12newsnow.com/assets/KJAC/images/5716aaab-ac60-408e-a4c4-003ddff39240/5716aaab-ac60-408e-a4c4-003ddff39240_750x422.jpg']
    )
  ];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {cleanups.map((cleanup, index) => <CleanupDisplay key={index} cleanup={cleanup} />)}
    </div>
  );
}

export default Feed;

 */

import Head from "next/head";
// @ts-ignore
import { Col, Row } from "reactstrap";
// @ts-ignore
import SalesChart from "../src/components/dashboard/SalesChart";
// @ts-ignore
import Feeds from "../src/components/dashboard/Feeds";
// @ts-ignore
import ProjectTables from "../src/components/dashboard/ProjectTable";
// @ts-ignore
import Blog from "../src/components/dashboard/Blog";
import bg1 from "../src/assets/images/bg/bg1.jpg";
import bg2 from "../src/assets/images/bg/bg2.jpg";
import bg3 from "../src/assets/images/bg/bg3.jpg";
import bg4 from "../src/assets/images/bg/bg4.jpg";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

export default function Home() {
  return (
      <div>
        <Head>
          <title>Monster Free Next Js Dashboard Template</title>
          <meta
              name="description"
              content="Monster Free Next Js Dashboard Template"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          {/***Sales & Feed***/}
          <Row>
            <Col sm="12" lg="6" xl="7" xxl="8">
              <SalesChart />
            </Col>
            <Col sm="12" lg="6" xl="5" xxl="4">
              <Feeds />
            </Col>
          </Row>
          {/***Table ***/}
          <Row>
            <Col lg="12" sm="12">
              <ProjectTables />
            </Col>
          </Row>
          {/***Blog Cards***/}
          <Row>
            {BlogData.map((blg) => (
                <Col sm="6" lg="6" xl="3" key={blg.title}>
                  <Blog
                      image={blg.image}
                      title={blg.title}
                      subtitle={blg.subtitle}
                      text={blg.description}
                      color={blg.btnbg}
                  />
                </Col>
            ))}
          </Row>
        </div>
      </div>
  );
}

