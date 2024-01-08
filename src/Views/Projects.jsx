import { Avatar, Button, Card, Divider, Image, Modal, Tag } from "antd";
import { useState } from "react";

export default function Projects(){
    const [data, setData] = useState();
    const [show, setShow] = useState(false);
    const handleDetail = (e) => {
        setData({
            name: e.name,
            tech: e.tech,
            tools: e.tools,
            url: e.url
        });
        setShow(true);
    }
    return(
        <div style={{margin: '50px auto', padding: 10    , boxSizing: 'border-box'}}>
            <h3 style={{textAlign: 'center'}}>Projects</h3>
            <div className="card-project-wrap">
                {items.map((e,i) => (
                    <Card type="inner" className="card-project" key={i} data-aos="zoom-in" id="card">
                        <div style={{display: 'flex', gap: 20, alignItems: 'center', textAlign: 'justify'}}>
                            <div className="avatar">
                                <Avatar src="/code.jpg" size={100} />
                            </div>
                            <div>
                                <h4>{e.name}</h4>
                                <p>{e.desc}</p>
                                <div>
                                    <Button onClick={() => handleDetail(e)} block type="primary">Detail</Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
            <Modal open={show} onCancel={() => setShow(false)} title={data && data.name} footer={[<Button type="primary">
                <a title={data && data.name} href={data && data.url} target="_black">Source Code</a>
            </Button>]}>
                <div>
                    <h4>Technologi :</h4>
                    <div>
                        {data && data.tech.map((e,i) => (
                            <Tag color="green" style={{fontSize: 11}} key={i}>{e}</Tag>
                        ))}
                    </div>
                </div>
                <Divider/>
                <div>
                    <h4>Tools :</h4>
                    <div>
                        {data && data.tools.map((e,i) => (
                            <Tag style={{fontSize: 11}} key={i}>{e}</Tag>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    )
}


const items = [
    {
        name: "Sistem Pendukung Keputusan Menggunakan Metode AHP",
        desc: "Aplikasi web sistem pendukung pengambilan keputusan menggunakan metode Analitycal Hierarchy Proccess Pada Perusahaan PT. Telkom Akses area Bandung",
        tech: ["MySQL", "Vite Js", "Node Js"],
        tools: ["Jsonwebtoken", "Ant Design", "Sequelize", "Xampp"],
        url: "https://github.com/Syihabudin15/spk-ahp-ui"
    },
    {
        name: "Sistem Inventory Menggunakan Metode SDLC",
        desc: "Aplikasi web pengelolaan data barang, transaksi barang, monitoring stok barang, dan pencetakan laporan bulanan pada perusahaan PT. Tunas Daihatsu",
        tech: ["MySQL", "Laravel"],
        tools: ["Bootstrap", "Eloquent", "DomPDF", "Xampp"],
        url: "https://github.com/Syihabudin15/inventory"
    },
    {
        name: "Un Script Technology",
        desc: "Aplikasi web penyedia layanan jasa yang berpengalaman untuk pembuatan Skripsi, Tesis, Undangan Digital, Website, dan Mobile apps",
        tech: ["Postgres", "Mongo DB", "Next Js"],
        tools: ["Ant Design", "Typescript", "Leaflet", "Prisma", "Mongoose"],
        url: "https://github.com/Syihabudin15/un-script-website"
    },
    {
        name: "Mini Project Housing Complex",
        desc: "Restfull API marketplace untuk melakukan pemasaran dan jual beli perumahan, projek ini dibuat untuk memenuhi syarat kelulusan pelatihan Enigma Camp",
        tech: [".NET", "ASP Net Core", "SqlServer"],
        tools: ["Jsonwebtoken", "Sql Client", "Duitku"],
        url: "https://github.com/Syihabudin15/housing-complex"
    },
    {
        name: "AMH News",
        desc: "Aplikasi web portal berita untuk menampilkan fakta-fakta berita yang telah terjadi di Indonesia",
        tech: ["Mongo DB", "Express Js", "React Js", "Node Js"],
        tools: ["Jsonwebtoken", "Ant Design", "Cloudinary", "Redux", "Mongoose", "Typescript"],
        url: "https://github.com/Syihabudin15/amh-news-ui"
    },
    {
        name: "AMH Game",
        desc: "Aplikasi web Game Play To Earn (P2P), dimana pengguna dapat bermain game untuk mendapat keuntungan",
        tech: ["MySQL", "Express Js", "React Js", "Node Js"],
        tools: ["Jsonwebtoken", "Ant Design", "Redux", "Xendit", "Nodemailer", "Sequelize", "Xampp"],
        url: "https://github.com/Syihabudin15/amh-game-ui"
    },
]