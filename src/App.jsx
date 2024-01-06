import { Menu, Spin, Button,Drawer } from "antd";
import { MenuOutlined, LoadingOutlined } from "@ant-design/icons"
import { useEffect, useRef, useState } from "react";
import Brand from "./Views/Brand";
import About from "./Views/About";
import Skils from "./Views/Skils";
import Courses from "./Views/Courses";
import Projects from "./Views/Projects";
import Contacts from "./Views/Contacts";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function App(){
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);
    const about = useRef(null);
    const skil = useRef(null);
    const courses = useRef(null);
    const project = useRef(null);
    const contact = useRef(null);

    const handleClick = (key) => {
        if(key === "#about"){
            window.scrollTo({top: about.current.offsetTop - 20, behavior: 'smooth'});
        }
        if(key === "#skils"){
            window.scrollTo({top: skil.current.offsetTop - 20, behavior: 'smooth'});
        }
        if(key === "#courses"){
            window.scrollTo({top: courses.current.offsetTop - 20, behavior: 'smooth'});
        }
        if(key === "#projects"){
            window.scrollTo({top: project.current.offsetTop - 20, behavior: 'smooth'});
        }
        if(key === "#contacts"){
            window.scrollTo({top: contact.current.offsetTop - 20, behavior: 'smooth'});
        }
    }
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 500
        });
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 20){
                setScroll(true);
            }else{
                setScroll(false);
            }
        });
    })
    return(
        <Spin spinning={false} indicator={<LoadingOutlined/>}>
            <nav className="menu-wrap" style={{opacity: scroll ? .7 : 1}}>
                <nav style={{fontStyle: 'italic', fontWeight: 'bold', cursor: 'pointer'}}>SYIHAB</nav>
                {/* Menu Wimdows */}
                <nav className="menu-windows" >
                    <Menu items={menuItems} mode="horizontal" className="menu-list-win" style={{width: 420, marginRight: 50, backgroundImage: 'linear-gradient(to right, #001529, #003d72)', color: 'white'}} onClick={(e) => handleClick(e.key)}/>
                </nav>
                <nav className="menu-mobile">
                <Button onClick={() => setShow(true)} style={{backgroundColor: '#003d72', color: 'white'}}>
                    <MenuOutlined/>
                </Button>
                <Drawer open={show} onClose={() => setShow(!show)} width={'70vw'} style={{backgroundImage: "linear-gradient(to right, #001529, #003d72)", transition: "1s"}}
                    closeIcon={<Button style={{backgroundColor: '#001529', color: 'white'}}>X</Button>}
                >
                    <Menu items={menuItems} mode="inline" theme="dark" onClick={(e) => handleClick(e.key)} />
                </Drawer>
                </nav>
            </nav>

            <div>
                <Brand/>
            </div>

            <div ref={about}>
                <About/>
            </div>

            <div ref={skil}>
                <Skils/>
            </div>

            <div ref={courses}>
                <Courses/>
            </div>

            <div ref={project}>
                <Projects/>
            </div>

            <div ref={contact}>
                <Contacts/>
            </div>
        </Spin>
    )
}

const menuItems = [
    {title: "About Syihabudin Tsani", label: "About", key: "#about"},
    {title: "My Skils", label: "Skils", key: "#skils"},
    {title: "Learning Courses", label: "Courses", key: "#courses"},
    {title: "Created Project", label: "Projects", key: "#projects"},
    {title: "My Contacts", label: "Contacts", key: "#contacts"},
]