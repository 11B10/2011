(function () {
  'use strict';

  const T = window.THREE;
  const STORAGE_KEY = 'tri_an_20_11_books_v16';
  const SETTINGS_KEY = 'tri_an_20_11_settings_v3';
  const PUBLIC_GITHUB_PAGES_URL = 'https://11b10.github.io/2011/';

  const SUBPATH_SLUGS = new Set([
    'ban-sac-van-hoa-viet-nam',
    'giao-luu-tiep-bien-van-hoa',
    'co-so-van-hoa-viet-nam',
    'viet-nam-van-hoa-su-cuong',
    'lang-du-trong-van-hoa-viet-nam',
    'long-than-tuong',
    'det-nen-trieu-dai',
    'ngan-nam-ao-mu',
    'tho-bay-mau',
    'canh-hoa-troi-giua-hoang-trieu',
    'cam-nang-chuyen-doi-so-di-san',
    'khai-huyen-muon',
    'tran-hung-dao-lsvn-bang-tranh',
    'tuc-mac-co-giai-nhan',
    'sai-gon-xua-va-nay',
    'van-hoa-va-hoi-nhap-tap-2',
    'tiep-bien-van-hoa-ly-thuyet-he-thong',
    'giao-luu-tiep-bien-trong-toan-cau-hoa',
    'van-hoa-viet-nam-truyen-thong-va-hien-dai',
    'viet-nam-phong-tuc',
    'tet-co-truyen-viet-nam',
    'van-hoa-viet-nam-nhin-tu-my-thuat',
    'tranh-dan-gian-viet-nam',
    'hai-ba-trung-truyen-tranh-lich-su',
    'truyen-kieu-nguyen-du',
    'tuc-ngu-ca-dao-dan-ca-viet-nam',
    'la-co-theu-sau-chu-vang',
    'chuyen-tao-lao-cua-vang-vang'
  ]);

  const DEFAULT_BOOKS = [
    {
      id: 'ban-sac-van-hoa-viet-nam',
      shortTitle: 'Bản sắc VHVN',
      bgWord: 'BẢN SẮC',
      title: 'Bản sắc văn hóa Việt Nam',
      author: 'GS. Phan Ngọc',
      url: 'https://fr.scribd.com/document/1027136379/B%E1%BA%A3n-S%E1%BA%AFc-V%C4%83n-Hoa-Vi%E1%BB%87t-Nam-Phan-Ng%E1%BB%8Dc',
      image: './assets/books/ban-sac-van-hoa-viet-nam.jpg',
      accentColor: '#d97706',
      glow1: 'rgba(245, 158, 11, 0.46)',
      glow2: 'rgba(225, 29, 72, 0.36)',
      bullets: [
        {
          heading: 'Bốn trục tâm thức bất biến',
          text: 'Văn hóa là hệ thống quan hệ gắn kết con người với Tổ quốc, Làng xã, Thân phận và Diện mạo qua mọi biến động.'
        },
        {
          heading: 'Lăng kính khúc xạ văn hóa',
          text: 'Người Việt tiếp thu Nho, Phật, Đạo và văn minh phương Tây bằng sự khúc xạ bản địa chứ không sao chép rập khuôn.'
        },
        {
          heading: 'Bản lĩnh hội nhập 20/11',
          text: 'Thấu hiểu cái bất biến của dân tộc là chìa khóa giúp thế hệ trẻ mở cửa đón tinh hoa mà không hòa tan.'
        }
      ],
      quote: '“Bản sắc văn hóa là mặt bất biến của một hệ thống quan hệ qua lịch sử.”',
      takeaway: 'Giữ vững bốn trụ cột tâm thức để tự tin chuyển hóa ngoại lực thành nội lực.'
    },
    {
      id: 'giao-luu-tiep-bien-van-hoa',
      shortTitle: 'Giao lưu tiếp biến',
      bgWord: 'TIẾP BIẾN',
      title: 'Giao lưu tiếp biến văn hóa & sự biến đổi văn hóa Việt Nam',
      author: 'Chuyên khảo Văn hóa học',
      url: 'https://fr.scribd.com/document/1049743615/8002-Giao-L%C6%B0u-Ti%E1%BA%BFp-Bi%E1%BA%BFn-V%C4%83n-Hoa-Va-S%E1%BB%B1-Bi%E1%BA%BFn-%C4%90%E1%BB%95i-V%C4%83n-Hoa-Vi%E1%BB%87t-Nam',
      image: './assets/books/giao-luu-tiep-bien-van-hoa.jpg',
      accentColor: '#34d399',
      glow1: 'rgba(16, 185, 129, 0.44)',
      glow2: 'rgba(59, 130, 246, 0.38)',
      bullets: [
        {
          heading: 'Hòa quyện nội sinh – ngoại sinh',
          text: 'Mọi yếu tố ngoại lai muốn bén rễ lâu dài đều phải đi qua sự chọn lọc của cơ tầng văn hóa bản địa Việt Nam.'
        },
        {
          heading: 'Ba cuộc tiếp xúc lịch sử',
          text: 'Văn hóa Việt bồi đắp qua giao thoa Đông Á, Ấn Độ – Champa và phương Tây cận đại, khai sinh chữ Quốc ngữ.'
        },
        {
          heading: 'Sức đề kháng trong kỷ nguyên số',
          text: 'Lòng yêu nước, tiếng Việt và nghĩa tình cộng đồng tạo nên tấm khiên bản sắc trước làn sóng toàn cầu hóa.'
        }
      ],
      quote: '“Đứng ở ngã tư đường giao lưu, văn hóa Việt biết đối đầu và Việt hóa.”',
      takeaway: 'Tiếp thu cái mới tiến bộ trên nền tảng cội nguồn để không đánh mất mình.'
    },
    {
      id: 'co-so-van-hoa-viet-nam',
      shortTitle: 'Cơ sở VHVN',
      bgWord: 'CƠ SỞ',
      title: 'Cơ sở văn hóa Việt Nam',
      author: 'GS. TSKH Trần Ngọc Thêm',
      url: 'https://11b10.github.io/2011/assets/pdfs/Co_so_van_hoa_Viet_Nam_Tran_Ngoc_Them.pdf',
      image: './assets/books/co-so-van-hoa-viet-nam.jpg',
      accentColor: '#fbbf24',
      glow1: 'rgba(251, 191, 36, 0.46)',
      glow2: 'rgba(16, 185, 129, 0.36)',
      bullets: [
        {
          heading: 'Cội nguồn văn hóa gốc lúa nước',
          text: 'Hình thành từ vùng châu thổ sông Hồng và Đông Nam Á, tạo nên lối sống trọng tĩnh, trọng tình và ưa hài hòa.'
        },
        {
          heading: 'Triết lý Âm Dương – Ngũ Hành',
          text: 'Tư duy tổng hợp nhìn vạn vật trong sự bổ sung cân bằng giữa Trời – Đất – Con người và quy luật tương sinh.'
        },
        {
          heading: 'Cấu trúc Làng – Nước bền chặt',
          text: 'Từ tế bào làng xã tự trị đến nếp ăn, mặc, ở thuận tự nhiên đều thấm đẫm tinh thần dung hợp của người Việt.'
        }
      ],
      quote: '“Đặc trưng tối thượng của văn hóa gốc nông nghiệp là trọng tình và hài hòa.”',
      takeaway: 'Giải mã phong tục Việt từ chính nền văn minh lúa nước giàu tính nhân văn.'
    },
    {
      id: 'viet-nam-van-hoa-su-cuong',
      shortTitle: 'VN Văn hóa sử cương',
      bgWord: 'SỬ CƯƠNG',
      title: 'Việt Nam văn hóa sử cương',
      author: 'Học giả Đào Duy Anh',
      url: 'https://fr.scribd.com/document/675715360/Vi%E1%BB%87t-Nam-V%C4%83n-Hoa-S%E1%BB%AD-C%C6%B0%C6%A1ng-%C4%90ao-Duy-Anh',
      image: './assets/books/viet-nam-van-hoa-su-cuong.jpg',
      accentColor: '#60a5fa',
      glow1: 'rgba(59, 130, 246, 0.44)',
      glow2: 'rgba(245, 158, 11, 0.38)',
      bullets: [
        {
          heading: '“Văn hóa tức là sinh hoạt” (1938)',
          text: 'Khảo sát toàn diện nền kinh tế nông nghiệp, thủ công mỹ nghệ, gốm sứ, dệt lụa và đời sống vật chất bốn nghìn năm.'
        },
        {
          heading: 'Thiết chế xã hội & khoa cử',
          text: 'Hệ thống hóa cấu trúc gia đình, làng xã, chế độ khoa cử Nho học, văn học chữ Hán – Nôm và Tam giáo cổ truyền.'
        },
        {
          heading: 'Thức tỉnh bản lĩnh thế hệ mới',
          text: 'Viết trong cuộc va đập Đông – Tây đầu thế kỷ XX để người Việt ôn lại vốn cổ và tỉnh táo đón văn minh mới.'
        }
      ],
      quote: '“Văn hóa tức là sinh hoạt, bao gồm cả đời sống vật chất lẫn tinh thần.”',
      takeaway: 'Di sản học thuật nghiêm cẩn giúp thế hệ sau hiểu sâu sắc mạch nguồn sử Việt.'
    },
    {
      id: 'lang-du-trong-van-hoa-viet-nam',
      shortTitle: 'Lãng du văn hóa',
      bgWord: 'LÃNG DU',
      title: 'Lãng du trong văn hóa Việt Nam',
      author: 'Nhà văn hóa Hữu Ngọc',
      url: 'https://fr.scribd.com/document/804984636/Lang-Du-Trong-Van-Hoa-Viet-Nam-Huu-Ngoc',
      image: './assets/books/lang-du-trong-van-hoa-viet-nam.jpg',
      accentColor: '#f472b6',
      glow1: 'rgba(236, 72, 153, 0.44)',
      glow2: 'rgba(139, 92, 246, 0.38)',
      bullets: [
        {
          heading: 'Hành trình xê dịch muôn sắc Việt',
          text: 'Từ phiên chợ núi cao Tây Bắc, phố cổ miền Trung đến sông nước Cửu Long, khắc họa nét đẹp phong tục từng miền.'
        },
        {
          heading: 'Tản văn uyên bác bên chén trà sen',
          text: 'Giọng văn mộc mạc mà sâu xa kể chuyện hiếu học, đạo lý uống nước nhớ nguồn và nếp ứng xử tinh tế trong gia đình.'
        },
        {
          heading: 'Nhịp cầu lan tỏa ra năm châu',
          text: 'Giới thiệu tâm hồn Việt với bạn bè quốc tế cùng thông điệp đối thoại bình đẳng: hòa nhập nhưng không hòa tan.'
        }
      ],
      quote: '“Hòa nhập với nhân loại nhưng tuyệt đối không hòa tan bản sắc cội nguồn.”',
      takeaway: 'Mỗi trang ký văn hóa là nhịp cầu đưa tri thức và hồn Việt chạm tới trái tim.'
    },
    {
      id: 'long-than-tuong',
      shortTitle: 'Long Thần Tướng',
      bgWord: 'THẦN TƯỚNG',
      title: 'Long Thần Tướng',
      author: 'Phong Dương Comics (Khánh Dương · Thành Phong · Mỹ Anh)',
      url: 'https://books.google.com.vn/books?id=vFLWDwAAQBAJ&pg=PA8&hl=vi&source=gbs_toc_r&cad=2#v=onepage&q&f=false',
      image: './assets/books/long-than-tuong.jpg?v=8',
      accentColor: '#f87171',
      glow1: 'rgba(239, 68, 68, 0.46)',
      glow2: 'rgba(245, 158, 11, 0.38)',
      bullets: [
        {
          heading: 'Bức tranh Đại Việt thời nhà Trần',
          text: 'Bộ truyện tranh dã sử lấy bối cảnh nước Đại Việt trước và trong cuộc kháng chiến chống quân Nguyên Mông hào hùng.'
        },
        {
          heading: 'Đan cài sử thật & số phận con người',
          text: 'Kết nối hành trình của các nhân vật hư cấu với những danh tướng lịch sử như Trần Hưng Đạo, Trần Bình Trọng và bí ẩn Long Thần Tướng.'
        },
        {
          heading: 'Phục dựng văn hóa Việt bằng hội họa',
          text: 'Khảo cứu công phu trang phục, kiến trúc, võ thuật và đời sống cổ truyền, giành Giải Vàng Truyện tranh Quốc tế Nhật Bản.'
        }
      ],
      quote: '“Lịch sử không chỉ nằm trên trang giấy cũ mà sống dậy hào hùng trong từng nét vẽ Việt.”',
      takeaway: 'Tác phẩm dã sử tiêu biểu khơi dậy tình yêu lịch sử và văn hóa dân tộc cho thế hệ trẻ.'
    },
    {
      id: 'det-nen-trieu-dai',
      shortTitle: 'Dệt Nên Triều Đại',
      bgWord: 'CỔ PHỤC',
      title: 'Dệt Nên Triều Đại',
      author: 'Vietnam Centre · Comicola',
      url: 'https://comi.mobi/truyen/det-nen-trieu-dai/',
      image: './assets/books/det-nen-trieu-dai.jpg?v=8',
      accentColor: '#eab308',
      glow1: 'rgba(234, 179, 8, 0.46)',
      glow2: 'rgba(185, 28, 28, 0.38)',
      bullets: [
        {
          heading: 'Toàn cảnh trang phục cung đình Lê Sơ',
          text: 'Công trình khảo cứu hệ thống quy chế mũ áo, lễ phục của hoàng gia và quan lại Đại Việt thời đầu nhà Hậu Lê.'
        },
        {
          heading: 'Từ sử liệu đến phục dựng thực tế',
          text: 'Kết hợp đối chiếu văn bản cổ, hiện vật khảo cổ với tranh vẽ minh họa chi tiết và bộ ảnh phỏng dựng gấm vóc sống động.'
        },
        {
          heading: 'Lan tỏa niềm tự hào Cổ phục Việt',
          text: 'Ấn phẩm song ngữ Việt – Anh đặt nền móng trực quan cho điện ảnh, mỹ thuật và phong trào tìm về trang phục truyền thống.'
        }
      ],
      quote: '“Mỗi đường kim mũi chỉ trên cổ phục là một chương lịch sử sống động của văn hiến Đại Việt.”',
      takeaway: 'Gìn giữ và phục hưng vẻ đẹp trang phục truyền thống Việt Nam bằng tri thức khảo cứu chuẩn xác.'
    },
    {
      id: 'ngan-nam-ao-mu',
      shortTitle: 'Ngàn năm áo mũ',
      bgWord: 'ÁO MŨ',
      title: 'Ngàn năm áo mũ',
      author: 'Học giả Trần Quang Đức',
      url: 'https://www.google.com.vn/books/edition/_/-FcsMQAACAAJ?hl=en&sa=X&ved=2ahUKEwjd56-YoIWYAxWmin0EHQn_HRYQ8fIDegQIDxAD',
      image: './assets/books/ngan-nam-ao-mu.jpg?v=8',
      accentColor: '#38bdf8',
      glow1: 'rgba(56, 189, 248, 0.46)',
      glow2: 'rgba(250, 204, 21, 0.38)',
      bullets: [
        {
          heading: 'Hành trình 1000 năm trang phục Việt',
          text: 'Khảo cứu toàn diện lịch sử biến đổi trang phục cung đình và dân gian Việt Nam xuyên suốt từ thời Lý đến thời Nguyễn (1009–1945).'
        },
        {
          heading: 'Giải mã quy chế Áo Mũ các triều đại',
          text: 'Đối chiếu hàng trăm nguồn sử liệu, bia ký, tranh tượng cổ để làm sáng tỏ kiểu dáng mũ miện, bào phục, khăn vấn và tục búi tóc.'
        },
        {
          heading: 'Cột mốc khai phóng cổ phục học',
          text: 'Phá bỏ những lầm tưởng về trang phục truyền thống, truyền cảm hứng mạnh mẽ cho làn sóng phục dựng cổ phục Việt đương đại.'
        }
      ],
      quote: '“Trang phục không chỉ che thân mà còn phản chiếu tư tưởng, thẩm mỹ và khí chất của cả một thời đại.”',
      takeaway: 'Công trình khảo cứu nền tảng mở ra bức tranh toàn cảnh về diện mạo người Việt suốt một thiên niên kỷ.'
    },
    {
      id: 'tho-bay-mau',
      shortTitle: 'Thỏ Bảy Màu',
      bgWord: 'BẢY MÀU',
      title: 'Thỏ Bảy Màu',
      author: 'Họa sĩ Huỳnh Thái Ngọc · Comi',
      url: 'https://comi.mobi/truyen/tho-bay-mau/',
      image: './assets/books/tho-bay-mau.jpg?v=9',
      accentColor: '#ec4899',
      glow1: 'rgba(236, 72, 153, 0.46)',
      glow2: 'rgba(168, 85, 247, 0.40)',
      bullets: [
        {
          heading: 'Truyện tranh đời thường hài hước Việt',
          text: 'Xoay quanh cuộc sống thường ngày vừa ngây ngô vừa “lầy lội” của chú Thỏ trắng gắn nơ hồng cùng Ông Năm, Xô, chị Xoài và những người bạn.'
        },
        {
          heading: 'Lăng kính châm biếm & năng lượng tích cực',
          text: 'Biến những tình huống học đường, công sở và đời sống giới trẻ thành tiếng cười sảng khoái bằng nét vẽ tối giản nhưng giàu biểu cảm.'
        },
        {
          heading: 'Biểu tượng sáng tạo trẻ Việt Nam',
          text: 'Từ những mẩu truyện mạng trên Comi vươn thành thương hiệu truyện tranh, sách in và hoạt hình đại chúng được hàng triệu độc giả yêu mến.'
        }
      ],
      quote: '“Nghe lời Thỏ, kiếp này coi như bỏ — nhưng tiếng cười hồn nhiên thì ở lại mãi.”',
      takeaway: 'Sức sống của truyện tranh Việt hiện đại: gần gũi, dí dỏm và kết nối thế hệ trẻ bằng tiếng cười văn minh.'
    },
    {
      id: 'canh-hoa-troi-giua-hoang-trieu',
      shortTitle: 'Cánh Hoa Trôi',
      bgWord: 'HOÀNG TRIỀU',
      title: 'Cánh Hoa Trôi Giữa Hoàng Triều',
      author: 'Họa sĩ Tuyết Tuyết · POPS & Comicola',
      url: 'https://pops.vn/comics/canh-hoa-troi-giua-hoang-trieu-5eb50388aa63450033ea5ab1',
      image: './assets/books/canh-hoa-troi-giua-hoang-trieu.jpg?v=10',
      accentColor: '#fb7185',
      glow1: 'rgba(251, 113, 133, 0.46)',
      glow2: 'rgba(45, 212, 191, 0.38)',
      bullets: [
        {
          heading: 'Bi kịch Nữ đế duy nhất sử Việt',
          text: 'Khắc họa cuộc đời nhiều biến động của Lý Chiêu Hoàng — vị nữ hoàng đế lên ngôi khi mới sáu tuổi giữa buổi hoàng hôn của triều đại nhà Lý.'
        },
        {
          heading: 'Cuộc chuyển giao quyền lực Lý – Trần',
          text: 'Tái hiện những mưu lược chính trị chốn thâm cung cùng mối duyên thơ ngây mà đầy trắc trở giữa Lý Chiêu Hoàng và Trần Cảnh (vua Trần Thái Tông).'
        },
        {
          heading: 'Hơi thở cung đình qua nét vẽ trẻ',
          text: 'Kết hợp chất liệu chính sử với ngôn ngữ truyện tranh hiện đại, đưa lịch sử Đại Việt thế kỷ XIII chạm tới cảm xúc của hàng triệu độc giả.'
        }
      ],
      quote: '“Giữa vòng xoáy vương quyền, kiếp người mỏng manh như cánh hoa trôi trên dòng nước lịch sử.”',
      takeaway: 'Thấu cảm thân phận con người đằng sau những trang sử lớn của thời đại Lý – Trần.'
    },
    {
      id: 'cam-nang-chuyen-doi-so-di-san',
      shortTitle: 'Chuyển đổi số di sản',
      bgWord: 'DI SẢN SỐ',
      title: 'Cẩm nang chuyển đổi số trong truyền thông và phát huy di sản văn hóa ở cơ sở',
      author: 'NXB Văn hóa Dân tộc',
      url: 'https://nxbvanhoadantoc.vn/Books/Pdf/55',
      image: './assets/books/cam-nang-chuyen-doi-so-di-san.jpg?v=11',
      accentColor: '#2dd4bf',
      glow1: 'rgba(45, 212, 191, 0.44)',
      glow2: 'rgba(250, 204, 21, 0.36)',
      bullets: [
        {
          heading: 'Số hóa truyền thông văn hóa cơ sở',
          text: 'Hướng dẫn thực hành vận hành loa truyền thanh thông minh, xây dựng kênh Zalo, fanpage cộng đồng đưa thông tin văn hóa tới từng thôn bản.'
        },
        {
          heading: 'Kỹ năng sản xuất nội dung di sản',
          text: 'Trang bị phương pháp quay dựng video ngắn, chụp ảnh tư liệu và tổ chức sự kiện trực tuyến nhằm quảng bá lễ hội, nghề truyền thống địa phương.'
        },
        {
          heading: 'Lan tỏa di sản trong kỷ nguyên số',
          text: 'Cầu nối giữa cán bộ văn hóa xã phường và thế hệ trẻ trong công cuộc bảo tồn, phát huy giá trị văn hóa các dân tộc Việt Nam.'
        }
      ],
      quote: '“Công nghệ số giúp tiếng cồng chiêng và hồn cốt di sản cơ sở ngân vang xa hơn bao giờ hết.”',
      takeaway: 'Cẩm nang thiết thực biến công cụ số thành đòn bẩy gìn giữ và lan tỏa văn hóa địa phương.'
    },
    {
      id: 'khai-huyen-muon',
      shortTitle: 'Khải Huyền Muộn',
      bgWord: 'CHIÊM NGHIỆM',
      title: 'Khải Huyền Muộn',
      author: 'Nhà văn Nguyễn Việt Hà',
      url: 'https://vietmessenger.com/books/?title=khai%20huyen%20muon',
      image: './assets/books/khai-huyen-muon.jpg?v=11',
      accentColor: '#f59e0b',
      glow1: 'rgba(245, 158, 11, 0.44)',
      glow2: 'rgba(147, 51, 234, 0.38)',
      bullets: [
        {
          heading: 'Cấu trúc tiểu thuyết lồng trong tiểu thuyết',
          text: 'Đan xen hai thế giới giữa nguyên mẫu ngoài đời và trang viết dang dở của nhà văn Bạch về mối quan hệ đầy trớ trêu giữa Cẩm My và Vũ.'
        },
        {
          heading: 'Bức tranh thị dân Hà Nội đương đại',
          text: 'Khắc họa bằng giọng văn trào phúng, sắc lạnh những góc khuất quyền lực, danh vọng và sự chới với tinh thần trong xã hội chuyển mình.'
        },
        {
          heading: 'Hành trình kiếm tìm đức tin & cứu rỗi',
          text: 'Đối thoại giữa Nho, Phật và Kitô giáo để phơi bày nỗi cô độc của người cầm bút cùng khao khát tìm lại điểm tựa đạo đức muộn màng.'
        }
      ],
      quote: '“Đời sống nhiều khi chỉ hiện nguyên hình rõ nét nhất qua những trang bản thảo còn đang dang dở.”',
      takeaway: 'Tác phẩm văn học đô thị giàu tính tự sự và chiêm nghiệm triết lý về nhân sinh thời hiện đại.'
    },
    {
      id: 'tran-hung-dao-lsvn-bang-tranh',
      shortTitle: 'Trần Hưng Đạo',
      bgWord: 'HƯNG ĐẠO',
      title: 'Lịch sử Việt Nam bằng tranh – Tập 25: Trần Hưng Đạo',
      author: 'Chủ biên: Trần Bạch Đằng · NXB Trẻ',
      url: 'https://drive.google.com/file/d/1K5lEo95UtpNJydBvfwtK7pdHf4UigEls/view?usp=drivesdk',
      image: './assets/books/tran-hung-dao-lsvn-bang-tranh.jpg?v=13',
      accentColor: '#f97316',
      glow1: 'rgba(249, 115, 22, 0.46)',
      glow2: 'rgba(220, 38, 38, 0.40)',
      bullets: [
        {
          heading: 'Thân thế vì nước quên nhà & trọng dụng hiền tài',
          text: 'Từ bậc vương tôn tài văn võ song toàn biết gạt bỏ thù riêng vì đại cục gia tộc – quốc gia, đến tấm gương rộng mở chiêu mộ nhân tài bình dân như Phạm Ngũ Lão, Yết Kiêu, Dã Tượng.'
        },
        {
          heading: 'Ba lần kháng chiến chống Nguyên Mông & chiến thắng Bạch Đằng',
          text: 'Trên cương vị Quốc công Tiết chế, Trần Hưng Đạo soạn Hịch tướng sĩ, Binh thư yếu lược và chỉ huy quân dân Đại Việt lập nên đại thắng Bạch Đằng năm 1288.'
        },
        {
          heading: 'Di huấn giữ nước & cảm hứng truyện tranh lịch sử hiện đại',
          text: 'Lời dặn “khoan thư sức dân làm kế sâu rễ bền gốc” cùng hình thức kể sử bằng tranh truyền lửa yêu nước và cảm hứng sáng tạo cho thế hệ trẻ hôm nay.'
        }
      ],
      quote: '“Khoan thư sức dân để làm kế sâu rễ bền gốc — đó là thượng sách giữ nước muôn đời.”',
      takeaway: 'Tác phẩm truyện tranh lịch sử kinh điển của NXB Trẻ khắc họa trọn vẹn nhân cách, mưu lược và hào khí Đông A của Hưng Đạo Đại Vương.'
    },
    {
      id: 'tuc-mac-co-giai-nhan',
      shortTitle: 'Tức Mặc Có Giai Nhân',
      bgWord: 'TỨC MẶC',
      title: 'Tức Mặc Có Giai Nhân',
      author: 'Đồng Lạc · Lạc Cõi Ngàn Năm',
      url: 'https://laccoingannam.wordpress.com/2018/01/10/oneshot-tuc-mac-co-giai-nhan/',
      image: './assets/books/tuc-mac-co-giai-nhan.jpg?v=11',
      accentColor: '#fbbf24',
      glow1: 'rgba(251, 191, 36, 0.44)',
      glow2: 'rgba(16, 185, 129, 0.36)',
      bullets: [
        {
          heading: 'Cuộc hội ngộ định mệnh nơi bến nước Hải Ấp',
          text: 'Lấy cảm hứng từ cuộc gặp gỡ giữa Thái tử Lý Sảm và người thiếu nữ họ Trần (sau là Linh Từ Quốc mẫu Trần Thị Dung) giữa loạn thế cuối triều Lý.'
        },
        {
          heading: 'Khúc dạo đầu cuộc chuyển giao Lý – Trần',
          text: 'Tái hiện bầu không khí vừa thơ mộng vừa ẩn chứa sóng ngầm chính biến mở đường cho cơ nghiệp nhà Trần lừng lẫy về sau.'
        },
        {
          heading: 'Dã sử văn chương giàu chất trữ tình',
          text: 'Ngòi bút mềm mại thổi hồn vào những dòng biên niên sử khô khan, khắc họa vẻ đẹp và bản lĩnh người phụ nữ Đại Việt.'
        }
      ],
      quote: '“Một lần dừng thuyền bên bến Tức Mặc, xoay chuyển vận mệnh cả hai vương triều.”',
      takeaway: 'Góc nhìn văn chương tinh tế về giao điểm giữa tình cảm con người và dòng chảy lịch sử dân tộc.'
    },
    {
      id: 'sai-gon-xua-va-nay',
      shortTitle: 'Sài Gòn Xưa & Nay',
      bgWord: 'SÀI GÒN',
      title: 'Sài Gòn Xưa Và Nay',
      author: 'Tạp chí Xưa & Nay · NXB Trẻ',
      url: 'https://archive.org/details/sai-gon-xua-va-nay/page/n3/mode/2up',
      image: './assets/books/sai-gon-xua-va-nay.jpg?v=11',
      accentColor: '#fb923c',
      glow1: 'rgba(251, 146, 60, 0.46)',
      glow2: 'rgba(180, 83, 9, 0.38)',
      bullets: [
        {
          heading: 'Hơn ba thế kỷ ký ức Sài Gòn – Gia Định',
          text: 'Tập hợp các bài nghiên cứu công phu về quá trình khai phá, quy hoạch đô thị, kiến trúc di sản từ Bến Nhà Rồng, Chợ Bến Thành đến đô thị hiện đại.'
        },
        {
          heading: 'Đời sống văn hóa – xã hội phóng khoáng',
          text: 'Khắc họa diện mạo Sài Gòn – Chợ Lớn qua báo chí, sinh hoạt thị dân, giao thương sông nước và sự giao thoa đa văn hóa Nam Bộ.'
        },
        {
          heading: 'Tư liệu quý về lịch sử địa danh Thành phố',
          text: 'Lưu giữ ký ức tên đường, bến bãi và những đổi thay qua thăng trầm thời cuộc của đầu tàu kinh tế – văn hóa phương Nam.'
        }
      ],
      quote: '“Hiểu Sài Gòn xưa để càng thêm trân trọng từng góc phố, nhịp cầu của thành phố hôm nay.”',
      takeaway: 'Kho tư liệu lịch sử và ký ức đô thị sâu sắc dành cho những ai yêu mến mảnh đất Sài Gòn – TP.HCM.'
    },
    {
      id: 'van-hoa-va-hoi-nhap-tap-2',
      shortTitle: 'Văn hóa & Hội nhập 2',
      bgWord: 'DUNG HỢP',
      title: 'Văn hóa và hội nhập: Tiếp biến và dung hợp văn hóa Việt Nam (Tập 2)',
      author: 'PGS. TS. Nguyễn Thừa Hỷ',
      url: 'https://ebook365.vn/van-hoa-va-hoi-nhap-tiep-bien-va-dung-hop-van-hoa-viet-nam-tap-2-rxeBxW.html',
      image: './assets/books/van-hoa-va-hoi-nhap-tap-2.jpg?v=11',
      accentColor: '#34d399',
      glow1: 'rgba(52, 211, 153, 0.44)',
      glow2: 'rgba(245, 158, 11, 0.38)',
      bullets: [
        {
          heading: 'Chủ thể văn hóa trước các làn sóng giao lưu',
          text: 'Khảo cứu quá trình người Việt đối thoại, tiếp thu và cải biến các giá trị văn hóa Đông Á lẫn phương Tây thành tài sản tinh thần của mình.'
        },
        {
          heading: 'Cơ chế dung hợp văn hóa Đông – Tây',
          text: 'Chỉ ra sự chuyển dịch từ tâm thế phòng vệ truyền thống sang chủ động lựa chọn tinh hoa nhân loại trong văn học, kiến trúc, ngôn ngữ và tư tưởng.'
        },
        {
          heading: 'Định hướng hội nhập tự chủ',
          text: 'Nhấn mạnh năng lực “dung hợp” chứ không hòa tan là sức sống bền bỉ đưa văn hóa Việt bước ra thế giới.'
        }
      ],
      quote: '“Dung hợp văn hóa là nghệ thuật biến cái ngoại sinh thành sinh lực mới trên gốc rễ dân tộc.”',
      takeaway: 'Cơ sở lý luận sắc bén giúp người trẻ hiểu quy luật giao lưu văn hóa trong tiến trình lịch sử.'
    },
    {
      id: 'tiep-bien-van-hoa-ly-thuyet-he-thong',
      shortTitle: 'Tiếp biến (Hệ thống)',
      bgWord: 'HỆ THỐNG',
      title: 'Tiếp biến văn hóa Việt Nam dưới góc nhìn lý thuyết hệ thống',
      author: 'PGS. TS. Nguyễn Thừa Hỷ · ĐH KHXH&NV',
      url: 'https://hcmussh.edu.vn/static/document/TiepbienVHVN.pdf',
      image: './assets/books/tiep-bien-van-hoa-ly-thuyet-he-thong.jpg?v=11',
      accentColor: '#38bdf8',
      glow1: 'rgba(56, 189, 248, 0.46)',
      glow2: 'rgba(251, 191, 36, 0.36)',
      bullets: [
        {
          heading: 'Tiếp biến văn hóa như một hệ thống động',
          text: 'Phân tích quá trình tiếp xúc và biến đổi kép về văn hóa – tâm lý thông qua mạng lưới tương tác thuận nghịch giữa các thành tố văn hóa.'
        },
        {
          heading: 'Đa tầng chủ thể: Quốc gia đến Cá nhân',
          text: 'Mở rộng khung quan sát từ cấp vĩ mô quốc gia, khu vực xuống tới vùng miền, cộng đồng làng xã và ứng xử của từng cá nhân.'
        },
        {
          heading: 'Tư duy phức hợp đa chiều trong hội nhập',
          text: 'Đề xuất vượt qua cách nhìn nhị nguyên giản đơn (“tốt – xấu”, “ta – người”) để tiếp cận văn hóa Việt như một chỉnh thể tự điều chỉnh.'
        }
      ],
      quote: '“Tiếp biến văn hóa là sự tương tác đa chiều giúp một hệ thống văn hóa tự làm mới để tồn tại.”',
      takeaway: 'Phương pháp luận hiện đại giúp lý giải sâu sắc sự vận động linh hoạt của văn hóa Việt Nam.'
    },
    {
      id: 'giao-luu-tiep-bien-trong-toan-cau-hoa',
      shortTitle: 'Bản sắc & Toàn cầu hóa',
      bgWord: 'TOÀN CẦU',
      title: 'Giao lưu tiếp biến văn hóa & bảo tồn bản sắc văn hóa Việt Nam trong toàn cầu hóa',
      author: 'Tài liệu chuyên khảo · ĐH KHXH&NV TP.HCM',
      url: 'https://www.studocu.vn/vn/document/dai-hoc-khoa-hoc-xa-hoi-va-nhan-van-dai-hoc-quoc-gia-thanh-pho-ho-chi-minh/co-so-van-hoa-viet-nam/giao-luu-tiep-bien-van-hoa-va-bao-ton-ban-sac-van-hoa-viet-nam-trong-toan-cau/134267905?sid=755133971794715415',
      image: './assets/books/giao-luu-tiep-bien-trong-toan-cau-hoa.jpg?v=11',
      accentColor: '#14b8a6',
      glow1: 'rgba(20, 184, 166, 0.44)',
      glow2: 'rgba(245, 158, 11, 0.36)',
      bullets: [
        {
          heading: 'Thách thức của làn sóng toàn cầu hóa',
          text: 'Nhận diện nguy cơ đồng hóa văn hóa, phai nhạt tiếng Việt và giá trị gia đình trước sức ép của công nghệ số và văn hóa tiêu dùng.'
        },
        {
          heading: 'Bản lĩnh chọn lọc tinh hoa thế giới',
          text: 'Vận dụng bài học lịch sử giao lưu văn hóa để chủ động tiếp thu khoa học, văn minh nhân loại phục vụ phát triển đất nước.'
        },
        {
          heading: 'Vai trò thế hệ trẻ bảo vệ bản sắc',
          text: 'Khẳng định trách nhiệm giáo dục di sản, làm giàu truyền thống dân tộc bằng sáng tạo đương đại trên trường quốc tế.'
        }
      ],
      quote: '“Toàn cầu hóa không làm mất đi bản sắc nếu mỗi thế hệ biết giữ lửa văn hóa từ cội nguồn.”',
      takeaway: 'Cảnh tỉnh và định hướng hành động thiết thực để phát triển bền vững mà không đánh mất căn cước Việt.'
    },
    {
      id: 'van-hoa-viet-nam-truyen-thong-va-hien-dai',
      shortTitle: 'Truyền thống & Hiện đại',
      bgWord: 'HIỆN ĐẠI',
      title: 'Một số vấn đề văn hóa Việt Nam truyền thống và hiện đại',
      author: 'PGS. TS. Nguyễn Đăng Duy',
      url: 'https://www.scribd.com/document/944154899/Mot-so-van-de-van-hoa-Viet-Nam-truyen-thong-va-hien-dai',
      image: './assets/books/van-hoa-viet-nam-truyen-thong-va-hien-dai.jpg?v=11',
      accentColor: '#e11d48',
      glow1: 'rgba(225, 29, 72, 0.44)',
      glow2: 'rgba(56, 189, 248, 0.38)',
      bullets: [
        {
          heading: 'Dòng chảy từ cội nguồn lúa nước đến hiện đại',
          text: 'Hệ thống hóa đặc trưng văn hóa truyền thống Việt Nam từ thời dựng nước, cột mốc tự chủ Đại Việt đến sự chuyển mình thời kỳ đổi mới.'
        },
        {
          heading: 'Tư tưởng của các danh nhân văn hóa lớn',
          text: 'Phân tích di sản tư tưởng của Nguyễn Trãi, Nguyễn Bỉnh Khiêm, Lê Quý Đôn, Nguyễn Đình Chiểu và Hồ Chí Minh trong việc định hình nhân cách Việt.'
        },
        {
          heading: 'Xây dựng văn hóa & con người mới',
          text: 'Giải quyết hài hòa mối quan hệ giữa bảo tồn thuần phong mỹ tục làng xã với đòi hỏi năng động, sáng tạo của kinh tế thị trường và công nghiệp hóa.'
        }
      ],
      quote: '“Văn hóa vừa là nền tảng tinh thần vững chắc vừa là động lực nội sinh đưa dân tộc đi tới tương lai.”',
      takeaway: 'Công trình tổng hợp công phu kết nối giá trị truyền thống ngàn đời với khát vọng hiện đại hóa.'
    },
    {
      id: 'viet-nam-phong-tuc',
      shortTitle: 'Việt Nam phong tục',
      bgWord: 'PHONG TỤC',
      title: 'Việt Nam phong tục',
      author: 'Học giả Phan Kế Bính',
      url: 'https://www.scribd.com/document/716869766/Sach-Vi%E1%BB%87t-Nam-phong-t%E1%BB%A5c-Phan-K%E1%BA%BF-Binh',
      image: './assets/books/viet-nam-phong-tuc.jpg?v=12',
      accentColor: '#d97706',
      glow1: 'rgba(217, 119, 6, 0.45)',
      glow2: 'rgba(180, 83, 9, 0.36)',
      bullets: [
        {
          heading: 'Bức tranh sinh hoạt từ gia tộc đến làng xã',
          text: 'Mở ra bức tranh sinh hoạt độc đáo của người Việt hơn một thế kỷ trước, từ đạo lý gia đình, họ hàng đến lệ làng và đời sống xã hội.'
        },
        {
          heading: 'Khám phá gốc tích lễ Tết, cưới hỏi, tế tự',
          text: 'Dẫn dắt người đọc tìm hiểu nguồn gốc các phong tục, nghi lễ, lễ Tết, cưới hỏi qua lối viết điềm đạm, dí dỏm và sâu cay.'
        },
        {
          heading: 'Gạn đục khơi trong — giữ gìn quốc túy',
          text: 'Giúp nhận diện rõ đâu là nét đẹp “quốc túy” cần trân trọng bảo lưu và đâu là những hủ tục rườm rà cần mạnh dạn cải cách.'
        }
      ],
      quote: '“Xét phong tục một nước tức là xét cái tâm lý, cái trình độ văn minh của cả một dân tộc qua bao đời.”',
      takeaway: 'Chuyến “xuyên không” thú vị về hơn một thế kỷ trước giúp thấu hiểu cội nguồn văn hóa Việt và suy ngẫm cho hiện tại.'
    },
    {
      id: 'tet-co-truyen-viet-nam',
      shortTitle: 'Tết cổ truyền VN',
      bgWord: 'TẾT VIỆT',
      title: 'Tết cổ truyền Việt Nam',
      author: 'Nhiều tác giả · Tủ sách Văn hóa',
      url: 'https://fr.scribd.com/document/444695709/T%E1%BA%BFt-C%E1%BB%95-Truy%E1%BB%81n-Vi%E1%BB%87t-Nam',
      image: './assets/books/tet-co-truyen-viet-nam.jpg?v=12',
      accentColor: '#dc2626',
      glow1: 'rgba(220, 38, 38, 0.46)',
      glow2: 'rgba(250, 204, 21, 0.38)',
      bullets: [
        {
          heading: 'Không khí Tết xưa và nghi lễ truyền thống',
          text: 'Đưa người đọc trở về với không khí Tết cổ truyền ấm áp qua những phong tục từ lễ tiễn Ông Công Ông Táo, dựng cây nêu đến đêm Giao thừa thiêng liêng.'
        },
        {
          heading: 'Hương vị bánh chưng xanh và lời chúc đầu xuân',
          text: 'Từ tục gói bánh chưng, bày mâm ngũ quả cúng tổ tiên đến phong tục xông đất, mừng tuổi và xin chữ đầu năm đều chứa đựng ý nghĩa nhân văn sâu sắc.'
        },
        {
          heading: 'Gìn giữ linh hồn văn hóa và ký ức đoàn viên',
          text: 'Khơi dậy tình yêu quê hương, lòng hiếu kính tổ tiên và ý thức gìn giữ những giá trị sum vầy thiêng liêng của dân tộc Việt.'
        }
      ],
      quote: '“Tết không chỉ là thời khắc chuyển giao năm cũ và năm mới, mà còn là nơi lưu giữ ký ức, phong tục và linh hồn văn hóa Việt Nam.”',
      takeaway: 'Hành trình trở về với hương vị Tết xưa để thêm yêu và gìn giữ linh hồn văn hóa đoàn viên của người Việt.'
    },
    {
      id: 'van-hoa-viet-nam-nhin-tu-my-thuat',
      shortTitle: 'VHVN nhìn từ mỹ thuật',
      bgWord: 'MỸ THUẬT',
      title: 'Văn hóa Việt Nam nhìn từ mỹ thuật',
      author: 'PGS. Chu Quang Trứ',
      url: 'https://fr.scribd.com/document/955700367/V%C4%83n-Hoa-Vi%E1%BB%87t-Nam-Nhin-T%E1%BB%AB-M%E1%BB%B9-Thu%E1%BA%ADt-T%E1%BA%ADp-1-Chu-Quang-Tr%E1%BB%A9',
      image: './assets/books/van-hoa-viet-nam-nhin-tu-my-thuat.jpg?v=12',
      accentColor: '#0d9488',
      glow1: 'rgba(13, 148, 136, 0.44)',
      glow2: 'rgba(217, 119, 6, 0.36)',
      bullets: [
        {
          heading: 'Vẻ đẹp văn hóa qua kiến trúc đình chùa cổ',
          text: 'Khám phá chiều sâu văn hóa dân tộc qua các công trình kiến trúc truyền thống như mái đình làng, chùa cổ, tháp gạch và điêu khắc gỗ đá.'
        },
        {
          heading: 'Tâm hồn dân tộc trong từng nét chạm khắc',
          text: 'Từ rồng thời Lý – Trần, chạm gỗ đình làng thế kỷ XVI–XVII đến nghệ thuật trang trí dân gian đều phản chiếu lịch sử và thẩm mỹ hồn hậu của người Việt.'
        },
        {
          heading: 'Nhịp cầu nối hiện tại với cội nguồn nghệ thuật',
          text: 'Giúp thế hệ hôm nay đọc hiểu ngôn ngữ tạo hình của cha ông để thêm yêu, tự hào và trân trọng di sản mỹ thuật Việt Nam.'
        }
      ],
      quote: '“Mỗi mái đao cong, mỗi nét chạm khắc nơi đình làng chùa cổ đều lưu giữ tâm hồn, lịch sử và bản lĩnh sáng tạo của dân tộc Việt.”',
      takeaway: 'Hành trình khám phá vẻ đẹp lịch sử và tâm hồn dân tộc qua kiến trúc đình chùa, điêu khắc và mỹ thuật truyền thống.'
    },
    {
      id: 'tranh-dan-gian-viet-nam',
      shortTitle: 'Tranh dân gian VN',
      bgWord: 'TRANH VIỆT',
      title: 'Tranh dân gian Việt Nam',
      author: 'Tủ sách Mỹ thuật Phổ thông · NXB Mỹ Thuật',
      url: 'https://11b10.github.io/2011/assets/pdfs/Tranh_dan_gian_Viet_Nam.pdf',
      image: './assets/books/tranh-dan-gian-viet-nam.jpg?v=12',
      accentColor: '#b91c1c',
      glow1: 'rgba(185, 28, 28, 0.44)',
      glow2: 'rgba(234, 179, 8, 0.38)',
      bullets: [
        {
          heading: 'Tinh hoa các dòng tranh Đông Hồ, Hàng Trống, Kim Hoàng',
          text: 'Giới thiệu toàn diện nguồn gốc, kỹ thuật khắc ván in, chất liệu giấy dó điệp óng ánh và bảng màu tự nhiên của các dòng tranh dân gian nổi tiếng.'
        },
        {
          heading: 'Ước vọng bình dị và sinh hoạt của người Việt xưa',
          text: 'Qua mỗi bức tranh Vinh hoa, Phú quý, Đám cưới chuột hay Ngũ hổ, người đọc bắt gặp phong tục, tín ngưỡng và khát vọng ấm no của cha ông.'
        },
        {
          heading: 'Di sản nghệ thuật truyền đời của dân tộc',
          text: 'Khẳng định giá trị thẩm mỹ độc đáo của dòng tranh dân gian và khơi dậy ý thức bảo tồn di sản văn hóa truyền thống qua nhiều thế hệ.'
        }
      ],
      quote: '“Màu dân tộc sáng bừng trên giấy điệp — mỗi bức tranh dân gian là một lát cắt sống động về ước mơ, tín ngưỡng và tâm hồn Việt.”',
      takeaway: 'Khám phá thế giới đầy màu sắc của tranh Đông Hồ, Hàng Trống, Kim Hoàng trên nền giấy dó điệp truyền thống.'
    },
    {
      id: 'hai-ba-trung-truyen-tranh-lich-su',
      shortTitle: 'Hai Bà Trưng',
      bgWord: 'MÊ LINH',
      title: 'Hai Bà Trưng (Truyện tranh Lịch sử)',
      author: 'Nhiều tác giả · NXB Đại học Sư phạm',
      url: 'https://online.pubhtml5.com/lpais/pgjp/',
      image: './assets/books/hai-ba-trung-truyen-tranh-lich-su.jpg?v=12',
      accentColor: '#e11d48',
      glow1: 'rgba(225, 29, 72, 0.45)',
      glow2: 'rgba(245, 158, 11, 0.38)',
      bullets: [
        {
          heading: 'Lời thề Mê Linh vang vọng non sông',
          text: 'Tái hiện sống động bối cảnh đất nước dưới ách đô hộ tàn bạo của nhà Đông Hán và ngọn lửa căm thù thúc giục hai chị em Trưng Trắc, Trưng Nhị phất cờ khởi nghĩa.'
        },
        {
          heading: 'Khí phách nữ anh hùng cưỡi voi ra trận',
          text: 'Hình ảnh Hai Bà Trưng cưỡi voi chiến cùng các nữ tướng khắp bốn phương tiến đánh 65 thành trì ở Lĩnh Nam, quét sạch quân xâm lược Tô Định.'
        },
        {
          heading: 'Biểu tượng bất khuất của phụ nữ và dân tộc Việt',
          text: 'Ca ngợi tinh thần yêu nước nồng nàn, ý chí độc lập tự chủ và hào khí anh dũng mở đầu trang sử vàng chống ngoại xâm của dân tộc.'
        }
      ],
      quote: '“Một xin rửa sạch nước thù, hai xin dựng lại nghiệp xưa họ Hùng — hào khí Mê Linh muôn đời rạng rỡ non sông.”',
      takeaway: 'Bộ truyện tranh lịch sử hào hùng tái hiện cuộc khởi nghĩa Hai Bà Trưng giành lại nền độc lập cho dân tộc.'
    },
    {
      id: 'truyen-kieu-nguyen-du',
      shortTitle: 'Truyện Kiều',
      bgWord: 'ĐOẠN TRƯỜNG',
      title: 'Truyện Kiều',
      author: 'Đại thi hào Nguyễn Du',
      url: 'https://11b10.github.io/2011/assets/pdfs/Truyen_Kieu_Nguyen_Du.pdf',
      image: './assets/books/truyen-kieu-nguyen-du.jpg?v=12',
      accentColor: '#7c3aed',
      glow1: 'rgba(124, 58, 237, 0.46)',
      glow2: 'rgba(251, 191, 36, 0.36)',
      bullets: [
        {
          heading: 'Mười lăm năm lưu lạc của bậc tài sắc',
          text: 'Kể về cuộc đời đầy sóng gió của nàng Thúy Kiều tài sắc vẹn toàn, vì chữ hiếu bán mình chuộc cha mà phải trải qua mười lăm năm chìm nổi truân chuyên.'
        },
        {
          heading: 'Tiếng kêu thương và giá trị nhân đạo sâu sắc',
          text: 'Tố cáo những thế lực bất công, tàn nhẫn chà đạp con người trong xã hội phong kiến, đồng thời ngợi ca lòng hiếu thảo, thủy chung và khát vọng tự do công lý.'
        },
        {
          heading: 'Đỉnh cao nghệ thuật thơ lục bát tiếng Việt',
          text: 'Kết tinh tinh hoa ngôn ngữ dân tộc và nghệ thuật tả cảnh ngụ tình điêu luyện, trở thành kiệt tác bất hủ của nền văn học Việt Nam và văn hóa nhân loại.'
        }
      ],
      quote: '“Chữ tâm kia mới bằng ba chữ tài — tiếng đàn và số phận nàng Kiều mãi là khúc ca nhân đạo bất hủ của tâm hồn Việt.”',
      takeaway: 'Kiệt tác thơ lục bát của đại thi hào Nguyễn Du ngợi ca vẻ đẹp tâm hồn, chữ Hiếu – chữ Tâm và khát vọng hạnh phúc của con người.'
    },
    {
      id: 'tuc-ngu-ca-dao-dan-ca-viet-nam',
      shortTitle: 'Tục ngữ, ca dao, dân ca',
      bgWord: 'CA DAO',
      title: 'Tục ngữ, ca dao, dân ca Việt Nam',
      author: 'Nhà nghiên cứu Vũ Ngọc Phan',
      url: 'https://pubhtml5.com/tdgd/nkpc/T%E1%BB%A5c-ng%E1%BB%AF-ca-dao-d%C3%A2n-ca-Vi%E1%BB%87t-Nam-V%C5%A9-Ng%E1%BB%8Dc-Phan-bi%C3%AAn-so%E1%BA%A1n/',
      image: './assets/books/tuc-ngu-ca-dao-dan-ca-viet-nam.jpg?v=12',
      accentColor: '#059669',
      glow1: 'rgba(5, 150, 105, 0.45)',
      glow2: 'rgba(250, 204, 21, 0.36)',
      bullets: [
        {
          heading: 'Kho tàng kinh nghiệm sống và trí tuệ dân gian',
          text: 'Tuyển chọn và phân tích hệ thống những câu tục ngữ đúc kết tri thức lao động sản xuất, quan sát thiên nhiên và đạo lý ứng xử của ông cha.'
        },
        {
          heading: 'Lời ca dao ngọt ngào và điệu dân ca mộc mạc',
          text: 'Tái hiện vẻ đẹp quê hương đất nước, tình nghĩa gia đình, tình yêu đôi lứa và đời sống tâm hồn phong phú của người bình dân Việt Nam.'
        },
        {
          heading: 'Gìn giữ vẻ đẹp trong sáng của tiếng Việt',
          text: 'Mỗi câu ca dao, tục ngữ là một viên ngọc ngôn từ giúp thế hệ hôm nay thêm yêu tiếng Việt, trân trọng cội nguồn và tự hào về bản sắc dân tộc.'
        }
      ],
      quote: '“Tục ngữ, ca dao là tấm gương phản chiếu trung thực nhất tâm hồn, trí tuệ và vẻ đẹp ngôn ngữ ngàn đời của nhân dân Việt Nam.”',
      takeaway: 'Công trình sưu tầm, nghiên cứu kinh điển của Vũ Ngọc Phan mở ra kho tàng trí tuệ và tâm hồn dân gian Việt Nam.'
    },
    {
      id: 'la-co-theu-sau-chu-vang',
      shortTitle: 'Lá cờ thêu 6 chữ vàng',
      bgWord: 'SÁU CHỮ VÀNG',
      title: 'Lá cờ thêu sáu chữ vàng',
      author: 'Nhà văn Nguyễn Huy Tưởng',
      url: 'https://vi.wikisource.org/wiki/L%C3%A1_c%E1%BB%9D_th%C3%AAu_s%C3%A1u_ch%E1%BB%AF_v%C3%A0ng/Ch%C6%B0%C6%A1ng_I',
      image: './assets/books/la-co-theu-sau-chu-vang.jpg?v=13',
      accentColor: '#ef4444',
      glow1: 'rgba(239, 68, 68, 0.46)',
      glow2: 'rgba(250, 204, 21, 0.40)',
      bullets: [
        {
          heading: 'Trái cam bóp nát bên bến Bình Than',
          text: 'Tái hiện nỗi uất ức và lòng yêu nước cháy bỏng của thiếu niên Hoài Văn Hầu Trần Quốc Toản khi vì còn nhỏ tuổi mà không được dự bàn việc quân trước họa xâm lăng Nguyên Mông.'
        },
        {
          heading: 'Ngọn cờ đỏ thêu sáu chữ vàng xung trận',
          text: 'Được mẹ trao lá cờ thêu sáu chữ vàng “Phá cường địch, báo hoàng ân”, chàng thiếu niên mười sáu tuổi chiêu mộ hơn ngàn tráng sĩ trẻ tuổi lập đội quân riêng sát cánh cùng tướng sĩ nhà Trần.'
        },
        {
          heading: 'Khúc tráng ca tuổi trẻ Việt Nam giữ nước',
          text: 'Từ núi rừng Ma Lục đến chiến trường Tây Kết, Chương Dương, Hàm Tử, hình tượng Trần Quốc Toản trở thành biểu tượng bất tử cho chí khí và lòng dũng cảm của thế hệ trẻ Việt Nam.'
        }
      ],
      quote: '“Phá cường địch, báo hoàng ân — sáu chữ vàng rực cháy trên lá cờ người thiếu niên anh hùng đất Đại Việt.”',
      takeaway: 'Kiệt tác văn học lịch sử của Nguyễn Huy Tưởng khơi dậy hào khí Đông A và khát vọng cống hiến của tuổi trẻ qua mọi thời đại.'
    },
    {
      id: 'chuyen-tao-lao-cua-vang-vang',
      shortTitle: 'Chuyện của Vàng Vàng',
      bgWord: 'VÀNG VÀNG',
      title: 'Chuyện tào lao của Vàng Vàng',
      author: 'Họa sĩ Phan Kim Thanh · Comicola',
      url: 'https://comi.mobi/truyen/chuyen-tao-lao-cua-vang-vang/',
      image: './assets/books/chuyen-tao-lao-cua-vang-vang.jpg?v=15',
      accentColor: '#eab308',
      glow1: 'rgba(234, 179, 8, 0.46)',
      glow2: 'rgba(239, 68, 68, 0.38)',
      bullets: [
        {
          heading: 'Lăng kính hài hước về đời sống & văn hóa Việt',
          text: 'Xoay quanh nhân vật Vàng Vàng ngộ nghĩnh, hồn nhiên cùng những mẩu chuyện đời thường, phong tục Tết, ẩm thực và thói quen mạng xã hội của giới trẻ Việt Nam.'
        },
        {
          heading: 'Thế giới nhân cách hóa sinh động & dí dỏm',
          text: 'Khéo léo biến những câu chuyện giao lưu văn hóa, lịch sử và thời sự quốc tế thành các màn tương tác hài hước, gần gũi giữa Vàng Vàng và bạn bè năm châu.'
        },
        {
          heading: 'Dấu ấn webcomic Việt Nam hiện đại',
          text: 'Từ hiện tượng mạng xã hội đến ấn phẩm truyện tranh được yêu thích trên Comicola, tác phẩm lan tỏa năng lượng tích cực và tình yêu văn hóa Việt bằng ngôn ngữ trẻ trung.'
        }
      ],
      quote: '“Dù đôi lúc ngơ ngác và hay bị bắt nạt, Vàng Vàng vẫn luôn giữ trọn nụ cười hồn nhiên cùng tình yêu quê hương ấm áp.”',
      takeaway: 'Bộ webcomic hài hước, duyên dáng của Phan Kim Thanh tái hiện đời sống và bản sắc người trẻ Việt giữa dòng chảy hội nhập.'
    }
  ];

  // State & Route Detection
  function getRootPrefix() {
    if (typeof window.APP_ROOT_PREFIX === 'string') return window.APP_ROOT_PREFIX;
    return './';
  }

  function resolveAssetPath(path) {
    if (!path) return '';
    if (path.startsWith('data:') || path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    return getRootPrefix() + path.replace(/^\.\//, '');
  }

  function detectRoute() {
    if (window.BOOK_ROUTE_SLUG) return { bookId: window.BOOK_ROUTE_SLUG, solo: true };
    const params = new URLSearchParams(window.location.search);
    const qb = params.get('book');
    if (qb) return { bookId: qb, solo: true };
    const hashMatch = window.location.hash.match(/book=([^&]+)/);
    if (hashMatch) return { bookId: decodeURIComponent(hashMatch[1]), solo: true };
    const pathMatch = window.location.pathname.match(/\/sach\/([^/]+)\/?$/);
    if (pathMatch) return { bookId: decodeURIComponent(pathMatch[1]), solo: true };
    return { bookId: null, solo: false };
  }

  function defaultBaseUrl() {
    const { hostname, origin, pathname } = window.location;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.endsWith('github.io')) {
      return PUBLIC_GITHUB_PAGES_URL;
    }
    const stripped = pathname.replace(/\/sach\/[^/]+\/?$/, '/').replace(/index\.html$/, '');
    return origin + (stripped.endsWith('/') ? stripped : stripped + '/');
  }

  function loadBooks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const defMap = new Map(DEFAULT_BOOKS.map((b) => [b.id, b]));
          const existingIds = new Set();
          for (const item of parsed) {
            if (item && item.id) {
              existingIds.add(item.id);
              const def = defMap.get(item.id);
              if (def) {
                item.url = def.url;
                item.image = def.image;
              }
            }
          }
          for (const def of DEFAULT_BOOKS) {
            if (!existingIds.has(def.id)) {
              parsed.push(JSON.parse(JSON.stringify(def)));
            }
          }
          return parsed;
        }
      }
    } catch (_) {}
    return JSON.parse(JSON.stringify(DEFAULT_BOOKS));
  }

  function saveBooks(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (_) {}
  }

  function loadSettings() {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (_) {}
    return { baseUrl: defaultBaseUrl() };
  }

  function saveSettings(s) {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
    } catch (_) {}
  }

  function getBookRouteUrl(book) {
    const base = (settings.baseUrl || defaultBaseUrl()).trim().split('?')[0].split('#')[0];
    const norm = base.endsWith('/') ? base : base + '/';
    if (SUBPATH_SLUGS.has(book.id)) {
      return `${norm}sach/${encodeURIComponent(book.id)}/`;
    }
    return `${norm}?book=${encodeURIComponent(book.id)}&solo=1`;
  }

  function slugify(str) {
    return (
      (str || 'sach')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'sach-' + Date.now()
    );
  }

  function splitSummaryIntoBullets(rawText, title) {
    const text = (rawText || '').trim();
    let parts = text
      .split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (parts.length < 3 && text) {
      const sentences = text.split(/(?<=[.!?…])\s+/).filter(Boolean);
      if (sentences.length >= 3) {
        const c = Math.ceil(sentences.length / 3);
        parts = [sentences.slice(0, c).join(' '), sentences.slice(c, c * 2).join(' '), sentences.slice(c * 2).join(' ')];
      }
    }
    while (parts.length < 3) parts.push(parts[parts.length - 1] || `Tóm tắt sách "${title}" nhân dịp 20/11.`);
    return [0, 1, 2].map((i) => ({
      heading: parts[i].split(/[,.;:!?]/)[0].slice(0, 44) || `Luận điểm 0${i + 1}`,
      text: parts[i]
    }));
  }

  let books = loadBooks();
  let settings = loadSettings();
  const route = detectRoute();
  let activeBookIdx = 0;
  if (route.bookId) {
    const foundIdx = books.findIndex((b) => b.id === route.bookId);
    if (foundIdx >= 0) activeBookIdx = foundIdx;
  }
  let currentVariant = 'original'; // 'original' | 'certificate'
  let modalOpen = false;
  let loadedArtImg = null;
  let loadedArtSrc = '';

  /* ======================================================================
     1. 3D PAPER TEXTURE AUTHORING (Ultra-HD 2000x2760 mapped to 1200x1656 Grid)
     ====================================================================== */
  const TW = 1200, TH = 1656;
  const CW = 2000, CH = 2760;
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const rng = (s) => () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return (s >>> 8) / 8388608;
  };
  const REDUCED = false;

  function rr(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function wrapL(ctx, text, x, y, maxW, lh, maxLines = 10) {
    const words = String(text || '').split(' ');
    let line = '';
    let yy = y;
    let linesDrawn = 0;
    for (const w of words) {
      const t = line ? line + ' ' + w : w;
      if (ctx.measureText(t).width > maxW && line) {
        ctx.fillText(line, x, yy);
        linesDrawn++;
        if (linesDrawn >= maxLines) return yy + lh;
        line = w;
        yy += lh;
      } else {
        line = t;
      }
    }
    if (line) {
      ctx.fillText(line, x, yy);
      yy += lh;
    }
    return yy;
  }

  function drawGlassText(ctx, text, x, y, strokeW = 7.5) {
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;
    ctx.shadowColor = 'rgba(2, 6, 18, 0.92)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    ctx.strokeStyle = 'rgba(3, 7, 18, 0.94)';
    ctx.lineWidth = strokeW;
    ctx.strokeText(text, x, y);
    ctx.shadowBlur = 0;
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  function wrapGlassL(ctx, text, x, y, maxW, lh, maxLines = 10, strokeW = 7) {
    const words = String(text || '').split(' ');
    let line = '';
    let yy = y;
    let linesDrawn = 0;
    for (const w of words) {
      const t = line ? line + ' ' + w : w;
      if (ctx.measureText(t).width > maxW && line) {
        drawGlassText(ctx, line, x, yy, strokeW);
        linesDrawn++;
        if (linesDrawn >= maxLines) return yy + lh;
        line = w;
        yy += lh;
      } else {
        line = t;
      }
    }
    if (line) {
      drawGlassText(ctx, line, x, yy, strokeW);
      yy += lh;
    }
    return yy;
  }

  function track(ctx, txt, x, y, sp, centre) {
    const chars = [...String(txt || '')];
    let total = 0;
    for (const c of chars) total += ctx.measureText(c).width + sp;
    total -= sp;
    let cx = centre ? x - total / 2 : x;
    for (const c of chars) {
      ctx.fillText(c, cx, y);
      cx += ctx.measureText(c).width + sp;
    }
    return total;
  }

  function signature(ctx, x, y, s, seed, color, lw) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    ctx.strokeStyle = color;
    ctx.lineWidth = lw || 2.2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const rnd = rng(seed * 7919 + 13);
    ctx.beginPath();
    ctx.moveTo(0, 15);
    ctx.bezierCurveTo(-3 + rnd() * 4, -7, 9, -20 - rnd() * 6, 15, -5);
    ctx.bezierCurveTo(18, 7, 7, 15, 9, 4);
    let px = 9, py = 4;
    const n = 4 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) {
      const step = 9 + rnd() * 11;
      const nx = px + step;
      const ny = 4 - (i % 2 ? -1 : 1) * (4 + rnd() * 13);
      ctx.bezierCurveTo(px + step * 0.35, py - 9 - rnd() * 10, nx - step * 0.35, ny + 7 + rnd() * 8, nx, ny);
      px = nx;
      py = ny;
    }
    ctx.bezierCurveTo(px + 9, py - 13, px + 21, py + 11, px + 29, py - 3);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = (lw || 2.2) * 0.64;
    ctx.moveTo(-5, 19);
    ctx.quadraticCurveTo(px * 0.55, 24 + rnd() * 5, px + 25, 12 + rnd() * 4);
    ctx.stroke();
    ctx.restore();
  }

  function drawQRCodeOnCanvas(ctx, url, x, y, size, darkColor, lightColor) {
    const grid = window.QRCodeGenerator.generateMatrix(url);
    const n = grid.length;
    const pad = 10;
    const mod = (size - pad * 2) / n;
    ctx.save();
    ctx.fillStyle = lightColor;
    rr(ctx, x, y, size, size, 12);
    ctx.fill();
    ctx.fillStyle = darkColor;
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        if (grid[r][c]) {
          ctx.fillRect(
            Math.floor(x + pad + c * mod),
            Math.floor(y + pad + r * mod),
            Math.ceil(mod),
            Math.ceil(mod)
          );
        }
      }
    }
    ctx.restore();
  }

  function drawImageCover(ctx, img, x, y, w, h, radius) {
    ctx.save();
    rr(ctx, x, y, w, h, radius);
    ctx.clip();
    const iw = img.naturalWidth || img.width || w;
    const ih = img.naturalHeight || img.height || h;
    const scale = Math.max(w / iw, h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = x + (w - dw) / 2;
    const dy = y + (h - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);
    ctx.restore();
  }

  function drawGlassContent(ctx, book) {
    // Canonical translucent see-through glass base
    ctx.fillStyle = 'rgba(255, 255, 255, 0.045)';
    rr(ctx, 0, 0, TW, TH, 26);
    ctx.fill();

    const fr = ctx.createLinearGradient(0, 180, 0, 1420);
    fr.addColorStop(0, 'rgba(255, 255, 255, 0)');
    fr.addColorStop(0.22, 'rgba(255, 255, 255, 0.08)');
    fr.addColorStop(0.78, 'rgba(255, 255, 255, 0.08)');
    fr.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = fr;
    ctx.fillRect(40, 180, 1120, 1240);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.38)';
    ctx.lineWidth = 2.2;
    rr(ctx, 20, 20, TW - 40, TH - 40, 16);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
    ctx.lineWidth = 1.1;
    rr(ctx, 36, 36, TW - 72, TH - 72, 12);
    ctx.stroke();

    const M = 76;
    const CW_INNER = TW - M * 2; // 1048px

    // 1. Header (Y = 56..210)
    ctx.fillStyle = '#FFE066';
    ctx.font = '700 22px "Be Vietnam Pro", sans-serif';
    drawGlassText(ctx, 'ẤN PHẨM ĐẶC BIỆT · TỦ SÁCH VĂN HÓA VIỆT NAM · TRI ÂN 20/11', M, 84, 6);

    let titlePt = 52;
    while (titlePt > 34) {
      ctx.font = '700 ' + titlePt + 'px "Be Vietnam Pro", sans-serif';
      if (ctx.measureText(book.title).width <= CW_INNER) break;
      titlePt -= 2;
    }
    ctx.fillStyle = '#FFFFFF';
    drawGlassText(ctx, book.title, M, 144, 8.5);

    ctx.fillStyle = '#F8FAFC';
    ctx.font = '600 28px "Be Vietnam Pro", sans-serif';
    drawGlassText(ctx, `Tác giả: ${book.author}`, M, 192, 6.5);

    // 2. Full-Width Illustration Frame (X = 76, Y = 228, W = 1048, H = 400)
    const artX = M, artY = 228, artW = CW_INNER, artH = 400;
    if (loadedArtImg && loadedArtImg.complete && (loadedArtImg.naturalWidth || loadedArtImg.width) > 0) {
      drawImageCover(ctx, loadedArtImg, artX, artY, artW, artH, 18);
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      rr(ctx, artX, artY, artW, artH, 18);
      ctx.fill();
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.42)';
    ctx.lineWidth = 2.5;
    rr(ctx, artX, artY, artW, artH, 18);
    ctx.stroke();

    // 3. Translucent Frosted Summary Box (X = 76, Y = 652, W = 1048, H = 486)
    const sumY = 652, sumH = 486;
    ctx.fillStyle = 'rgba(10, 16, 30, 0.22)';
    rr(ctx, M, sumY, CW_INNER, sumH, 18);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
    ctx.lineWidth = 1.6;
    rr(ctx, M, sumY, CW_INNER, sumH, 18);
    ctx.stroke();

    const bullets = book.bullets || [];
    let by = sumY + 38;
    bullets.slice(0, 3).forEach((b, idx) => {
      // Gold pill badge 01, 02, 03
      ctx.fillStyle = '#F59E0B';
      rr(ctx, M + 24, by - 4, 48, 34, 9);
      ctx.fill();
      ctx.fillStyle = '#0B0B0D';
      ctx.font = '700 20px "Be Vietnam Pro", sans-serif';
      const numStr = `0${idx + 1}`;
      ctx.fillText(numStr, M + 48 - ctx.measureText(numStr).width / 2, by + 20);

      // Bold sub-heading
      ctx.fillStyle = '#FFE066';
      ctx.font = '700 28px "Be Vietnam Pro", sans-serif';
      drawGlassText(ctx, b.heading, M + 88, by + 22, 6.5);

      // Crisp 28px Be Vietnam Pro contoured body text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '600 28px "Be Vietnam Pro", sans-serif';
      const nextY = wrapGlassL(ctx, b.text, M + 88, by + 64, CW_INNER - 116, 40, 2, 6.5);
      by = Math.max(by + 152, nextY + 18);
    });

    // 4. Translucent Quote & Takeaway Box (X = 76, Y = 1162, W = 1048, H = 196)
    const qtY = 1162, qtH = 196;
    ctx.fillStyle = 'rgba(10, 16, 30, 0.20)';
    rr(ctx, M, qtY, CW_INNER, qtH, 16);
    ctx.fill();
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
    ctx.lineWidth = 1.6;
    rr(ctx, M, qtY, CW_INNER, qtH, 16);
    ctx.stroke();

    // 6px Gold left accent bar
    ctx.fillStyle = '#FBBF24';
    rr(ctx, M + 16, qtY + 20, 6, qtH - 40, 3);
    ctx.fill();

    ctx.fillStyle = '#FFE066';
    ctx.font = 'italic 600 28px "Noto Serif", Georgia, serif';
    const qAfterY = wrapGlassL(ctx, book.quote, M + 38, qtY + 56, CW_INNER - 64, 38, 2, 6.5);

    ctx.fillStyle = '#6EE7B7';
    ctx.font = '700 26px "Be Vietnam Pro", sans-serif';
    wrapGlassL(ctx, `Điểm cốt lõi: ${book.takeaway}`, M + 38, Math.max(qAfterY + 14, qtY + 132), CW_INNER - 64, 34, 2, 6.5);

    // 5. Commemorative Emblem + Editorial Dedication + Signatures (Y = 1394..1590)
    ctx.save();
    ctx.translate(146, 1468);
    const cg = ctx.createRadialGradient(-20, -24, 6, 0, 0, 74);
    cg.addColorStop(0, 'rgba(251, 191, 36, 0.34)');
    cg.addColorStop(1, 'rgba(245, 158, 11, 0.08)');
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.arc(0, 0, 68, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.78)';
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.arc(0, 0, 68, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.32)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(0, 0, 56, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#FFE066';
    ctx.font = '700 32px "Be Vietnam Pro", sans-serif';
    const emblemTxt = '20/11';
    drawGlassText(ctx, emblemTxt, -ctx.measureText(emblemTxt).width / 2, 11, 6);
    ctx.restore();

    const infoX = 248;
    ctx.fillStyle = '#FFE066';
    ctx.font = '700 24px "Be Vietnam Pro", sans-serif';
    drawGlassText(ctx, 'ẤN PHẨM KỶ NIỆM NGÀY NHÀ GIÁO VIỆT NAM 20/11', infoX, 1428, 6);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '600 22px "Be Vietnam Pro", sans-serif';
    drawGlassText(ctx, 'Tủ sách Văn hóa Việt Nam · Lưu giữ cội nguồn & khát vọng tri thức', infoX, 1466, 5.5);

    [0, 1].forEach((i) => signature(ctx, infoX + i * 210, 1528, 1.05, i * 7 + activeBookIdx + 3, 'rgba(255,255,255,.88)', 2.4));

    ctx.font = '700 28px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = '#FFFFFF';
    drawGlassText(ctx, 'tri ân 20/11.', M, 1588, 6);
    const w = ctx.measureText('tri ân 20/11.').width;
    ctx.font = '600 26px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = '#F8FAFC';
    drawGlassText(ctx, ' tủ sách văn hóa việt', M + w, 1588, 6);
  }

  function drawCertificateContent(ctx, book) {
    const INK = '#23170C';
    const rnd = rng(4711 + activeBookIdx * 17);
    ctx.fillStyle = '#F4EAD5';
    rr(ctx, 0, 0, TW, TH, 26);
    ctx.fill();

    for (let i = 0; i < 120; i++) {
      const x = rnd() * TW, y = rnd() * TH, r = 50 + rnd() * 180, a = 0.012 + rnd() * 0.022;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(146,112,62,' + a + ')');
      g.addColorStop(1, 'rgba(146,112,62,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, 2 * r, 2 * r);
    }

    ctx.strokeStyle = INK;
    ctx.lineWidth = 4;
    ctx.strokeRect(36, 36, TW - 72, TH - 72);
    ctx.lineWidth = 1.4;
    ctx.strokeRect(50, 50, TW - 100, TH - 100);

    const M = 76;
    const CW_INNER = TW - M * 2; // 1048px

    // 1. Header
    ctx.fillStyle = '#8E2B22';
    ctx.font = '700 22px "Be Vietnam Pro", sans-serif';
    ctx.fillText('ẤN PHẨM ĐẶC BIỆT · TỦ SÁCH TRI ÂN 20/11 · VĂN HÓA VIỆT NAM', M, 94);

    let titlePt = 50;
    while (titlePt > 34) {
      ctx.font = '600 ' + titlePt + 'px "Noto Serif", Georgia, serif';
      if (ctx.measureText(book.title).width <= CW_INNER) break;
      titlePt -= 2;
    }
    ctx.fillStyle = INK;
    ctx.fillText(book.title, M, 148);

    ctx.font = 'italic 600 28px "Noto Serif", Georgia, serif';
    ctx.fillStyle = 'rgba(35, 23, 12, 0.88)';
    ctx.fillText(`Tác giả: ${book.author}`, M, 196);

    // 2. Illustration Frame
    const artX = M, artY = 232, artW = CW_INNER, artH = 396;
    if (loadedArtImg && loadedArtImg.complete && (loadedArtImg.naturalWidth || loadedArtImg.width) > 0) {
      drawImageCover(ctx, loadedArtImg, artX, artY, artW, artH, 16);
    }
    ctx.strokeStyle = 'rgba(59, 42, 23, 0.55)';
    ctx.lineWidth = 3;
    rr(ctx, artX, artY, artW, artH, 16);
    ctx.stroke();

    // 3. Summary Panel
    const sumY = 650, sumH = 486;
    ctx.fillStyle = '#EFE1C3';
    rr(ctx, M, sumY, CW_INNER, sumH, 16);
    ctx.fill();
    ctx.strokeStyle = 'rgba(59, 42, 23, 0.24)';
    ctx.lineWidth = 1.5;
    rr(ctx, M, sumY, CW_INNER, sumH, 16);
    ctx.stroke();

    const bullets = book.bullets || [];
    let by = sumY + 38;
    bullets.slice(0, 3).forEach((b, idx) => {
      ctx.fillStyle = '#8E2B22';
      rr(ctx, M + 24, by - 4, 48, 34, 9);
      ctx.fill();
      ctx.fillStyle = '#FFF9ED';
      ctx.font = '700 20px "Be Vietnam Pro", sans-serif';
      const numStr = `0${idx + 1}`;
      ctx.fillText(numStr, M + 48 - ctx.measureText(numStr).width / 2, by + 20);

      ctx.fillStyle = '#7A1F18';
      ctx.font = '700 28px "Be Vietnam Pro", sans-serif';
      ctx.fillText(b.heading, M + 88, by + 22);

      ctx.fillStyle = '#1E140A';
      ctx.font = '500 28px "Be Vietnam Pro", sans-serif';
      const nextY = wrapL(ctx, b.text, M + 88, by + 64, CW_INNER - 116, 40, 2);
      by = Math.max(by + 152, nextY + 18);
    });

    // 4. Compact Quote & Takeaway Box
    const qtY = 1158, qtH = 194;
    ctx.fillStyle = '#E6D4B0';
    rr(ctx, M, qtY, CW_INNER, qtH, 14);
    ctx.fill();
    ctx.fillStyle = '#8E2B22';
    rr(ctx, M + 16, qtY + 20, 6, qtH - 40, 3);
    ctx.fill();

    ctx.fillStyle = '#7A1F18';
    ctx.font = 'italic 600 28px "Noto Serif", Georgia, serif';
    const qAfterY = wrapL(ctx, book.quote, M + 38, qtY + 56, CW_INNER - 64, 38, 2);

    ctx.fillStyle = '#1B4332';
    ctx.font = '700 26px "Be Vietnam Pro", sans-serif';
    wrapL(ctx, `Điểm cốt lõi: ${book.takeaway}`, M + 38, Math.max(qAfterY + 14, qtY + 130), CW_INNER - 64, 34, 2);

    // 5. Wax Seal + Editorial Dedication + Signatures
    ctx.save();
    ctx.translate(146, 1468);
    const sg = ctx.createRadialGradient(-24, -28, 4, 0, 0, 86);
    sg.addColorStop(0, '#B24236');
    sg.addColorStop(1, '#7A2019');
    ctx.fillStyle = sg;
    ctx.beginPath();
    for (let i = 0; i <= 48; i++) {
      const a = (i / 48) * Math.PI * 2;
      const r = 72 + Math.sin(a * 9) * 4;
      ctx[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,220,205,.38)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 52, 0, 7);
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,232,220,.95)';
    ctx.font = '600 32px "Noto Serif", Georgia, serif';
    const sealText = '20/11';
    ctx.fillText(sealText, -ctx.measureText(sealText).width / 2, 12);
    ctx.restore();

    const infoX = 248;
    ctx.fillStyle = '#7A1F18';
    ctx.font = '700 24px "Be Vietnam Pro", sans-serif';
    ctx.fillText('ẤN PHẨM KỶ NIỆM NGÀY NHÀ GIÁO VIỆT NAM 20/11', infoX, 1422);
    ctx.fillStyle = 'rgba(35, 23, 12, 0.86)';
    ctx.font = '500 22px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Tủ sách Văn hóa Việt Nam · Lưu giữ cội nguồn & khát vọng tri thức', infoX, 1458);

    signature(ctx, infoX + 20, 1516, 1.32, 9 + activeBookIdx, 'rgba(35,23,12,.85)', 2.4);
    ctx.fillStyle = 'rgba(35, 23, 12, 0.85)';
    ctx.font = '600 24px "Noto Serif", Georgia, serif';
    ctx.fillText('Tri Ân Ngày Nhà Giáo Việt Nam · 20 · XI', infoX, 1568);
  }

  function makeCertTexture() {
    const book = books[activeBookIdx] || books[0];
    const c = document.createElement('canvas');
    c.width = CW;
    c.height = CH;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, CW, CH);
    ctx.save();
    ctx.scale(CW / TW, CH / TH);
    rr(ctx, 0, 0, TW, TH, 26);
    ctx.clip();
    if (currentVariant === 'certificate') {
      drawCertificateContent(ctx, book);
    } else {
      drawGlassContent(ctx, book);
    }
    ctx.restore();
    const t = new T.CanvasTexture(c);
    t.encoding = T.sRGBEncoding;
    t.anisotropy = renderer && renderer.capabilities ? renderer.capabilities.getMaxAnisotropy() : 8;
    t.minFilter = T.LinearFilter;
    t.magFilter = T.LinearFilter;
    t.needsUpdate = true;
    return t;
  }

  /* ======================================================================
     2. GRAIN (Exact ThreeUI implementation)
     ====================================================================== */
  (function grain() {
    const n = 160;
    const c = document.createElement('canvas');
    c.width = c.height = n;
    const x = c.getContext('2d');
    const d = x.createImageData(n, n);
    for (let i = 0; i < n * n; i++) {
      const v = 128 + (Math.random() - 0.5) * 168;
      d.data[i * 4] = d.data[i * 4 + 1] = d.data[i * 4 + 2] = v;
      d.data[i * 4 + 3] = 255;
    }
    x.putImageData(d, 0, 0);
    const url = 'url(' + c.toDataURL() + ')';
    document.getElementById('grain').style.backgroundImage = url;
    document.getElementById('grain2').style.backgroundImage = url;
  })();

  /* ======================================================================
     3. THREE.JS SCENE & WAVE SHADER (Exact ThreeUI r149 Implementation)
     ====================================================================== */
  const canvas = document.getElementById('gl');
  const renderer = new T.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.outputEncoding = T.sRGBEncoding;
  renderer.toneMapping = T.NoToneMapping;

  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(24, 1, 0.1, 100);
  camera.position.set(0, 0, 8.2);

  function envTexture() {
    const w = 1024, h = 512;
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    const x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#3a3d47');
    g.addColorStop(0.46, '#171820');
    g.addColorStop(1, '#08080a');
    x.fillStyle = g;
    x.fillRect(0, 0, w, h);
    const blob = (cx, cy, rx, ry, col, a) => {
      const rg = x.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry));
      rg.addColorStop(0, col.replace('A', a));
      rg.addColorStop(1, col.replace('A', '0'));
      x.save();
      x.translate(cx, cy);
      x.scale(1, ry / rx);
      x.translate(-cx, -cy);
      x.fillStyle = rg;
      x.beginPath();
      x.arc(cx, cy, rx, 0, 7);
      x.fill();
      x.restore();
    };
    blob(w * 0.3, h * 0.24, 330, 240, 'rgba(255,252,246,A)', '1');
    blob(w * 0.74, h * 0.34, 240, 200, 'rgba(150,175,235,A)', '.42');
    blob(w * 0.52, h * 0.86, 420, 190, 'rgba(255,170,120,A)', '.10');
    const t = new T.CanvasTexture(c);
    t.mapping = T.EquirectangularReflectionMapping;
    t.encoding = T.sRGBEncoding;
    return t;
  }

  const pmrem = new T.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  scene.environment = pmrem.fromEquirectangular(envTexture()).texture;

  const key = new T.DirectionalLight(0xfff6ec, 1.42);
  key.position.set(-3.3, 2.1, 2.0);
  const fill = new T.DirectionalLight(0x9fb6ff, 0.13);
  fill.position.set(3.6, -1.8, 1.6);
  const rim = new T.DirectionalLight(0xffffff, 0.1);
  rim.position.set(1.6, 1.2, -2.6);
  scene.add(key, fill, rim, new T.AmbientLight(0xffffff, 0.16));

  const touchLight = new T.PointLight(0xdfe8ff, 0, 7.5, 1.35);
  touchLight.position.set(0, 0, 1.7);
  scene.add(touchLight);

  const SW = 2.3, SH = 2.72;
  const geo = new T.PlaneGeometry(SW, SH, 72, 96);

  const uni = {
    uTime: { value: 0 },
    uAmp: { value: 1.18 },
    uFreq: { value: 4.7 },
    uTwist: { value: 1.3 },
    uSize: { value: new T.Vector2(SW, SH) },
    uFlutter: { value: 0 },
    uPhase: { value: 0 },
    uRim: { value: 0.62 },
    uRimA: { value: 0.88 },
    uSpecA: { value: 0.14 },
    uRimCol: { value: new T.Color(0xeaf2ff) }
  };

  const WAVE = `
uniform float uTime, uAmp, uFlutter, uPhase, uFreq, uTwist;
uniform vec2  uSize;

float sAmp(float u, float v){ return uAmp*(0.10 + pow(u,1.35))*(0.50 + 0.64*v); }
float sAmpV(float u){        return uAmp*(0.10 + pow(u,1.35))*0.64; }

float sTheta(float u, float v){
  float a  = sAmp(u,v);
  float ph = uFreq*u + uTwist*v + uTime*0.40 + uPhase;
  return a*sin(ph) + uFlutter*a*0.60*sin(ph*2.35 + uTime*2.0);
}
float sThetaV(float u, float v){
  float a  = sAmp(u,v), da = sAmpV(u);
  float ph = uFreq*u + uTwist*v + uTime*0.40 + uPhase;
  float f  = ph*2.35 + uTime*2.0;
  return da*sin(ph) + a*cos(ph)*uTwist
       + uFlutter*0.60*(da*sin(f) + a*cos(f)*uTwist*2.35);
}
float sYoff(float u, float v){
  float w = 1.0 - 0.55*v;
  return 0.021*uSize.y*sin(2.05*u + uTime*0.47 + uPhase)
       + 0.013*uSize.y*sin(3.35*u - 1.55*v + uTime*0.63 + uPhase)*w;
}
float sYdU(float u, float v){
  float w = 1.0 - 0.55*v;
  return 0.0431*uSize.y*cos(2.05*u + uTime*0.47 + uPhase)
       + 0.0436*uSize.y*cos(3.35*u - 1.55*v + uTime*0.63 + uPhase)*w;
}
float sYdV(float u, float v){
  float ph = 3.35*u - 1.55*v + uTime*0.63 + uPhase;
  return 0.013*uSize.y*(-1.55*cos(ph)*(1.0-0.55*v) - 0.55*sin(ph));
}

void sheetPoint(vec2 q, out vec3 P, out vec3 NN){
  float u = q.x, v = q.y;
  float x=0.0, z=0.0, xe=0.0, ze=0.0, dxv=0.0, dzv=0.0, dxe=0.0, dze=0.0;
  const int NS = 20;
  float h = 1.0/float(NS);
  for(int i=0;i<NS;i++){
    float uu = (float(i)+0.5)*h;
    float w  = clamp((u-(uu-0.5*h))/h, 0.0, 1.0);
    float th = sTheta(uu,v);
    float dt = sThetaV(uu,v);
    float c = cos(th), sn = sin(th);
    xe += c*h;          ze += sn*h;
    dxe += -sn*dt*h;    dze +=  c*dt*h;
    x   += c*h*w;       z   += sn*h*w;
    dxv += -sn*dt*h*w;  dzv +=  c*dt*h*w;
  }
  float W = uSize.x, H = uSize.y;
  float th0 = sTheta(u,v);
  P = vec3((x - xe*0.5)*W, (v-0.5)*H + (sYoff(u,v) - sYoff(0.5,0.5)), (z - ze*0.5)*W);
  vec3 Tu = vec3(W*cos(th0), sYdU(u,v), W*sin(th0));
  vec3 Tv = vec3((dxv - dxe*0.5)*W, H + sYdV(u,v), (dzv - dze*0.5)*W);
  NN = normalize(cross(Tu, Tv));
}`;

  let tex = null;
  const mat = new T.MeshPhysicalMaterial({
    map: null,
    color: new T.Color(0xffffff),
    side: T.DoubleSide,
    metalness: 0.0,
    roughness: 0.06,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
    iridescence: 0.1,
    iridescenceIOR: 1.35,
    iridescenceThicknessRange: [120, 420],
    envMapIntensity: 0.75,
    specularIntensity: 0.7,
    ior: 1.5,
    transparent: true,
    alphaTest: 0.012,
    opacity: 1
  });

  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uni);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\n' + WAVE)
      .replace(
        '#include <beginnormal_vertex>',
        `
      vec3 sheetP; vec3 objectNormal;
      sheetPoint(uv, sheetP, objectNormal);
      #ifdef USE_TANGENT
        vec3 objectTangent = vec3( tangent.xyz );
      #endif
    `
      )
      .replace('#include <begin_vertex>', 'vec3 transformed = sheetP;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uRim, uRimA, uSpecA;\nuniform vec3 uRimCol;')
      .replace('#include <alphatest_fragment>', 'if ( diffuseColor.a / max(opacity,1e-4) < alphaTest ) discard;')
      .replace(
        '#include <output_fragment>',
        `
      float fres = pow(1.0 - clamp(abs(dot(geometry.normal, geometry.viewDir)),0.0,1.0), 3.2);
      float baseA = diffuseColor.a / max(opacity, 1e-4);
      float glassMask = 1.0 - smoothstep(0.52, 0.88, baseA);
      vec3 litSurface = mix(diffuseColor.rgb, outgoingLight, 0.22 * glassMask) + fres * uRim * uRimCol * (0.15 + 0.85 * glassMask);
      float outA  = clamp(baseA + fres*uRimA
                        + uSpecA*dot(outgoingLight, vec3(0.3333)), 0.0, 1.0) * opacity;
      gl_FragColor = vec4( litSurface, outA );
    `
      );
  };

  const mesh = new T.Mesh(geo, mat);
  const group = new T.Group();
  group.add(mesh);
  scene.add(group);

  const haloTex = (() => {
    const s = 256;
    const c = document.createElement('canvas');
    c.width = c.height = s;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(0,0,0,.55)');
    g.addColorStop(0.45, 'rgba(0,0,0,.28)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, s, s);
    const t = new T.CanvasTexture(c);
    t.encoding = T.sRGBEncoding;
    return t;
  })();

  const halo = new T.Mesh(
    new T.PlaneGeometry(3.9, 4.9),
    new T.MeshBasicMaterial({ map: haloTex, transparent: true, depthWrite: false, opacity: 0.3 })
  );
  halo.position.z = -0.62;
  group.add(halo);

  /* ======================================================================
     4. POINTER — drag to turn, hover to light
     ====================================================================== */
  let dragging = false,
    dragYaw = 0,
    dragPitch = 0,
    release = 0;
  let velYaw = 0,
    velPitch = 0,
    prevYaw = 0,
    prevPitch = 0;
  let lastPX = 0,
    lastPY = 0,
    moved = 0,
    overSheet = false,
    hover = 0,
    hoverTarget = 0;
  let quad = null,
    cursorNow = '';
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  const hintEl = document.getElementById('hint');
  let hintUsed = false;

  const _v = new T.Vector3();
  function cornerPoint(qx, qy) {
    const t = uni.uTime.value,
      ph = uni.uPhase.value;
    const A = uni.uAmp.value,
      F = uni.uFreq.value,
      TWs = uni.uTwist.value;
    const u = qx,
      v = qy;
    const theta = (uu) => A * (0.1 + Math.pow(uu, 1.35)) * (0.5 + 0.64 * v) * Math.sin(F * uu + TWs * v + t * 0.4 + ph);
    let x = 0,
      z = 0,
      xe = 0,
      ze = 0;
    const N = 20,
      h = 1 / N;
    for (let i = 0; i < N; i++) {
      const uu = (i + 0.5) * h;
      const w = clamp((u - (uu - 0.5 * h)) / h, 0, 1);
      const th = theta(uu),
        c = Math.cos(th),
        s = Math.sin(th);
      xe += c * h;
      ze += s * h;
      x += c * h * w;
      z += s * h * w;
    }
    const yo =
      0.021 * SH * Math.sin(2.05 * u + t * 0.47 + ph) +
      0.013 * SH * Math.sin(3.35 * u - 1.55 * v + t * 0.63 + ph) * (1 - 0.55 * v);
    return _v.set((x - xe * 0.5) * SW, (v - 0.5) * SH + yo, (z - ze * 0.5) * SW);
  }

  function buildQuad() {
    const pts = [];
    for (const [u, v] of [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0]
    ]) {
      cornerPoint(u, v).applyMatrix4(group.matrixWorld).project(camera);
      pts.push([(_v.x * 0.5 + 0.5) * vw, (-_v.y * 0.5 + 0.5) * vh]);
    }
    const cx = (pts[0][0] + pts[1][0] + pts[2][0] + pts[3][0]) / 4;
    const cy = (pts[0][1] + pts[1][1] + pts[2][1] + pts[3][1]) / 4;
    quad = pts.map(([x, y]) => [cx + (x - cx) * 1.07, cy + (y - cy) * 1.07]);
  }

  function inQuad(px, py) {
    if (!quad) return false;
    let sign = 0;
    for (let i = 0; i < 4; i++) {
      const [ax, ay] = quad[i],
        [bx, by] = quad[(i + 1) % 4];
      const c = (bx - ax) * (py - ay) - (by - ay) * (px - ax);
      if (c !== 0) {
        const s = c > 0 ? 1 : -1;
        if (sign === 0) sign = s;
        else if (s !== sign) return false;
      }
    }
    return true;
  }

  function useHint() {
    hintUsed = true;
    if (hintEl) hintEl.style.opacity = '0';
  }

  function startDrag(clientX, clientY, pointerId) {
    dragging = true;
    moved = 0;
    lastPX = clientX;
    lastPY = clientY;
    velYaw = velPitch = 0;
    prevYaw = dragYaw;
    prevPitch = dragPitch;
    hoverTarget = 1;
    canvas.classList.add('is-dragging');
    if (pointerId != null && canvas.setPointerCapture) {
      try {
        canvas.setPointerCapture(pointerId);
      } catch (_) {}
    }
  }

  function moveDrag(clientX, clientY) {
    mouse.tx = (clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
    mouse.ty = (clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
    if (dragging) {
      const dx = clientX - lastPX,
        dy = clientY - lastPY;
      lastPX = clientX;
      lastPY = clientY;
      moved += Math.abs(dx) + Math.abs(dy);
      dragYaw += dx * 0.0075;
      dragPitch = clamp(dragPitch - dy * 0.0055, -0.65, 0.65);
      if (moved > 24) useHint();
      return;
    }
    overSheet = inQuad(clientX, clientY);
    hoverTarget = 1;
  }

  function endDrag(pointerId) {
    if (dragging) {
      dragging = false;
      if (moved <= 6) {
        velYaw = 0;
        velPitch = 0;
      }
      release = 0.65;
      canvas.classList.remove('is-dragging');
      if (pointerId != null && canvas.releasePointerCapture) {
        try {
          canvas.releasePointerCapture(pointerId);
        } catch (_) {}
      }
    }
  }

  canvas.addEventListener('pointerdown', (e) => {
    if (modalOpen) return;
    e.preventDefault();
    startDrag(e.clientX, e.clientY, e.pointerId);
  });

  window.addEventListener(
    'pointermove',
    (e) => {
      if (modalOpen) return;
      moveDrag(e.clientX, e.clientY);
    },
    { passive: true }
  );

  window.addEventListener('pointerup', (e) => endDrag(e.pointerId));
  window.addEventListener('pointercancel', (e) => endDrag(e.pointerId));
  window.addEventListener('pointerleave', () => {
    if (!dragging) hoverTarget = 0;
  });

  canvas.addEventListener(
    'touchstart',
    (e) => {
      if (modalOpen || !e.touches || !e.touches[0]) return;
      startDrag(e.touches[0].clientX, e.touches[0].clientY, null);
    },
    { passive: true }
  );

  canvas.addEventListener(
    'touchmove',
    (e) => {
      if (modalOpen || !e.touches || !e.touches[0]) return;
      e.preventDefault();
      moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: false }
  );

  canvas.addEventListener('touchend', () => endDrag(null));
  canvas.addEventListener('touchcancel', () => endDrag(null));

  canvas.addEventListener(
    'wheel',
    (e) => {
      if (modalOpen) return;
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      velYaw += clamp(delta * 0.015, -4.5, 4.5);
      release = 0.65;
      hoverTarget = 1;
      useHint();
    },
    { passive: false }
  );

  /* ======================================================================
     5. RESIZE & FRAME LOOP
     ====================================================================== */
  let vw = 0,
    vh = 0;
  function resize() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(vw, vh, false);
    camera.aspect = vw / vh;
    camera.updateProjectionMatrix();
    const visH = 2 * camera.position.z * Math.tan(T.MathUtils.degToRad(camera.fov) / 2);
    const visW = visH * camera.aspect;
    const wCap = camera.aspect < 0.85 ? 0.93 : Math.min(0.88, 0.6 + Math.max(0, 1.45 - camera.aspect) * 0.45);
    const hCap = camera.aspect < 0.85 ? 0.67 : 0.63;
    group.scale.setScalar(Math.min((visH * hCap) / SH, (visW * wCap) / SW));
  }
  window.addEventListener('resize', resize);

  const clock = new T.Clock();
  const lightPos = new T.Vector3();
  let intro = 0;
  let floatClock = 0;

  function frame() {
    requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    if (!dragging) floatClock += dt;
    const t = floatClock;
    uni.uTime.value = REDUCED ? 2.4 : clock.elapsedTime;

    intro += (1 - intro) * Math.min(1, dt * 1.9);
    mat.opacity = intro;
    halo.material.opacity = intro * (currentVariant === 'certificate' ? 0.55 : 0.3);
    if (hintEl && intro > 0.7 && !hintUsed) hintEl.style.opacity = '1';

    if (dragging) {
      const k = Math.min(1, dt * 14);
      velYaw += ((dragYaw - prevYaw) / Math.max(dt, 1e-3) - velYaw) * k;
      velPitch += ((dragPitch - prevPitch) / Math.max(dt, 1e-3) - velPitch) * k;
      velYaw = clamp(velYaw, -7, 7);
      velPitch = clamp(velPitch, -4, 4);
    } else {
      dragYaw += velYaw * dt;
      dragPitch = clamp(dragPitch + velPitch * dt, -0.6, 0.6);
      const decay = Math.pow(0.018, dt);
      velYaw *= decay;
      velPitch *= decay;
      release = Math.max(0, release - dt);
      if (release <= 0) {
        const home = Math.round(dragYaw / (Math.PI * 2)) * Math.PI * 2;
        const k = Math.min(1, dt * 0.55);
        dragYaw += (home - dragYaw) * k;
        dragPitch -= dragPitch * k;
      }
      mouse.x += (mouse.tx - mouse.x) * Math.min(1, dt * 3.0);
      mouse.y += (mouse.ty - mouse.y) * Math.min(1, dt * 3.0);
    }
    prevYaw = dragYaw;
    prevPitch = dragPitch;

    const idle = REDUCED ? 0 : 1;
    const rise = 1 - intro;
    group.rotation.y = dragYaw + mouse.x * 0.16 + Math.sin(t * 0.23) * 0.045 * idle;
    group.rotation.x = dragPitch - mouse.y * 0.11 + Math.sin(t * 0.19) * 0.026 * idle + rise * 0.28;
    group.rotation.z = Math.sin(t * 0.27) * 0.018 * idle;
    group.position.y = -0.05 + Math.sin(t * 0.36) * 0.045 * idle - rise * 0.7;
    group.position.x = Math.sin(t * 0.21) * 0.05 * idle + mouse.x * 0.1;
    group.updateMatrixWorld();

    hover += (hoverTarget - hover) * Math.min(1, dt * 4.5);
    touchLight.intensity = hover * 2.6 * intro;
    if (hover > 0.002) {
      lightPos.set(mouse.tx, -mouse.ty, 0.5).unproject(camera).sub(camera.position).normalize();
      touchLight.position.copy(camera.position).addScaledVector(lightPos, (1.75 - camera.position.z) / lightPos.z);
    }

    buildQuad();
    document.body.dataset.yaw = dragYaw.toFixed(3);
    document.body.dataset.pitch = dragPitch.toFixed(3);
    document.body.dataset.held = dragging ? '1' : '0';
    document.body.dataset.uTime = uni.uTime.value.toFixed(2);

    renderer.render(scene, camera);
  }

  /* ======================================================================
     6. DYNAMIC BACKGROUND, VARIANT SWITCHING & HUD CONTROLS
     ====================================================================== */
  function applyMaterialVariant() {
    document.body.classList.toggle('is-certificate', currentVariant === 'certificate');
    if (currentVariant === 'certificate') {
      mat.color.setHex(0xffffff);
      mat.roughness = 0.86;
      mat.clearcoat = 0.0;
      mat.clearcoatRoughness = 0.5;
      mat.iridescence = 0.0;
      mat.sheen = 0.34;
      mat.sheenRoughness = 0.9;
      mat.sheenColor.setHex(0xffffff);
      mat.envMapIntensity = 0.16;
      mat.specularIntensity = 0.3;
      mat.alphaTest = 0.42;
      uni.uRim.value = 0.05;
      uni.uRimA.value = 0.0;
      uni.uSpecA.value = 0.0;
      uni.uRimCol.value.setHex(0xffe8c8);
      touchLight.color.setHex(0xffd9a8);
    } else {
      mat.color.setHex(0xffffff);
      mat.roughness = 0.06;
      mat.clearcoat = 1.0;
      mat.clearcoatRoughness = 0.03;
      mat.iridescence = 0.1;
      mat.sheen = 0.0;
      mat.envMapIntensity = 0.75;
      mat.specularIntensity = 0.7;
      mat.alphaTest = 0.012;
      uni.uRim.value = 0.52;
      uni.uRimA.value = 0.88;
      uni.uSpecA.value = 0.1;
      uni.uRimCol.value.setHex(0xeaf2ff);
      touchLight.color.setHex(0xdfe8ff);
    }
    mat.needsUpdate = true;
  }

  function refreshSheetTexture() {
    const book = books[activeBookIdx] || books[0];
    const artSrc = resolveAssetPath(book.image || './assets/books/ban-sac-van-hoa-viet-nam.jpg');

    // Update dynamic background artwork, vibrant radial glow & wordmark
    const bgArt = document.getElementById('bgArt');
    const bgWord = document.getElementById('bgWord');
    if (bgArt) bgArt.src = artSrc;
    if (bgWord) bgWord.textContent = book.bgWord || book.shortTitle || '20/11';
    if (book.glow1) document.documentElement.style.setProperty('--glow-1', book.glow1);
    if (book.glow2) document.documentElement.style.setProperty('--glow-2', book.glow2);

    const openOriginalBtn = document.getElementById('openOriginalBtn');
    if (openOriginalBtn) openOriginalBtn.href = book.url || '#';

    const drawAndSwap = () => {
      const nextTex = makeCertTexture();
      if (tex) tex.dispose();
      tex = nextTex;
      mat.map = tex;
      mat.needsUpdate = true;
    };

    if (artSrc !== loadedArtSrc) {
      loadedArtSrc = artSrc;
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        loadedArtImg = img;
        drawAndSwap();
      };
      img.onerror = () => {
        loadedArtImg = null;
        drawAndSwap();
      };
      img.src = artSrc;
    } else {
      drawAndSwap();
    }
  }

  function renderHUD() {
    document.querySelectorAll('[data-variant]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.variant === currentVariant);
    });
    document.body.dataset.bookId = (books[activeBookIdx] || books[0]).id;
    document.body.dataset.variant = currentVariant;
  }

  // Event Wireup
  document.querySelectorAll('[data-variant]').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentVariant = btn.dataset.variant;
      applyMaterialVariant();
      renderHUD();
      refreshSheetTexture();
    });
  });

  function boot() {
    applyMaterialVariant();
    renderHUD();
    resize();
    refreshSheetTexture();
    mesh.visible = true;
    mat.opacity = 0.002;
    renderer.compile(scene, camera);
    renderer.render(scene, camera);
    mat.opacity = 1;
    frame();
  }

  if (document.fonts && document.fonts.ready) {
    Promise.race([
      Promise.all([
        document.fonts.load('700 50px "Be Vietnam Pro"'),
        document.fonts.load('600 28px "Be Vietnam Pro"'),
        document.fonts.load('500 27px "Be Vietnam Pro"'),
        document.fonts.load('700 26px "Be Vietnam Pro"'),
        document.fonts.load('600 50px "Noto Serif"'),
        document.fonts.load('italic 600 27px "Noto Serif"')
      ]).then(() => document.fonts.ready),
      new Promise((r) => setTimeout(r, 2500))
    ]).then(boot);
  } else {
    boot();
  }

  window.__sheet = {
    group,
    mat,
    uni,
    renderer,
    scene,
    camera,
    mesh,
    state: () => ({ intro, dragYaw, dragPitch, hover, quad, variant: currentVariant, activeBookIdx }),
    hit: (x, y) => inQuad(x, y),
    spin: (y) => {
      dragYaw = y;
      release = 1e9;
    }
  };
})();
