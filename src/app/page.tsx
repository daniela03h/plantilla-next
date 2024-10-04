"use client"

import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";

export default function Home() {
  return (
    <>
    <Input label="Nombre" id="name" type="text" placeholder="Daniela" name={"name"} required={true}/>
    <Button>Enviar</Button>
    </>
  );
}
