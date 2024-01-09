import { RadarChartOutlined, CodeOutlined, FireFilled, DropboxOutlined, SmileFilled, AndroidFilled } from "@ant-design/icons"
import { Image } from "antd"
import { useEffect } from "react"


export default function Brand(){
    useEffect(() => {
        const str = `"Keep building your life"`;
        const arr = str.split("");
        let i = 0;
        const inter = setInterval(() => {
            if(i === arr.length){
                clearInterval(inter);
            }else{
                document.getElementById("keep").append(arr[i]);
                i = i+1;
            }
        }, 300);
    }, []);
    return(
        <section title="My Brand" className={`brand-wrap`}>
            <div className="brand-left">
                <h1 id="auth">Syihabudin Tsani</h1>
                <h2 style={{paddingBottom: 10, borderBottom: '1px solid #d4d4d4'}}>Web Developer</h2>
                <h3 className="quote" data-aos="fade-up" data-aos-duration="3000" id="keep"></h3>
                <FireFilled id="fire" style={{fontSize: 50, color: 'red'}} data-aos="flip-right" data-aos-duration="3000" data-aos-delay="3000"/>
            </div>
            <div className="brand-right">
                <RadarChartOutlined style={{position: "absolute", left: 10, top: 20, fontSize: 50, color: "blue", opacity: .5}} data-aos="flip-right"/>
                <CodeOutlined style={{position: "absolute", right:  100, top: 10, fontSize: 30, opacity: .5}} data-aos="fade-left"/>
                <DropboxOutlined id="drop" style={{position: "absolute", bottom: 10, fontSize: 80, zIndex: 5, opacity: .5}} data-aos="zoom-in"/>
                <SmileFilled id="smile" style={{position: "absolute", right: 40, fontSize: 50, bottom: 20, color: 'yellow', opacity: .5}} data-aos="fade-in"/>
                <div className="author-img" style={{zIndex: 8}} data-aos="fade-up" data-aos-duration="2000">
                    <Image src="/syihabudin.jpg" width={"100%"} height={"100%"} style={{borderRadius: '50%'}}/>
                </div>
                <div style={{width: 70, height: 70, border: '2px solid yellow', borderRadius: '50%', opacity: .5}}></div>
                <AndroidFilled id="andro" style={{position: 'absolute', bottom: 20, fontSize: 30, color: 'green', left: 200, transform: "rotate(50deg)"}} data-aos="fade-up"/>
            </div>
        </section>
    )
}