import './output.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import SwitchSelector from "react-switch-selector";
import AccordionBike from './Accordion';
import { useEffect } from 'react';


function App(){
    const [isSwapped, setIsSwapped] = useState(false)
    const [buttonActive, setButtonActive] = useState(1)
    const [heightBici, setHeightBici] = useState(1)

    const data = isSwapped ? {
        description: {
            h1: "Sálgase de lo común, monte una bicicleta de diseño Italiano, de marco aerodinámico, de la más alta tecnología en su rango.",
            peso: "Peso: 11 kg",
            tenedor: "Tenedor: Carbono – Aprobado UCI",
            tipoDeMarco: "Tipo de Marco: Aerodinámico en Aluminio -Aprobado por la UCI – Cableado Totalmente Interno",
            tamañoDeLasLlantas: "Tamaño de las Llantas: 700C – con eje pasante E-thru",
            frenos: "Frenos: Hidraúlicos L-twoo",
            grupo: "Grupo: Cambiador, descarrilador y tensor Shimano 105 7120 de 12 velocidades",
            manubrio: "Manubrio: Integrado, DECAF, Aleación, 31.8*420",
            tamañoDelMarco: "Tamaño del Marco: 450 (XS), 480 (S), 500 (M), 520 (L)"
        },
        dimensions: ["450 – XS: 1.56 -1.64", "480 – S: 1.63 -1.72", "500 – M: 1.69 -1.77", "520 – L: 1.76 – 1.83"],
        heights: [450,480,500,520],
        price: "4.990.000$",
        peso: "11 Kg",
        bikes : [
            {
                id: 1,
                color: "rgb(70, 73, 77)",
                image: "./bici-siluro-black.png"
            },
            {
                id: 2,
                color: "#8da9ba",
                image: "./bici-siluro-blue.png"
            },
            {
                id: 3,
                color: "#ab94c4",
                image: "./bici-siluro-purple.png"
            },
            {
                id: 4,
                color: "#237aad",
                image: "./bici-siluro-green.png"
            }
        ]
    } : 
    {
    description: {
            h1: "Sálgase de lo común, diferénciese del resto, monte una bicicleta de diseño Italiano, toda en carbono, de marco aerodinámico y con la más alta tecnología en su rango.",
            peso: "Peso: 8.5 kg",
            tenedor: "Tenedor: Carbono – Aprobado UCI",
            tipoDeMarco: "Tipo de Marco: Aerodinámico en Carbono -Aprobado por la UCI – Cableado Totalmente Interno",
            // tamañoDeLasLlantas: "700C – con eje pasante E-thru",
            rines: "Rines: En Carbono 700C con perfil de 50mm",
            // frenos: "Hidraúlicos L-twoo",
            grupo: "Grupo: Cambiador, descarrilador y tensor Shimano 105 7120 de 12 velocidades",
            manubrio: "Manubrio: Integrado, en Carbono, 31.8*420",
            tamañoDelMarco: "Tamaño del Marco: 450 (XS), 480 (S), 510 (M), 540 (L)"
    },
    dimensions: ["450 – XS: Menor 1.62", "480 – S: 1.62 -1.69", "510 – M: 1.69 -1.76", "540 – L: 1.76 – 1.83"],
    heights: [450,480,510,540],
    price: "7.790.000$",
    peso: "8.5 Kg",
    bikes : [
        {
            id: 1,
            color: "rgb(26, 63, 100)",
            image: "./bici-fuoco-titanium.png"
        },
        {
            id: 2,
            color: "#fff",
            image: "./bici-fuoco-white.png"
        },
        {
            id: 3,
            color: "rgb(70, 73, 77)",
            image: "./bici-fuoco-black.png"
        }
    ]
    }

    useEffect(() => {
        setButtonActive(1)
        setHeightBici(data.heights[0])
    }, [isSwapped]);
   
    const handleSwap = () => {
      setIsSwapped(!isSwapped)
    }

    return (
        <section>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div></div>
            <h2 style={{fontSize: "34px", color: "#fff", transition: ".4s"}}>Bicicleta de Ruta {isSwapped ? "Siluro" : "Fuoco"} Top</h2>
            <div style={{height: 40, width: 100, marginRight: "70px" }}>
                <SwitchSelector
                    backgroundColor={"#ccc"}
                    selectedBackgroundColor={"#000"}
                    // selectedFontColor={"000"}
                    initialSelectedIndex={0}
                    onChange={() => handleSwap()}
                    options={[
                    {
                        label: 'Fuoco',
                        value: "fuoco"
                    },
                    {
                        label: 'Siluro',
                        value: "siluro"
                    }
                    ]}
                />
            </div>
        </div>

        <div className="container-bike container-bike-component">
            <div className="bike">
                  <motion.div
                    className="child"
                    style={{marginTop: "100px"}}
                    initial={{ right: 0, opacity: 1 }}
                    animate={{ right: isSwapped ? "calc(100% - 628px)" : 0, opacity: isSwapped ? [0.6,0.0,0,0.4,0.6,1] : [1,0.6,0,0.0,0.4,0.6,1]}}
                    transition={{ 
                        duration: .8,
                        times: [0, 0.4, 0.6, 1],
                        ease: "easeInOut",
                      }}
                >
                    <img src={data.bikes.find(i => i?.id == buttonActive)?.image} alt="" style={{ marginLeft: "30px"  ,width: "700px", height: "400px", marginRight: isSwapped ? "30px" : "0", marginTop: "80px"}} />
                    
                <div className="staff-container">
                    <div className='section-staff'>
                        <span>Precio: </span>
                        <span>{data.price}</span>
                    </div>
                    <div className='section-staff' style={{display: "flex", alignItems: "center"}}>
                        <span>Tamaños: </span>
                        <div className='height-buttons'>
                       {data.heights.map((i, index) => (
                         <button key={index} onClick={() => { setHeightBici(i) }} className={`${heightBici == i ? 'active-height' : ''}`}>{i}</button>
                       ))
                       }
                        </div>
                    </div>
                    <div className='section-staff'>
                        <span>Peso: </span>
                        <span>{data.peso}</span>
                    </div>
                </div>

                </motion.div>

                <motion.div
                    className="child"
                    style={{ marginTop: "160px"}}
                    initial={{ left: 0, opacity: 1 }}
                    animate={{ left: isSwapped ? "calc(100% - 528px)" : 0 , }}
                    transition={{ 
                        duration: .8,
                        times: [0, 0.4, 0.6, 1],
                        ease: "easeInOut"
                      }}
                >
                <AccordionBike data={data}/>
                <div>
                <div className="buttons-color" style={{marginTop: "30px"}}>
                        {data.bikes.map(data => (
                            <button key={data?.id} style={{ backgroundColor: data?.color}} onClick={() => setButtonActive(data?.id)} className={`${buttonActive == data?.id ? "button-active" : ""}`}   />
                        ))

                        }
                </div>

                <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                    <button className="cart-add-button">Agregar al Carrito</button>
                </div>
                </div>
                </motion.div>
              
      </div>
    </div>
    </section>

    )
}

export default App