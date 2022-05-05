import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Heading, Paragraph } from "theme-ui";
import CinemaScope from "../components/CinemaScope";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <CinemaScope>
      <Heading
        as="h1"
        sx={{
          fontSize: "5vw",
          textAlign: "center"
        }}
      >
        Sietämättömän losouden
        <br />
        massiivinen taakka
      </Heading>
      <Paragraph
        sx={{
          fontSize: "2vw"
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium eu
        erat eget condimentum. Integer at vestibulum urna. Aliquam et massa a
        magna blandit imperdiet ut suscipit dui. In ut sapien eget lorem
        interdum congue. Quisque quis pellentesque diam. Fusce lobortis ligula a
        diam finibus, a malesuada purus hendrerit. Donec convallis, turpis
        finibus rhoncus aliquam, turpis sapien lobortis mi, eget ultrices arcu
        enim nec leo. Etiam vestibulum lectus nulla, eu viverra magna convallis
        nec. Nullam id vehicula libero. In hac habitasse platea dictumst.
      </Paragraph>
    </CinemaScope>
  );
};

export default Home;
