import { Divider } from "antd";


export default function About(){
    return(
        <div style={{margin: '30px 0', padding: 20, backgroundColor: 'white'}}>
            <h3 style={{textAlign: 'center'}}>About</h3>
            <Divider/>
            <div className="desc-about">
                <p>Saya Syihabudin Tsani seorang <span>Web Developer</span> dari Bandung Jawabarat yang terbiasa membangun website pada bagian <span>Backend</span> maupun <span>Frontend</span> menggunakan beberapa bahasa pemrograman, seperti PHP, Javascript, C#, ataupun menggunakan kerangka kerja <span>(Framework)</span> seperti Laravel dan Next Js. Pada era perkembangan teknologi yang semakin pesat saat ini, pengolahan data dan penyampaian informasi menjadi sangat penting karena dapat berpengaruh pada kehidupan sehari-hari. Maka dari itu, aplikasi-aplikasi yang telah saya buat diharapkan dapat membantu dan bermanfaat untuk banyak orang dalam penyediaan informasi, pengolahan data, tempat jual beli <span>(marketplace)</span> maupun yang lainnya.</p>
                <p>Saat ini saya bersama tim dari <span style={{fontWeight: 'bold'}}>Un Script Technology</span> terus berusaha membantu orang-orang dalam menyelesaikan masalah yang sedang dihadapinya. Kami menyediakan layanan jasa untuk pembutan aplikasi <span>mobile</span>, website, bot discord, dan undangan digital. Selain itu, kami juga ingin memudahkan mahasiswa/mahasiswi yang tengah kesulitan dalam pengerjaan tugas akhir, dengan memberikan bimbingan-bimbingan yang mudah dipahami agar dapat segera mendapatkan gelar yang diharapkan.</p>
                <p>Jika pembaca sedang memiliki permasalahan serupa dan berminat mencari solusi, bisa kirimkan kami pesan melalui kontak yang telah saya sediakan di bagian bawah halaman ini.</p>
            </div>
        </div>
    )
}