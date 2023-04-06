import React, { useState, useEffect, useCallback } from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import MainBoard from "@/common/main";

import Navigation from "../../components/analytics/navigation";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import Device from "../../components/analytics/device";
import Visitors from "@/components/analytics/visitor";
import Location from "../../components/analytics/location";

export default function AnalyticsPage() {
  const [navigationData, setNavigationData] = useState<object[]>([]);
  const [deviceData, setDeviceData] = useState<object[]>([]);
  const [countryData, setCountryData] = useState<object[]>([]);
  const [visitorData, setVisitorData] = useState<object[]>([]);
  const [visitTotal, setVisitTotal] = useState<number>(0);

  const navDataFB = useCallback(() => {
    const navRef = collection(db, "app_nav_data");
    onSnapshot(navRef, (querySnapshot) => {
      setNavigationData(
        querySnapshot.docs
          .filter((doc, index) => index !== 0)
          .map((doc) => ({
            id: doc.id,
            value: doc.data().count,
          }))
      );
    });
  }, []);
  const deviceDataFB = useCallback(() => {
    const deviceRef = collection(db, "app_device_data");
    onSnapshot(deviceRef, (querySnapshot) => {
      setDeviceData(
        querySnapshot.docs
          .filter((doc, index) => index !== querySnapshot.docs.length - 1)
          .map((doc) => ({
            id: doc.id,
            value: doc.data().count,
          }))
      );
    });
  }, []);
  const countryDataFB = useCallback(() => {
    const countryRef = collection(db, "app_country_data");
    onSnapshot(countryRef, (querySnapshot) => {
      setCountryData(
        querySnapshot.docs
          .filter((doc, index) => index !== querySnapshot.docs.length - 1)
          .map((doc) => ({
            id: doc.id,
            value: doc.data().count,
          }))
      );
    });
  }, []);

  const visitorDataFB = useCallback(() => {
    const visitorRef = collection(db, "app_visitor_data");
    onSnapshot(visitorRef, (querySnapshot) => {
      setVisitorData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          value: doc.data().count,
        }))
      );
    });
  }, []);

  useEffect(() => {
    navDataFB();
    deviceDataFB();
    countryDataFB();
    visitorDataFB();
  }, []);

  // console.log(visitorData, "Sdsad")
  return (
    <Layout>
      <Seo templateTitle="Daniel Olagunju" />

      <MainBoard>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex w-[100%] flex-col items-center justify-center bg-white px-4">
            User Page Navigation
            <Navigation navData={navigationData} />
          </div>
          <div className="flex w-[100%] flex-col items-center justify-center bg-white px-4">
            User Devices
            <Device deviceData={deviceData} />
          </div>
          <div className=" mt-10 w-[100%] flex-col items-center bg-white px-4 md:flex">
            <p className="text-center">Users Visits ({visitTotal})</p>
            <Visitors visitorData={visitorData} setVisitTotal={setVisitTotal} />
          </div>
          <div className=" mt-10 hidden w-[100%] flex-col items-center bg-white px-4 md:flex">
            Users Location (Country)
            <Location mapData={countryData} />
          </div>
        </div>
      </MainBoard>
    </Layout>
  );
}
