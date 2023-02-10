
import React, {useState, useEffect, useCallback} from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import MainBoard from '@/common/main';

import Navigation  from '../../components/analytics/navigation';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase';
import Device  from '../../components/analytics/device';
import Visitors from '@/components/analytics/visitor';
import Location from '../../components/analytics/location';

export default function AnalyticsPage() {
    const [navigationData, setNavigationData] = useState<object[]>([]);
    const [deviceData, setDeviceData] = useState<object[]>([]);
    const [countryData, setCountryData] = useState<object[]>([]);
    const [visitorData, setVisitorData] = useState<object[]>([]);
    const [visitTotal, setVisitTotal] = useState<number>(0);

    const navDataFB = useCallback(
        () => {
            const navRef = collection(db, "app_nav_data");
            onSnapshot(navRef, (querySnapshot)=>{
                setNavigationData(querySnapshot.docs.filter((doc, index)=> index !== 0 ).map(doc=>({
                    id: doc.id,
                    value: doc.data().count
                })))
            })
        },
        [],
    )
    const deviceDataFB = useCallback(
        () => {
            const deviceRef = collection(db, "app_device_data");
            onSnapshot(deviceRef, (querySnapshot)=>{
                setDeviceData(querySnapshot.docs.filter((doc, index)=> index !== (querySnapshot.docs.length -1) ).map(doc=>({
                    id: doc.id,
                    value: doc.data().count
                })))
            })
        },
        [],
    )
    const countryDataFB = useCallback(
        () => {
            const countryRef = collection(db, "app_country_data");
            onSnapshot(countryRef, (querySnapshot)=>{
                setCountryData(querySnapshot.docs.filter((doc, index)=> index !== (querySnapshot.docs.length -1) ).map(doc=>({
                    id: doc.id,
                    value: doc.data().count
                })))
            })
        },
        [],
    )

    const visitorDataFB = useCallback(
        () => {
            const visitorRef = collection(db, "app_visitor_data");
            onSnapshot(visitorRef, (querySnapshot)=>{
                setVisitorData(querySnapshot.docs.map(doc=>({
                    id: doc.id,
                    value: doc.data().count
                })))
            })
        },
        [],
    )

    useEffect(() => {
        navDataFB();
        deviceDataFB();
        countryDataFB();
        visitorDataFB();
    }, [])
    
    
   
    
    // console.log(visitorData, "Sdsad")
  return (
    <Layout>
      <Seo templateTitle='Daniel Olagunju' />
      
      <MainBoard >
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
        <div className="w-[100%] bg-white px-4 flex flex-col justify-center items-center">
            User Page Navigation
            <Navigation navData={navigationData}/>
        </div>
        <div className="w-[100%] bg-white px-4 flex flex-col justify-center items-center">
            User Devices
            <Device deviceData={deviceData}/>
        </div>
        <div className=" w-[100%] mt-10 bg-white px-4 md:flex flex-col items-center">
            <p className='text-center'>Users Visits ({visitTotal})</p>
            <Visitors visitorData={visitorData} setVisitTotal={setVisitTotal}/>
        </div>
      <div className=" hidden w-[100%] mt-10 bg-white px-4 md:flex flex-col items-center">
            Users Location (Country)
            <Location mapData={countryData}/>
        </div>
      </div>
      
      </MainBoard>
    </Layout>
  );
}