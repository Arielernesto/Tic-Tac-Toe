import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import styles from "./styles.module.css";
import './output.css'
/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest  }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

function Desc({desc}) {
  return ( <ul className="desc">
      <span>{desc?.h1}</span>
      {desc?.peso ? <li>{desc?.peso}</li> : "" }
      {desc?.tenedor ? <li>{desc?.tenedor}</li> : "" }
      {desc?.tipoDeMarco ? <li>{desc?.tipoDeMarco}</li> : "" }
      {desc?.tamañoDeLasLlantas ? <li>{desc?.tamañoDeLasLlantas}</li> : "" }
      {desc?.frenos ? <li>{desc?.frenos}</li> : "" }
      {desc?.grupo ? <li>{desc?.grupo}</li> : "" }
      {desc?.manubrio ? <li>{desc?.manubrio}</li> : "" }
      {desc?.tamañoDelMarco ? <li>{desc?.tamañoDelMarco}</li> : "" }
  </ul>
  )
}

export default function AccordionBike({ data }) {
  


  return (
    <div className={styles.container} style={{width: "400px",  borderRadius: "5px"}} >
      <div className={styles.accordion} style={{width: "400px"}}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="Características" initialEntered>
           <Desc desc={data.description}></Desc>
          </AccordionItem>

          <AccordionItem header="Dimensiones">
            <ul className="desc" style={{ margin: 0}}>

            {data.dimensions.map((i, index) => (
              <li key={index}>{i}</li>
            ))
            }

            </ul>
            
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
