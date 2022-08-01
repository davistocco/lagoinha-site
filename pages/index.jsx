import { faCamera, faClock, faLocationDot, faPlaceOfWorship, faPrayingHands, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CoverSection from '../components/home/cover-section/cover-section.jsx';
import LocationSection from '../components/home/location-section/location-section.jsx';
import Subtitle from '../components/subtitle/subtitle.jsx';
import AppSection from '../components/home/app-section/app-section.jsx';
import BriefSection from '../components/brief-section/brief-section.jsx';
import Contribute from '../components/home/contribute/contribute.jsx';
import PraySection from '../components/home/pray-section/pray-section.jsx';
import Button from '../components/button/button.jsx';
import styles from '../styles/Home.module.scss'
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Input from '../components/input/input.jsx';
import Form from '../components/form/form.jsx';
import { getPhotos } from '../domains/photos'
import Textarea from '../components/textarea/textarea.jsx';

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

export async function getServerSideProps() {
  const photos = await getPhotos();

  return {
    props: {
      photos: photos
    }
  }
}
