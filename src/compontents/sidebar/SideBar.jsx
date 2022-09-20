import './sidebar.scss';
import SidebarItem from './sidebar-item'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function SideBar() {
    const data = [
        {
            img:"https://hoangviettravel.vn/wp-content/uploads/2020/02/cac-mon-an-chinh-cua-nguoi-chau-au-10-min.jpg",
            title:"Món ăn đặc biệt",
            name:"Pizza Domino",
            recomment:"Chương Trình tri ân Khách Hàng: MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K"
        },
        {
            img:"https://xxe.vn/wp-content/uploads/2021/01/them-cac-mon-ga-hay-toi-ngay-3-dia-diem-ga-khong-loi-thoat-nay-tai-ha-noi-img_2976-scaled-1.jpg",
            title:"Món ăn đặc biệt",
            name:"Pizza Domino",
            recomment:"Chương Trình tri ân khách Hàng: MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K"
        },
        {
            img:"https://hoangviettravel.vn/wp-content/uploads/2020/03/doner-kebab-min.jpg",
            title:"Món ăn đặc biệt",
            name:"Pizza Domino",
            recomment:"Chương Trình tri ân khách Hàng: MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K"
        },
        {
            img:"https://toplist.vn/images/800px/english-sunday-roast-92379.jpg",
            title:"Món ăn đặc biệt",
            name:"Pizza Domino",
            recomment:"Chương Trình tri ân khách Hàng: MIX-MATCH - TIẾT KIỆM 45%, PIZZA CHỈ TỪ 89K"
        }
    ]
    return  (
        <div className='sidebar'>
            <Swiper
            modules={[Autoplay ]}
            autoplay={{delay:2000}}
            pagination={{clickable: true}}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((item,i) => (
                    <SwiperSlide key={i}>
                        <SidebarItem img={item.img} title={item.title} name={item.name} comment={item.recomment} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        )
}

export default SideBar;