"use client";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./styles.module.scss";
import Button from "@/app/components/Button";
import Icon from "@/app/components/Icon";
import { useRef } from "react";
import Image from "next/image";

export default function LocationMap() {
  const mapRef = useRef(null);

  const onZoomIn = () => {
    mapRef.current.getMap().zoomIn();
  };

  const onZoomOut = () => {
    mapRef.current.getMap().zoomOut();
  };

  return (
    <div className={styles.Wrapper}>
      <Map
        ref={mapRef}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN}
        mapStyle={process.env.NEXT_PUBLIC_MAP_STYLE}
        initialViewState={{
          latitude: 40.416775,
          longitude: -3.70379,
          zoom: 12,
        }}
        className={styles.Map}
        maxZoom={15}
        minZoom={3}
        dragPan={false}
      >
        <Marker latitude={40.416775} longitude={-3.70379}>
          <div className={styles.Marker}>
            <Image
              src="/img/me.png"
              alt="david's emoji"
              width={60}
              height={60}
            />
          </div>
        </Marker>
      </Map>
      <div className={styles.Actions}>
        <Button onClick={onZoomIn} className={styles.Button} icon>
          <Icon size={18} name="plus" />
        </Button>
        <Button onClick={onZoomOut} className={styles.Button} icon>
          <Icon size={18} name="minus" />
        </Button>
      </div>
    </div>
  );
}
