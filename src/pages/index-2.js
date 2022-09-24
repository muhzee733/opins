import React from "react"
import Layout from "../components/layout"
import HeaderTwo from "../components/header-two"
import BannerTwo from "../components/banner-two"
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

const HomeTwo = () => {
  return (
    <Layout>
      <Seo title="Home Two" />
      <HeaderTwo />
      <BannerTwo />
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

export default HomeTwo
