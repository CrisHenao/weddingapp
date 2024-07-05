"use client";

import { url } from "inspector";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import BgMain from "../public/images/mainphoto.jpg";
import BugaHotel from "../public/images/hotelbuga.jpg";
import { Button, Link } from "@nextui-org/react";
import { LocationIcon } from "../public/svg/Location";

export default function Home() {
  return (
    <main className="">
      <section className="main-section">
        <div
          style={{
            backgroundImage: `url(${BgMain.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-screen w-full flex flex-col items-center justify-between"
        >
          <div className="mt-4">
            <h3 className="font-semibold text-2xl">Nos casamos</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-5xl great-vibes-regular">
              Yosef & Keter
            </h1>
            <h2 className="font-normal text-4xl">05&middot;01&middot;2025</h2>
          </div>
          <div>
            <h4>Normal</h4>
          </div>
        </div>
      </section>
      {/* Secccion para un mensaje hacia los invitados */}
      <Parallax>
        <section
          className="bg-white p-8 text-center"
          style={{ marginTop: "-20px" }}
        >
          <h2 className="text-black font-bold text-3xl">Mensaje lindo !</h2>
          <p className="text-black text-justify pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            numquam accusantium porro nam aut nemo accusamus laborum animi autem
            quibusdam odit. Magni quaerat nesciunt culpa, nostrum amet excepturi
            quo tempore.
          </p>
        </section>
      </Parallax>
      {/* Seccion para la ubicacion del evento y el listado de precios que tendrá el Hotel para el día de la boda */}
      <section className="w-full flex flex-col items-center mt-12 px-8 pb-12">
        <h1 className="font-bold text-4xl great-vibes-regular">Ubicación</h1>
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="mt-12 font-semibold text-2xl text-center">
            Hotel Guadalajara de Buga
          </h2>
          <Image
            src={BugaHotel}
            alt="Fotografia del hotel guadalajara de buga"
            width={250}
            height={300}
            className="rounded-full aspect-square object-cover"
          />
          <div className="text-center">
            <h5>CALLE 1 #13 - 33</h5>
            <h5>BUGA - VALLE - COLOMBIA</h5>
          </div>
          <div className="">
            <Link href="https://maps.app.goo.gl/kmYxFuWQSJdprgvN6" isExternal>
              <Button
                color="primary"
                startContent={
                  <LocationIcon
                    filled={undefined}
                    size={undefined}
                    height={undefined}
                    width={undefined}
                    label={undefined}
                  />
                }
              >
                Como llegar
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Seccion para el tema del hospedaje */}
      <section className="bg-white p-8">
        <div className="flex flex-col gap-12">
          <h2 className="font-bold text-4xl great-vibes-regular text-black text-center">
            Informacion de Hospedaje
          </h2>
          <p className="text-black">
            Te recomendamos que te quedes en el Hotel, aquí estarás mas comodo
            despues de la celebración. AJUSTAR MENSAJE...
          </p>
        </div>
        <div></div>
      </section>
      {/* Seccion para la parte de la confirmacion de la boda */}
      <section></section>
      {/* Seccion para el contador de la boda */}
      <section></section>
      {/* Seccion para el dress code */}
      <section></section>
    </main>
  );
}
