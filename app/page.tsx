"use client";

import { url } from "inspector";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import BgMain from "../public/images/mainphotoazul.png";
import BgInvitation from "../public/images/invitationimage.jpg";
import BugaHotel from "../public/images/hotelbuga.jpg";
import DressCodeMan from "../public/images/etiquetaformalman.png";
import DressCodeWomen from "../public/images/etiquetaformalwomen.png";
import FloralDividerTop from "../public/images/divider/floral.png";
import FloralDividerBottom from "../public/images/divider/floralbottom.png";
import {
  Button,
  Link,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { LocationIcon } from "../public/svg/Location";
import { Invitacion, invitaciones } from "../public/data/InformacionInvitados";
import { useState } from "react";
import Countdown from "./Countdown";

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
          <p className="font-light mt-8 px-6 text-center text-slate-500 pb-4">
            Te recomendamos ver la invitación desde un dispositivo movil.
          </p>
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
                <h3 className="font-bold text-4xl text-white great-vibes-regular">
                  ¡ Nos casamos !
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-6xl great-vibes-regular text-white text-center">
                  Yosef & Keter
                </h1>
                <h2 className="font-normal text-5xl text-white great-vibes-regular">
                  26&middot;01&middot;2025
                </h2>
              </div>
              <div>
                <h4>.</h4>
              </div>
            </div>
          </section>
          {/* Secccion para un mensaje hacia los invitados */}
          <section
            className="p-8 text-center bg-[#275f7a] text-white flex flex-col items-center"
            style={{ marginTop: "-20px" }}
          >
            <Image src={FloralDividerTop} alt="Divisor con imagen de flores" />
            <h2 className="text-black font-bold text-3xl great-vibes-regular text-white mt-8">
              {info.mainName}
            </h2>
            <p className="text-black text-center pt-6 text-white">
              {info.codeToEnter == 7945 ? (
                <span>
                  <strong>Papito</strong> <br />
                  ¡Eres invitado de honor, eres el Papá de la Novia! <br />
                  <br />
                  Agradezco al Creador del Universo por tu preciada vida, porque
                  gracias a tu existencia mi vida pudo ser en esta tierra y
                  ahora con tu exaltación tengo el privilegio de formar mi
                  propio hogar junto a Yosef. <br />
                  <br />
                  Te amo, eres mi Papito, mi primer amor y seré por siempre tu
                  Osita.
                </span>
              ) : info.codeToEnter == 2318 ? (
                <span>
                  <strong>Mamita</strong> <br /> ¡Eres invitada de honor, eres
                  la mamá de la novia! <br />
                  <br />
                  Gracias al Creador por tu hermosa existencia y haberme dado
                  vida a través de ti, gracias por tu amor y darme lo mejor de
                  ti para que hoy pueda tener el privilegio de iniciar esta
                  nueva etapa. <br />
                  <br />
                  Te amo mamá de mi corazón, mi reinita. ¡Gracias por ser parte
                  de mi alegría!
                </span>
              ) : info.codeToEnter == 2730 ? (
                <span>
                  <strong>Amados padres.</strong> En este momento de mi vida doy
                  gracias a su majestad YAHVEH por darme el privilegio de
                  tenerlos como padres, de poder recibir de ustedes los consejos
                  pertinentes y correctos para que mi vida sea moldeada y esté
                  camino a contraer matrimonio con la mujer que he escogido para
                  mi vida. La mujer cuyos atributos no distan de los principios
                  éticos y morales que ustedes me han dado. Ya pronto su pequeño
                  hijo estará casado y esto será gracias a ustedes dos. Al
                  pequeño Yitzhak le encomiendo la tarea de cuidar de ustedes en
                  el amor y la honra que nos han enseñado a darles. De ser ese
                  bastón en la vejez. Nunca dejaré de preocuparme por ustedes,
                  por más lejos o cerca que esté. Serán una de mis prioridades
                  junto con mi hermanito. <br />
                  <strong>Los amo, y nos vemos en la boda.</strong>
                </span>
              ) : (
                "Tenemos el placer y honor de hacerlos partícipes de uno de los días más especiales de nuestras vidas. Esperamos que puedan acompañarnos y compartir la alegría de esta gran celebración."
              )}
            </p>
            <h5 className="font-semibold mt-4">
              {info.codeToEnter == 2318 || info.codeToEnter == 7945 ? (
                ""
              ) : (
                <span>
                  Invitación válida para {info.guestsNumber}{" "}
                  {info.guestsNumber > 1 ? "personas." : "persona."}
                </span>
              )}
            </h5>
            <h5 className="font-light mt-4 text-white mb-8">
              {info.codeToEnter == 8388 ? (
                <span>
                  Ohad Ben Osher, recuerda que tú leerás la Ketuvah. Así que
                  prepara tu voz y ahí nos vemos &#127867;
                </span>
              ) : info.codeToEnter == 4422 ? (
                <span>
                  Biniamin, recuerda que tú serás uno de los testigos de la
                  boda. Te esperamos sin falta &#127867;
                </span>
              ) : info.codeToEnter == 6498 ? (
                <span>
                  Yissaḥar, recuerda que tú serás uno de los testigos de la
                  boda. Te esperamos sin falta &#127867;
                </span>
              ) : (
                ""
              )}
            </h5>
            <Image
              src={FloralDividerBottom}
              alt="Divisor con imagen de flores"
            />
          </section>
          {/* Seccion para la ubicacion del evento y el listado de precios que tendrá el Hotel para el día de la boda */}
          <section className="w-full flex flex-col items-center px-8 py-12 bg-white">
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
                    variant="shadow"
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
          <section className="p-8 bg-[#275f7a] text-white">
            <div className="flex flex-col gap-12">
              <h2 className="font-bold text-4xl great-vibes-regular text-center">
                Información de Hospedaje
              </h2>
              <p className="">
                Te recomendamos que te quedes en el hotel, aquí estarás más
                cómodo antes y después de la celebración. <br />
                <br />
                <strong>Nota:</strong> No es obligatorio que así sea, pero sería
                lindo que el día después de la boda pudiéramos reunirnos y
                disfrutar juntos de nuestro primer desayuno como esposos.
              </p>
            </div>
            <div className="mt-8 text-black">
              <Table>
                <TableHeader>
                  <TableColumn>.</TableColumn>
                  <TableColumn>Sencilla</TableColumn>
                  <TableColumn>Doble</TableColumn>
                  <TableColumn>Triple</TableColumn>
                  <TableColumn>Cuádruple</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Estándar</TableCell>
                    <TableCell>$270.000</TableCell>
                    <TableCell>$309.000</TableCell>
                    <TableCell>$359.500</TableCell>
                    <TableCell>$479.000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Junior Suite</TableCell>
                    <TableCell>$328.000</TableCell>
                    <TableCell>$391.000</TableCell>
                    <TableCell>NA</TableCell>
                    <TableCell>NA</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="my-4 text-white text-center">
                <p>*Tarifa en moneda local</p>
              </div>
              <p className="font-light mt-4 text-center text-white">
                <strong>Incluye:</strong> desayuno en la terraza de la piscina.
                Disfrutar de los servicios del Hotel, piscina semiolímpica,{" "}
                <strong>Nota:</strong> SPA y salón de belleza (costo adicional).
                <br />
                El día hotelero inicia a las 3:00 p.m. y finaliza a la 1:00 p.m.
                No incluye seguro hotelero $7.000 por persona por noche y es
                opcional del huésped asumirlo. <br />
                <strong>
                  Requiere reserva previa y depósito para garantía del 50%.
                </strong>
                <br />
                Tarifas aplican únicamente para los asistentes al evento
              </p>
            </div>
            <div className="text-center mt-8">
              <h3 className="font-semibold">
                Contacto departamento de reservas.
              </h3>
              <h4>Teléfono: +57 2 2362611</h4>
              <h4>Celular: +57 317 638 8417</h4>
              <h4>Email: reservas@hotelguadalajara.com.co</h4>
              <p>
                <strong>Nota: </strong>Si eres del extranjero recuerda solicitar
                la tarifa de hospedaje en dólares.
                <br />
                <br />
                <strong>
                  Puedes descargar la información de hospedaje con las tarifas
                  en dólares en el siguiente link:
                </strong>
                <br />
                <a
                  href="https://drive.google.com/file/d/1GVbfNbVbOTHQyLF953Gbt59vMwgn7Lnz/view?usp=sharing"
                  target="_blank"
                  style={{ textDecoration: "underline" }}
                >
                  Descargar información
                </a>
              </p>
            </div>
            <div className="text-center mt-8">
              <p>
                Por favor toma en consideración que la fecha de la boda es
                temporada alta para hospedaje, por lo que entre más pronto
                reserves podrás asegurar tu lugar en el hotel.
              </p>
            </div>
            <div className="w-full mt-12 mb-8 flex justify-center align-center">
              <Image
                src={FloralDividerBottom}
                alt="Divisor con imagen de flores"
              />
            </div>
          </section>
          {/* Seccion para la parte de la confirmacion de la boda */}
          <section className="p-8 flex flex-col justify-center">
            <h2 className="font-bold text-4xl great-vibes-regular text-black text-center">
              Confirmación de asistencia.
            </h2>
            <p className="mt-8 text-center font-light">
              Para nosotros es muy importante que confirmes esta invitación,
              para saber si contamos con tu especial compañía. Agradecemos que
              nos confirmes tu asistencia antes e incluso del 2 de Diciembre de
              2024.
            </p>
            <Link
              href="https://forms.gle/ojutY3tup1bzSHNp8"
              isExternal
              className="w-full"
            >
              <Button color="primary" variant="shadow" className="mt-8 w-full">
                Confirma por formulario
              </Button>
            </Link>
          </section>
          {/* Seccion para el contador de la boda */}
          <section className="p-8 flex flex-col justify-center bg-[#275f7a] text-white items-center">
            <h2 className="font-bold text-4xl great-vibes-regular text-black text-center text-white">
              Contador para el gran día.
            </h2>
            <div className="mt-12 mb-8">
              <Countdown targetDate="2025-01-26T16:59:59" />
            </div>
            <Image
              src={FloralDividerBottom}
              alt="Divisor con imagen de flores"
            />
          </section>
          {/* Seccion para el dress code */}
          <section className="p-8 flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl great-vibes-regular text-black text-center">
              Código de vestimenta
            </h2>
            <div className="mt-8 w-3/4 border rounded-full aspect-square object-cover flex flex-col justify-center items-center">
              <Image
                src={DressCodeMan}
                alt="Fotografia del hotel guadalajara de buga"
                width={250}
                height={300}
                className=""
              />
            </div>
            <div className="mt-8 w-3/4 border rounded-full aspect-square object-cover flex flex-col justify-center items-center">
              <Image
                src={DressCodeWomen}
                alt="Fotografia del hotel guadalajara de buga"
                width={250}
                height={300}
                className=""
              />
            </div>
            <h2 className="mt-8 font-semibold text-2xl text-center great-vibes-regular">
              Formal, no estampados.
            </h2>
          </section>
          <section className="p-8 flex flex-col justify-center bg-[#275f7a] text-white items-center">
            <h2 className="font-bold text-4xl great-vibes-regular text-black text-center text-white">
              Información
            </h2>
            <p className="text-white text-center mt-8 text-1xl">
              Cualquier información adicional con respecto a la boda, a
              continuación aparecen los números de contacto de los novios:
            </p>
            <div className="mt-8 mb-8">
              <h5 className="text-white  text-center mt-2 text-1xl">
                Celular novio: +57 310 415 7860
              </h5>
              <h5 className="text-white text-center  mt-2 text-1xl">
                Celular novia: +502 5595 9443
              </h5>
            </div>
            <Image
              src={FloralDividerBottom}
              alt="Divisor con imagen de flores"
            />
          </section>
          <footer className="bg-black h-1/2 flex flex-col justify-center items-center p-8">
            <p className="text-white text-center text-2xl great-vibes-regular">
              Esperamos contar con tu participación en este gran día.
            </p>
          </footer>
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
