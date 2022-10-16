import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FormElement ,Button, Spacer, Input, Grid, Card, Text, Checkbox } from "@nextui-org/react";
import Header from "../components/Header";

type UserType = {
  rut: string
  nombre: string
  apellido: string
  correo:string
  pass: string
  roles: number[]
};

function Formulario() {
    const maradona = useNavigate();
    const rol_tags = ["gerente", "administrador", "analista"];
    const [selected, setSelected] = useState<string[]>([]);
    const [state, setState] = useState<UserType>({
        nombre: "",
        apellido: "",
        pass: "",
        correo: "",
        rut: "",
        roles: []
      });

    function handleChange(e: React.ChangeEvent<FormElement>) {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value,
        });
      }

      const handleCheckbox = (e: string[]) => {
        console.log(e);
        let newRolTags : number[] = [];
        for (let i of e){
          newRolTags.push(1+rol_tags.indexOf(i));
        }
        setState((state) => {
          return({
            ...state,
            roles: newRolTags
          });
        });
        setSelected(e);
      }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement,  MouseEvent>) => {
      //e.preventDefault();
  
      console.log('handleClick 👉️', state);
    }; 
         

    return (
        <Grid.Container justify="center">
            <Input width="75%" placeholder="Nombre(s)" type="text" name="nombre" onChange={handleChange} value={state.nombre}/>
            <Spacer y={3} />
            <Input width="75%" placeholder="Apellido(s)" type="text" name="apellido" onChange={handleChange} value={state.apellido}/>
            <Spacer y={3} />

            <Input width="75%" placeholder="Correo" type="text" name="correo" onChange={handleChange} value={state.correo}/>
            <Spacer y={3} />
            <Input width="75%" placeholder="Contraseña" type="text" name="pass" onChange={handleChange} value={state.pass}/>
            <Spacer y={3} />

            <Input width="75%" placeholder="RUT" type="text" name="rut" onChange={handleChange} value={state.rut}/>
            <Spacer y={3} />

                <Grid.Container justify="center">
                
                <Checkbox.Group
                    label="Roles"
                    orientation="horizontal"
                    color="primary"
                    value={selected}
                    onChange={handleCheckbox}
                    >
                    <Checkbox value="gerente">Gerente</Checkbox>
                    <Checkbox value="administrador">Administrador</Checkbox>
                    <Checkbox value="analista">Analista</Checkbox>
                </Checkbox.Group>
                <Spacer y={6}/>
                </Grid.Container>
                <Button onClick={handleClick}>Editar</Button>
                    <Spacer x={0.5} />
                    <Button onClick={() => {maradona("/administrador")}} color="error" >Salir</Button> 
 
        </Grid.Container>
    );
  }

export default Formulario