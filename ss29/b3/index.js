let food=[
    {
        name: "sushi",
        price: 10000,
        describe: "Sushi: Món ăn truyền thống Nhật Bản với cơm giấm, hải sản tươi, hoặc rau củ, trình bày tinh tế."
    },
    {
        name: "trứng cá hồi",
        price: 13000,
        describe: "Trứng cá hồi: Món ăn Nhật, hạt to, vị béo bùi, thơm ngon, thường dùng làm sushi hoặc cơm donburi."
    },
]
let check = 1, dai = food.length;
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Thêm món ăn vào danh mục.
        2. Xóa món ăn theo tên khỏi danh mục.
        3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
        4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
        5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
        6. Thoát
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let name = prompt("mời bạn nhập tên: ");
            let price = prompt("mời bạn nhập giá: ");
            let describe = prompt("mời bạn nhập danh mục: ");
            dai += 1;
            let temp = {
                name: name,
                price: price,
                describe: describe,
            }
            food.push(temp);
            alert("thêm thành công")
            break;
        case 2:
            {
            let ten = prompt("mời bạn nhập tên để xóa: ")
            if ( !ten||!isNaN(ten)) {
                alert("không hợp lệ")
            } else {
                let index = food.findIndex(s => s.name.toLowerCase().includes(ten.toLowerCase()));
                if(index==-1){
                    alert("không tìm thấy")
                    break
                }
                food.splice(index, 1)
                alert("xóa thành công")
            }
            break
        }
        case 3:
                let ten = prompt("mời bạn nhập tên: ")
                if (!isNaN(ten)) {
                    alert("không hợp lệ")
                } else {
                    let index = food.findIndex(s => s.name.toLowerCase().includes(ten.toLowerCase()));
                    if (index.length === -1) {
                        alert("không có số điện thoại của bạn nhập")
                    } else {
                        food[index].name=prompt("mời bạn nhập tên: ")
                        food[index].price=prompt("mời bạn nhập giá: ")
                        food[index].describe=prompt("mời bạn nhập mô tả: ")
                    }
                }
            break;
        case 4:
             {
                alert(food.map(s=>`tên: ${s.name} - giá: ${s.price} - mô tả: ${s.describe}`).join("\n"))
            break;
            }
            break;
        case 5:
            {
                let ten=prompt("mời bạn nhập tên: ")
                if(!isNaN(ten)||!ten){
                    alert("không hợp lệ")
                }else{
                    let index=food.filter(s=>s.name.toLowerCase().includes(ten.toLowerCase()))
                    if(index===-1){
                        alert("không tìm thấy số bạn nhập");
                    }else{
                        alert(index.map(s=>`tên: ${s.name} - giá: ${s.price} - mô tả: ${s.describe}`).join("\n"))
                    }
                }
            }
        case 6:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
