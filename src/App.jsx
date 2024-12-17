import './output.css'
import { useState } from 'react'
import { motion } from "framer-motion"
import SwitchSelector from "react-switch-selector";
import AccordionBike from './Accordion';

function App(){
    const [isSwapped, setIsSwapped] = useState(false)

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
                        label: 'Siluro',
                        value: true
                    },
                    {
                        label: 'Fuoco',
                        value: 20
                    }
                    ]}
                />
            </div>
        </div>

        <div className="container-bike container-bike-component">
            <div className="bike">
                <motion.div
                    className="child"
                    initial={{ left: 0 }}
                    animate={{ left: isSwapped ? "calc(100% - 528px)" : 0 , }}
                    transition={{ 
                        duration: .8,
                        times: [0, 0.4, 0.6, 1],
                        ease: "easeInOut"
                      }}
                >
                <AccordionBike />
                </motion.div>
                <motion.div
                    className="child"
                    initial={{ right: 0 }}
                    animate={{ right: isSwapped ? "calc(100% - 628px)" : 0, opacity: isSwapped ? [0.6,0.0,0,0.4,0.6,1] : [1,0.6,0,0.0,0.4,0.6,1]}}
                    transition={{ 
                        duration: .8,
                        times: [0, 0.4, 0.6, 1],
                        ease: "easeInOut",
                      }}
                >
                    <img src="./bici-fuoco-white.png" alt="" style={{ marginLeft: "30px"  ,width: "700px", height: "500px"}} />
                </motion.div>
      </div>
    </div>
    </section>

    )
}

export default App