import { AppProps } from 'next/app';
import type { NextPage } from 'next';
import {useEffect, useState} from 'react';

import '@/styles/globals.css';
import '@/styles/main.css'
import  {db} from '../firebase/index';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import {
  useGetUserLocation,
  useUserDevice,
  useIsUserUnique,
  useUserNavigation,
} from '@todak2000/react-user-analytics';

import { addDoc, increment, collection, updateDoc, setDoc, Timestamp, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";
export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { pathname } = useRouter();

  const {country, city} = useGetUserLocation();
  const uniqueUser:boolean = useIsUserUnique();
  // const nav: string = useUserNavigation();
  const device: string = useUserDevice();


  const handleVisitorData = async () => { 
    try {
      if (uniqueUser === true) {
        const visitorRef = doc(db, "app_visitor_data", "Unique")
      await setDoc(visitorRef, {count: increment(1)}, {merge: true})
      .then(res=>console.log("unique visitor data added to store"));
      }
      else if (uniqueUser === false) {
        const visitorRef = doc(db, "app_visitor_data", "Regular")
      await setDoc(visitorRef, {count: increment(1)}, {merge: true})
      .then(res=>console.log("regular visitor data added to store"));
      }
      
     
    } catch (error) {
      console.log(error, "device error")
    }
  }

  const handleDeviceData = async () => { 
    try {
      if (device) {
        const deviceRef = doc(db, "app_device_data", device)
      await setDoc(deviceRef, {count: increment(1)}, {merge: true})
      // .then(res=>console.log("device data added to store"));
      }
      
     
    } catch (error) {
      console.log(error, "device error")
    }
  }

  const handleCountryData = async () => { 
    try {
      if (country !== null) {
        const countryRef = doc(db, "app_country_data", country)
        await setDoc(countryRef, {count: increment(1)}, {merge: true})
        // .then(res=>console.log("country data added to store"));
      }
      
     
    } catch (error) {
      console.log(error, "country error")
    }
  }

  let screen: string;

  if (pathname == '/') {
    screen = 'home'
  }
  else{
    screen = pathname.replace('/','')
  }
  // if (nav == '/') {
  //   screen = 'home'
  // }
  // else{
  //   screen = nav.replace('/','')
  // }


  const handleNavData = async () => { 
    try {
      const navRef = doc(db, "app_nav_data", screen)
      await setDoc(navRef, {count: increment(1)}, {merge: true})
      // .then(res=>console.log("nav data added to store"));
     
    } catch (error) {
      console.log(error, "nav error")
    }
  }
  useEffect(() => {
    console.log(uniqueUser)
    if (uniqueUser !== null ) {
      handleVisitorData()
    }
   
  }, [])

    useEffect(() => {handleCountryData()}, [country])
    useEffect(() => {handleDeviceData()}, [device])
    
    useEffect(() => {
      handleNavData()
      console.log("anain")
    }, [pathname])
    

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
