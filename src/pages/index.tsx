import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Container } from "@chakra-ui/react";
import Meta from "@/components/Meta";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Meta page="Home" />
      <Navbar />
      <Header />
    </Layout>
  );
}
