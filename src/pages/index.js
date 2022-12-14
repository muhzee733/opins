import React from "react"
import Layout from "../components/layout"
import HeaderOne from "../components/header-one"
import BannerOne from "../components/banner-one"
import FunFact from "../components/funfact"
import Services from "../components/services"
import FeatureOne from "../components/feature-one"
import FeatureTwo from "../components/feature-two"
import Pricing from "../components/pricing"
import Testimonials from "../components/testimonials"
import Brands from "../components/brands"
import Faq from "../components/faq"
import BlogHome from "../components/blog-home"
import Subscribe from "../components/subscribe"
import Footer from "../components/footer"
import Seo from "../components/seo"

const Home = () => {
  return (
    <Layout pageTitle="Home One || Opins React Next Template">
      <Seo title="Home One" />
      <HeaderOne />
      <BannerOne />
      <FunFact />
      <Services />
      <FeatureTwo />
      <FeatureOne />
      <Pricing />
      <Testimonials />
      <Brands />
      <Faq />
      <BlogHome />
      <Subscribe />
      <Footer />
    </Layout>
  )
}

export default Home
