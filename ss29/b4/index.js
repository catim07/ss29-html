let job = [
    {
        id: 1,
        name: "bóc vác",
        describe: "công việc cực khổ",
        year: "2000",
        status: "hoàn thành"
    },
    {
        id: 2,
        name: "tài xế",
        describe: "công việc lái xe",
        year: "2010",
        status: "chưa hoàn thành"
    },
]
let check = 1, dai = job.length;
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Thêm công việc mới.
        2. Hiển thị tất cả các công việc.
        3. Cập nhật trạng thái công việc theo id.
        4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
        5. Sắp xếp các công việc theo trạng thái công việc.
        6. Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let name = prompt("mời bạn nhập tên: ");
            let describe = prompt("mời bạn nhập danh mục: ");
            let year = prompt("mời bạn nhập năm bắt đầu: ");
            let status = prompt("mời bạn nhập trạng thái(hoàn thành/chưa hoàn thành): ");
            if (status === "hoàn thành" || status === "chưa hoàn thành") {
                dai += 1;
                let temp = {
                    name: name,
                    describe: describe,
                    year: year,
                    status: status,
                }
                food.push(temp);
                alert("thêm thành công")
            } else {
                alert("nhập không hợp lệ")
            }
            break;
        case 2:
            {
                alert(job.map(s => `id: ${s.id} - tên: ${s.name} - mô tả: ${s.describe} - năm bắt đầu: ${s.year} - trạng thái: ${s.status}`).join("\n"))

                break
            }
        case 3:
            let i = +prompt("mời bạn nhập id: ")
            if (isNaN(i)) {
                alert("không hợp lệ")
            } else {
                let index = job.findIndex(s => s.id === i);
                if (index.length === -1) {
                    alert("không có số id của bạn nhập")
                } else {
                    let check = prompt("mời bạn nhập trạng thái (hoàn thành/chưa hoàn thành): ")
                    if (check === "hoàn thành" || check === "chưa hoàn thành") {
                        job[index].status = check;
                    } else {
                        alert("nhập không hợp lệ")
                    }
                }
            }
            break;
        case 4:
            {
                let chua = job.filter(s => s.status === "chưa hoàn thành")
                let hoan = job.filter(s => s.status === "hoàn thành")
                alert("những công việc chưa hoàn thành là:")
                alert(chua.map(s => `id: ${s.id} - tên: ${s.name} - mô tả: ${s.describe} - năm bắt đầu: ${s.year} - trạng thái: ${s.status}`).join("\n"))
                alert("những công việc hoàn thành là:")
                alert(hoan.map(s => `id: ${s.id} - tên: ${s.name} - mô tả: ${s.describe} - năm bắt đầu: ${s.year} - trạng thái: ${s.status}`).join("\n"))
                break;
            }
        case 5:
            {
                let chua = job.filter(s => s.status === "chưa hoàn thành")
                let hoan = job.filter(s => s.status === "hoàn thành")
                alert("những công việc chưa hoàn thành là:")
                alert(hoan.map(s => `id: ${s.id} - tên: ${s.name} - mô tả: ${s.describe} - năm bắt đầu: ${s.year} - trạng thái: ${s.status}`).join("\n"))
                alert("những công việc hoàn thành là:")
                alert(chua.map(s => `id: ${s.id} - tên: ${s.name} - mô tả: ${s.describe} - năm bắt đầu: ${s.year} - trạng thái: ${s.status}`).join("\n"))
            }
        case 6:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
