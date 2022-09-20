import Main from './Main';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './information.scss';
import { useEffect } from 'react';

function InFor() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const sp=[
        {
            img:"https://www.thatlangon.com/wp-content/uploads/2020/09/bun-cha6.jpg",
            name:"Bún Chả Hà Nội",
            price:"$30.00",
            title:"Bún chả là một món ăn của Việt Nam, bao gồm bún, chả thịt lợn nướng trên than hoa và bát nước mắm chua cay mặn ngọt. Món ăn xuất xứ từ miền Bắc Việt Nam, là thứ quà có sức sống lâu bền nhất của Hà Nội, nên có thể coi đây là một trong những đặc sản đặc trưng của ẩm thực Hà thành."
        },
        {
            img:"https://bepmina.vn/wp-content/uploads/2021/12/cach-nau-bun-rieu-cua.jpeg",
            name:"Bún Riêu Cua",
            price:"$45.00",
            title:"Bún riêu cua là một món ăn truyền thống Việt Nam, được biết đến rộng rãi trong nước và quốc tế. Món ăn này gồm bún và 'riêu cua'. Riêu cua là canh chua được nấu từ gạch cua, thịt cua giã và lọc cùng với quả dọc, cà chua, mỡ nước, giấm bỗng, nước mắm, muối, hành hoa."
        },
        {
            img:"https://bepxua.vn/wp-content/uploads/2021/10/nem-nuong-nha-trang-1024x1024-1.jpg",
            name:"Nem Nướng Nha Trang",
            price:"$35.00",
            title:"Nem nướng Nha Trang là món ăn dân dã, có nguồn gốc từ Ninh Hòa - một huyện phía bắc của tỉnh Khánh Hòa, cách thành phố biển khoảng 30 km. Các quán hàng bán món ăn này rất phổ biến, vì thế bạn có thể dễ dàng tìm và thưởng thức món nem nướng này ngay tại những gánh hàng rong trên đường."
        },
        {
            img:"https://cdn.tgdd.vn/2021/06/CookProduct/thumb1-1200x676-1.jpg",
            name:"Cơm Ngon Mỗi Ngày",
            price:"$100.00",
            title:"Bữa cơm gia đình là bữa cơm đầm ấm, ấm áp trong mỗi gia đình. Bữa cơm với những món ăn tuy giản dị, mộc mạc nhưng rất ngon và đầy đủ chất dinh dưỡng. Dưới sự đảm đang, chăm lo của người phụ nữ thì bữa ăn họ luôn nấu ngon nhất và đẹp mắt nhất."
        }, {
            img:"https://www.monngon.tv/uploads/images/images/cach-lam-com-cuon-rong-bien-chay-5.jpg",
            name:"Cơm Cuộn Hàn Quốc",
            price:"$60.00",
            title:"Kimbap hoặc gimbap là cách gọi của người Triều Tiên về món Futomaki xuất xứ từ Triều Tiên thuộc Nhật, được làm bằng cơm và các thành phần khác nhau cuộn trong lá rong biển khô. Người Triều Tiên thường làm kimbap để mang đi ăn trong những buổi dã ngoại hoặc các sự kiện ngoài trời, hoặc là trong các bữa ăn trưa nhẹ."
        }
    ]
    const fruit=[
        {
            img:"https://cdn.tgdd.vn/2021/08/content/Nho-mau-don-la-gi-cac-loai-nho-mau-don-cach-chon-mua-va-bao-quan-duoc-lau-3-800x510.jpg",
            name:"Nho Mẫu Đơn",
            price:"$390.00",
            title:"Nho Mẫu đơn là một giống nho lưỡng bội, là kết quả của sự lai tạo giữa giống Akitsu-21 và 'Hakunan' do Viện Khoa học Cây ăn quả Quốc gia ở Nhật Bản tạo ra vào năm 1988. Nó có quả mọng lớn màu xanh vàng, kết cấu thịt, hương vị, nồng độ chất rắn hòa tan cao và độ axit thấp."
        },
        {
            img:"http://cdn.tgdd.vn/Files/2018/03/15/1074573/6-loi-ich-bat-ngo-cua-trai-kiwi-202110211628557582.jpg",
            name:"KiWi",
            price:"$90.00",
            title:"Kiwi hay dương đào là một loài cây có quả mọng ăn được thuộc nhóm loài cây gỗ thân leo trong chi Actinidia. Nhóm cây quả kiwi được trồng phổ biến nhất là Actinidia deliciosa 'Hayward' quả có hình bầu dục, kích thước bằng quả trứng gà cỡ lớn: dài 5–8 cm và đường kính 4,5–5,5 cm."
        },
        {
            img:"https://cdn.tgdd.vn/2020/10/CookProduct/1-1200x676-46.jpg",
            name:"Xoài Cô Đơn",
            price:"$70.00",
            title:"Xoài là một loại trái cây vị ngọt thuộc chi Xoài, bao gồm rất nhiều quả cây nhiệt đới, được trồng chủ yếu như trái cây ăn được. Phần lớn các loài được tìm thấy trong tự nhiên là các loại xoài hoang dã. Tất cả đều thuộc họ thực vật có hoa Anacardiaceae."
        },
        
           
    ]
    return ( 
        <div>
            <Header />
            <div className="body__sale">
                <div className="sp__wrap">
                    <h2 className="sp__header">Các sản phẩm nổi bật dành cho gia đình</h2>
                    {sp.map((item, index)=>(
                        <div key={index} className="sp__list">
                            <Main img={item.img} name={item.name} price={item.price} title={item.title} />
                        </div>
                    ))}
                </div>
                <div className="sp__wrap">
                    <h2 className="sp__header">Các loại trái cây bốn mùa</h2>
                    {fruit.map((item, index)=>(
                        <div key={index} className="sp__list">
                            <Main img={item.img} name={item.name} price={item.price} title={item.title} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>

     );
}

export default InFor;