import "react-responsive-carousel/lib/styles/carousel.min.css";
import CoverSection from '../components/home/cover-section/cover-section.jsx';
import LocationSection from '../components/home/location-section/location-section.jsx';
import AppSection from '../components/home/app-section/app-section.jsx';
import BriefSection from '../components/brief-section/brief-section.jsx';
import Contribute from '../components/home/contribute/contribute.jsx';
import PraySection from '../components/home/pray-section/pray-section.jsx';
import styles from '../styles/Home.module.scss'
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { getPhotos } from '../domains/photos'

export default function Home(props) {
  const photos = props.photos;

  return (
    <main className={styles.container}>
      <ToastContainer />

      <CoverSection />

      <BriefSection />

      <PraySection photos={photos} />

      <Contribute></Contribute>

      <LocationSection />

      <AppSection></AppSection>

    </main>
  )
}

export async function getStaticProps() {
  const photos = await getPhotos();

  return {
    props: {
      photos: photos
    }
  }
}
