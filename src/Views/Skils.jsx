import { Carousel, Divider } from "antd";
import IconFont from "./IconFont";

export default function Skils(){
    return(
        <div style={{padding: 20}}>
            <h3 style={{textAlign: 'center'}}>Skils</h3>
            <Divider/>
            <div className="icon-wrap">
                <IconFont type="icon-laravel" className="icon-font" data-aos="flip-right" data-aos-duration="1000"/>
                <IconFont type="icon-Nodejs" className="icon-font" data-aos="flip-right" data-aos-duration="1200"/>
                <IconFont type="icon-react" className="icon-font" data-aos="flip-right" data-aos-duration="1400"/>
                <IconFont type="icon-logo-abbc" className="icon-font" data-aos="flip-right" data-aos-duration="1600"/>
                <IconFont type="icon-dot-net" className="icon-font" data-aos="flip-right" data-aos-duration="1800"/>
                <IconFont type="icon-bootstrap-solid" className="icon-font" data-aos="flip-right" data-aos-duration="2000"/>
                <IconFont type="icon-ant-design-01" className="icon-font" data-aos="flip-right" data-aos-duration="2200"/>
                <IconFont type="icon-mongo-db" className="icon-font" data-aos="flip-right" data-aos-duration="2400"/>
                <IconFont type="icon-Mysql" className="icon-font" data-aos="flip-right" data-aos-duration="2600"/>
                <IconFont type="icon-sqlserver" className="icon-font" data-aos="flip-right" data-aos-duration="2800"/>
            </div>
        </div>
    )
}