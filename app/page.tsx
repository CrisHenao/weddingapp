"use client";

import { url } from "inspector";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import BgMain from "../public/images/mainphoto.jpg";
import BgInvitation from "../public/images/invitationimage.jpg";
import BugaHotel from "../public/images/hotelbuga.jpg";
import {
  Button,
  Link,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { LocationIcon } from "../public/svg/Location";
import { Invitacion, invitaciones } from "../public/data/InformacionInvitados";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [info, setInfo] = useState<Invitacion>({
    id: 0,
    mainName: "",
    guestsNumber: 0,
    codeToEnter: 0,
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí deberías hacer una llamada a tu API o lógica para obtener la información basada en el código
    invitaciones.map((invitacion) => {
      if (code == invitacion.codeToEnter.toString()) {
        setSubmitted(true);
        setInfo(invitacion);
      } else {
        //Alerta de que el codigo es incorrecto
        console.log("Incorrecto el codigo...");
        // onOpen();
      }
    });
  };

  return (
    <main className="">
      {!submitted ? (
        <section className="h-screen">
          <div
            className=""
            style={{
              backgroundImage: `url(${BgInvitation.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderBottomLeftRadius: 64,
              borderBottomRightRadius: 64,
              height: "55%",
            }}
          ></div>
          <section className="flex flex-col justify-center items-center mt-4">
            <h1 className="font-bold text-4xl great-vibes-regular">
              Yosef & Keter
            </h1>
            <h2 className="font-semibold text-2xl great-vibes-regular">
              Wedding Invitation
            </h2>
            <p className="font-light mt-8 px-6 text-center text-slate-500">
              Por favor, ingrese el código que se le asignó para abrir su
              invitación. Si no lo recuerda, por favor, contacte al novio o a la
              novia para que se le reenvíe.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-8 w-full px-12"
            >
              {/* <input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              /> */}
              <Input
                type="text"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                variant="underlined"
                placeholder="Código de acceso."
                className="w-full"
              />
              <Button type="submit" color="primary" className="mt-4">
                Ingresar
              </Button>
            </form>
          </section>
        </section>
      ) : (
        <section>
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
                <h2 className="font-normal text-4xl">
                  05&middot;01&middot;2025
                </h2>
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
              <h2 className="text-black font-bold text-3xl great-vibes-regular">
                {info.mainName}
              </h2>
              <p className="text-black text-justify pt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, numquam accusantium porro nam aut nemo accusamus
                laborum animi autem quibusdam odit. Magni quaerat nesciunt
                culpa, nostrum amet excepturi quo tempore.
              </p>
            </section>
          </Parallax>
          {/* Seccion para la ubicacion del evento y el listado de precios que tendrá el Hotel para el día de la boda */}
          <section className="w-full flex flex-col items-center mt-12 px-8 pb-12">
            <h1 className="font-bold text-4xl great-vibes-regular">
              Ubicación
            </h1>
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
                <Link
                  href="https://maps.app.goo.gl/kmYxFuWQSJdprgvN6"
                  isExternal
                >
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
                Te recomendamos que te quedes en el Hotel, aquí estarás mas
                comodo despues de la celebración. AJUSTAR MENSAJE...
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
        </section>
      )}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Información</ModalHeader>
          <ModalBody>
            <p>
              El código ingresado es incorrecto. Por favor, verifíquelo y vuelva
              a intentarlo.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </main>
  );
}
