let product =[
    {
        id: 1,
name: "cá",
price: 10000,
category: "hải sản",
quantity: 100
    },
    {
        id: 2,
name: "laptop",
price: 10000000,
category: "laptop",
quantity: 20
    },
]
let check = 1, dai = product.length;
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Thêm sản phẩm vào danh sách sản phẩm.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo id.
        4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
        5. Xóa sản phẩm theo id.
        6. Lọc sản phẩm theo khoảng giá.
        Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let name = prompt("mời bạn nhập tên: ");
            let price = prompt("mời bạn nhập giá: ");
            let category = prompt("mời bạn nhập danh mục: ");
            let quantity = prompt("mời bạn nhập số lượng: ");
            dai += 1;
            let temp = {
                id: dai,
                name: name,
                price: price,
                category: category,
                quantity: quantity,
            }
            Contact.push(temp);
            alert("thêm thành công")
            break;
        case 2:
            alert(product.map(s=>`id: ${s.id} - tên: ${s.name} - giá: ${s.price} - danh mục: ${s.category} - số lượng: ${s.quantity}`).join("\n"))
            break;
        case 3:
                let num = +prompt("mời bạn nhập id: ")
                if (isNaN(num)) {
                    alert("không hợp lệ")
                } else {
                    let index = product.filter(s => s.id===num);
                    if (index.length === 0) {
                        alert("không có số điện thoại của bạn nhập")
                    } else {
                        alert(index.map(s=>`id: ${s.id} - tên: ${s.name} - giá: ${s.price} - danh mục: ${s.category} - số lượng: ${s.quantity}`).join("\n"))
                    }
                }
            break;
        case 4:
             {
                let id = +prompt("Mời bạn nhập id để tìm kiếm: ");
                if (isNaN(id)) {
                    alert("Không hợp lệ");
                    break;
                } else {
                    let thay = product.findIndex(i => i.id === id);
                    if (thay != -1) {
                        product[thay].name=prompt("mời bạn nhập tên: ")
                        product[thay].price=prompt("mời bạn nhập giá: ")
                        product[thay].category=prompt("mời bạn nhập danh mục: ")
                        product[thay].quantity=prompt("mời bạn nhập số lượng: ")
                        alert("nhập thành công")
                    } else {
                        alert("Không tìm thấy");
                    }
                }
            }
            break;
        case 5:
            let id = +prompt("mời bạn nhập id để xóa: ")
            if (isNaN(id) || id < 0|| !id) {
                alert("không hợp lệ")
            } else {
                let index = product.findIndex(s => s.id === id);
                if(index==-1){
                    alert("không tìm thấy")
                    break
                }
                product.splice(index, 1)
                alert("xóa thành công")
            }
            break
        case 6:
            let max=+prompt("mời bạn nhập giá cao: ");
            let min=+prompt("mời bạn nhập giá thấp: ")
            if(isNaN(max)||max<0||min<0||isNaN(min)){
                alert("không hợp lệ")
                break
            }else{
                let temp=product.filter(s=>s.price>=min&&s.price<=max)
                if(temp<0){
                    alert("không có sản phẩm hợp lệ")
                }
                alert(temp.map(s=>`id: ${s.id} - tên: ${s.name} - giá: ${s.price} - danh mục: ${s.category} - số lượng: ${s.quantity}`).join("\n"))
            }
        case 7:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
