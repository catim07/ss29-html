let Contact = [
    {
        id: 1,

        name: "cường",

        email: "cuong@gmail.com",

        phone: "0908070605",
    },
    {
        id: 2,

        name: "tím",

        email: "tim@gmail.com",

        phone: "0102030405",
    }
]
let check = 1, dai = Contact.length;
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Thêm đối tượng Contact vào danh sách liên hệ.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm thông tin Contact theo số điện thoại.
        4. Cập nhật thông tin Contact(name, email, phone) theo id.
        5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
        6. Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let name = prompt("mời bạn nhập tên: ");
            let email = prompt("mời bạn nhập email: ");
            let phone = prompt("mời bạn nhập số điện thoại ");
            dai += 1;
            let temp = {
                id: dai,
                name: name,
                email: email,
                phone: phone,
            }
            Contact.push(temp);
            alert("thêm thành công")
            break;
        case 2:
            alert(Contact.map(s=>`id: ${s.id} - tên: ${s.name} - email: ${s.email} - phone: ${s.phone}`).join("\n"))
            break;
        case 3:
                let num = +prompt("mời bạn nhập số điện thoại: ")
                if (isNaN(num)) {
                    alert("không hợp lệ")
                } else {
                    let index = Contact.filter(s => s.phone.includes(num));
                    if (index.length === 0) {
                        alert("không có số điện thoại của bạn nhập")
                    } else {
                        alert(index.map(s=>`id: ${s.id} - tên: ${s.name} - email: ${s.email} - phone: ${s.phone}`).join("\n"))
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
                    let thay = Contact.findIndex(i => i.id === id);
                    if (thay != -1) {
                        Contact[thay].name=prompt("mời bạn nhập tên: ")
                        Contact[thay].email=prompt("mời bạn nhập email: ")
                        Contact[thay].phone=prompt("mời bạn nhập số điện thoại: ")
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
                let index = Contact.findIndex(s => s.id === id)
                Contact.splice(index, 1)
                alert("xóa thành công")
            }
            break
        case 6:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
