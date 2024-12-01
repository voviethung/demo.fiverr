
//server action là các hàm xử lý trên server (nơi chứa source nextjs);

export const getProductByIdAction = async (id) => {
    const res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`, {
        next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log('res',data);
    return data.content;
}


export const getProductByKeywordAction = async (keyword) => {
    const res = await fetch(` https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`, {
        next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log('res',data);
    return data.content;
}


export const getCongViecByKeywordAction = async (keyword) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI' // Thay thế bằng token thật của bạn
        },

        next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log('res',data);
    return data.content;
}
// export const getCongViecByKeywordAction = async (keyword) => {
//     try {
//         const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`, {
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json',
//                 'tokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI' // Thay thế bằng token thật của bạn
//             },
//             next: { revalidate: 10 }
//         });

//         if (!res.ok) {
//             console.error('Error fetching data:', res.status, res.statusText);
//             return [];
//         }

//         const data = await res.json();
//         return data.content || []; // Trả về mảng rỗng nếu `content` không tồn tại
//     } catch (error) {
//         console.error('API fetch error:', error);
//         return [];
//     }
// }

export const getMenuLoaiCv = async () => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-menu-loai-cong-viec`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI' // Thay thế bằng token thật của bạn
        },

        next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log('res',data);
    return data.content;
}

export const getChiTietLoaiCongViecAction = async (id) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI' // Thay thế bằng token thật của bạn
        },

        next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log('res',data);
    return data.content;
}

export const getCongViecTheoChiTietLoaiAction = async (id) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI' // Thay thế bằng token thật của bạn
        },

        next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log('res',data);
    return data.content;
}

export const getCongViecChiTietByIdAction = async (id) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/cong-viec/lay-cong-viec-chi-tiet/${id}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI' // Thay thế bằng token thật của bạn
        },

        next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log('res',data);
    return data.content;
}

export const getBinhLuanTheoCongViecAction = async (id) => {
    const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`, {

        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'tokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI' // Thay thế bằng token thật của bạn
        },

        next: { revalidate: 10 }
    });
    const data = await res.json();
    // console.log('res',data);
    return data.content;
}

// export const postBinhLuanAction = async (payload) => {
//     try {
//         const res = await fetch(`https://fiverrnew.cybersoft.edu.vn/api/binh-luan`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'tokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3MCIsIkhldEhhblN0cmluZyI6IjIzLzAyLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0MDI2ODgwMDAwMCIsIm5iZiI6MTcxMDY5NDgwMCwiZXhwIjoxNzQwNDE2NDAwfQ.4h_n3Y6QkB2Fd9Do7Om2uu2eskXK3qO1JS-Fk_NChQI'
//                 'token': 
//             },
//             body: JSON.stringify(payload), // Chuyển đổi payload thành chuỗi JSON để gửi lên server
//             next: { revalidate: 10 }
//         });

//         // Kiểm tra xem response có thành công không
//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }

//         const data = await res.json(); // Chuyển đổi dữ liệu response thành JSON
//         return data; // Trả về dữ liệu sau khi API xử lý thành công
//     } catch (error) {
//         console.error("Error posting comment:", error);
//         throw error; // Ném lỗi ra ngoài để có thể xử lý tại nơi gọi hàm
//     }
// };

