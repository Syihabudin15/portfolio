import { Divider } from "antd";
import IconFont from "./IconFont";
import { LinkedinFilled } from "@ant-design/icons"

export default function Contacts(){
    return(
        <div style={{margin: "50px 0 0 0", padding: 10, backgroundImage: 'linear-gradient(to right, #001529, #003d72)'}}>
            <h3 style={{textAlign: 'center', color: "white"}}>Contacts</h3>
            <Divider style={{borderColor: "whitesmoke"}}/>
            <div style={{padding: 20}}>
                <div style={{display: 'flex', justifyContent: "center", gap: 30, flexWrap: 'wrap'}}>
                    {contacts.map((e,i) => (
                        <a href={e.url} key={i} title="Kontak WhatApps" style={{display: 'flex', alignContent: 'center', gap: 10, color: "white"}} target="_blank">
                            {e.icon}
                            <span>{e.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

const contacts = [
    {name: "WhatsApp", url: "https://wa.me/+62881022157439", icon: <IconFont type="icon-whatsapp" style={{fontSize: 20}}/>},
    {name: "Facebook", url: "https://facebook.com/sfikri2001", icon: <IconFont type="icon-facebook" style={{fontSize: 20}}/>},
    {name: "Instagram", url: "https://www.instagram.com/shihabudinalfikri/", icon: <IconFont type="icon-instagram1" style={{fontSize: 20}}/>},
    {name: "Email", url: "mailto:syihabudintsani15@gmail.com", icon: <IconFont type='icon-Gmail' style={{fontSize: 20}} />},
    {name: "Linked in", url: "https://www.linkedin.com/in/syihabudin-tsani-7b4a33206/", icon: <LinkedinFilled style={{color: 'blue', fontSize: 20}}/>},
]