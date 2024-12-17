import './output.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import SwitchSelector from "react-switch-selector";
import AccordionBike from './Accordion';

function App(){
    const [isSwapped, setIsSwapped] = useState(false)
    const [buttonActive, setButtonActive] = useState(1)
    const [heightBici, setHeightBici] = useState(1)

    const dataFuoco = [
        {
            id: 1,
            color: "rgb(26, 63, 100)",
            image: "./bici-fuoco-white.png"
        },
        {
            id: 2,
            color: "#fff",
            image: "./bici-fuoco-white.png"
        },
        {
            id: 3,
            color: "rgb(70, 73, 77)",
            image: "./bici-fuoco-white.png"
        }
    ]
    const handleSwap = () => {
      setIsSwapped(!isSwapped)
    }

    return (
        <section>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div></div>
            <h2 style={{fontSize: "34px", color: "#fff", transition: ".4s"}}>Bicicleta de Ruta {isSwapped ? "Fuoco" : "Siluro"} Top</h2>
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
                        value: true
                    },
                    {
                        label: 'Siluro',
                        value: 20
                    }
                    ]}
                />
            </div>
        </div>

        <div className="container-bike container-bike-component">
            <div className="bike">
                  <motion.div
                    className="child margen-top"
                    initial={{ right: 0, opacity: 1 }}
                    animate={{ right: isSwapped ? "calc(100% - 628px)" : 0, opacity: isSwapped ? [0.6,0.0,0,0.4,0.6,1] : [1,0.6,0,0.0,0.4,0.6,1]}}
                    transition={{ 
                        duration: .8,
                        times: [0, 0.4, 0.6, 1],
                        ease: "easeInOut",
                      }}
                >
                    <img src="./bici-fuoco-white.png" alt="" style={{ marginLeft: "30px"  ,width: "700px", height: "500px"}} />
                    <div className="buttons-color">
                        {dataFuoco.map(data => (
                            <button key={data.id} style={{ backgroundColor: data.color}} onClick={() => setButtonActive(data.id)} className={`${buttonActive == data.id ? "button-active" : ""}`}   />
                        ))

                        }
                    </div>

                    <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
                        <button className="cart-add-button">Agregar al Carrito</button>
                    </div>
                </motion.div>

                <motion.div
                    className="child margen-top"
                    initial={{ left: 0, opacity: 1 }}
                    animate={{ left: isSwapped ? "calc(100% - 528px)" : 0 , }}
                    transition={{ 
                        duration: .8,
                        times: [0, 0.4, 0.6, 1],
                        ease: "easeInOut"
                      }}
                >
                <AccordionBike />
                
                <div className="staff-container">
                    <div className='section-staff'>
                        <span>Precio: </span>
                        <span>8.100.000$</span>
                    </div>
                    <div className='section-staff' style={{display: "flex", alignItems: "center"}}>
                        <span>Tamaños: </span>
                        <div className='height-buttons'>
                        <button>480</button>
                        <button>510</button>
                        <button>540</button>
                        </div>
                    </div>
                    <div className='section-staff'>
                        <span>Peso: </span>
                        <span>9 kg</span>
                    </div>
                </div>
                </motion.div>
              
      </div>
    </div>
    </section>

    )
}

export default App