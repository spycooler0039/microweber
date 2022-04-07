$(document).ready(function() {
  $sidebar = $('.sidebar');

  $sidebar_img_container = $sidebar.find('.sidebar-background');

  $full_page = $('.full-page');

  $sidebar_responsive = $('body > .navbar-collapse');

  window_width = $(window).width();

  fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

  if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
    if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
      $('.fixed-plugin .dropdown').addClass('open');
    }

  }

  $('.fixed-plugin a').click(function(event) {
    // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
    if ($(this).hasClass('switch-trigger')) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else if (window.event) {
        window.event.cancelBubble = true;
      }
    }
  });

  $('.fixed-plugin .active-color span').click(function() {
    $full_page_background = $('.full-page-background');

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    var new_color = $(this).data('color');

    if ($sidebar.length != 0) {
      $sidebar.attr('data-color', new_color);
    }

    if ($full_page.length != 0) {
      $full_page.attr('filter-color', new_color);
    }

    if ($sidebar_responsive.length != 0) {
      $sidebar_responsive.attr('data-color', new_color);
    }
  });

  $('.fixed-plugin .background-color .badge').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    var new_color = $(this).data('background-color');

    if ($sidebar.length != 0) {
      $sidebar.attr('data-background-color', new_color);
    }
  });

  $('.fixed-plugin .img-holder').click(function() {
    $full_page_background = $('.full-page-background');

    $(this).parent('li').siblings().removeClass('active');
    $(this).parent('li').addClass('active');


    var new_image = $(this).find("img").attr('src');

    if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
      $sidebar_img_container.fadeOut('fast', function() {
        $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
        $sidebar_img_container.fadeIn('fast');
      });
    }

    if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
      var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

      $full_page_background.fadeOut('fast', function() {
        $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
        $full_page_background.fadeIn('fast');
      });
    }

    if ($('.switch-sidebar-image input:checked').length == 0) {
      var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
      var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

      $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
      $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
    }

    if ($sidebar_responsive.length != 0) {
      $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
    }
  });

  $('.switch-sidebar-image input').change(function() {
    $full_page_background = $('.full-page-background');

    $input = $(this);

    if ($input.is(':checked')) {
      if ($sidebar_img_container.length != 0) {
        $sidebar_img_container.fadeIn('fast');
        $sidebar.attr('data-image', '#');
      }

      if ($full_page_background.length != 0) {
        $full_page_background.fadeIn('fast');
        $full_page.attr('data-image', '#');
      }

      background_image = true;
    } else {
      if ($sidebar_img_container.length != 0) {
        $sidebar.removeAttr('data-image');
        $sidebar_img_container.fadeOut('fast');
      }

      if ($full_page_background.length != 0) {
        $full_page.removeAttr('data-image', '#');
        $full_page_background.fadeOut('fast');
      }

      background_image = false;
    }
  });

  $('.switch-sidebar-mini input').change(function() {
    $body = $('body');

    $input = $(this);

    if (md.misc.sidebar_mini_active == true) {
      $('body').removeClass('sidebar-mini');
      md.misc.sidebar_mini_active = false;

      $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

    } else {

      $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

      setTimeout(function() {
        $('body').addClass('sidebar-mini');

        md.misc.sidebar_mini_active = true;
      }, 300);
    }

    // we simulate the window Resize so the charts will get updated in realtime.
    var simulateWindowResize = setInterval(function() {
      window.dispatchEvent(new Event('resize'));
    }, 180);

    // we stop the simulation of Window Resize after the animations are completed
    setTimeout(function() {
      clearInterval(simulateWindowResize);
    }, 1000);

  });

  // Javascript method's body can be found in assets/js/demos.js
  md.initDashboardPageCharts();

  //md.initVectorMap();

  // initialise Datetimepicker and Sliders
  md.initFormExtendedDatetimepickers();

// Patiya
// DataTable-aos = class='datatables-aos' and Class='datatables-length5-aos'
// 22/4/2563    
	$('.datatables-aos').DataTable({
		"pagingType": "full_numbers",
		"lengthMenu": [
		  [10, 25, 50, -1],
		  [10, 25, 50, "ทั้งหมด"]
		],
		responsive: true,
		language: {
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหา :_INPUT_",
			searchPlaceholder: "ค้นหาข้อมูลในตาราง...",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
	});
	
	$('.datatables-length5-aos').DataTable({
		"pagingType": "full_numbers",
		"lengthMenu": [
		  [5, 10, 50, -1],
		  [5, 10, 50, "ทั้งหมด"]
		],
		responsive: true,
		language: {
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหา :_INPUT_",
			searchPlaceholder: "ค้นหาข้อมูลในตาราง...",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",			
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
	});	
	$('.tooltips').tooltip();
	

/* GLightbox แสดงรูปภาพ */
var lightboxDescription = GLightbox({
  selector: '.glightbox'
});

	
});
/*
	*@input id name
	*@output show datatable aos style length 5 for sha system 
	*@author Nutchapon 
	*@Create Date 2563-05-13
	*/
function make_dataTable_byId_length5(id_name){
	var datatable = $('#'+id_name).DataTable({
        "pagingType": "full_numbers",
		"lengthMenu": [
		  [5, 10, 50, -1],
		  [5, 10, 50, "ทั้งหมด"]
		],
		responsive: true,
		language: {
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหา :_INPUT_",
			searchPlaceholder: "ค้นหาข้อมูลในตาราง...",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",			
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
    });
	
	return datatable;
}
/*
	*@input id name
	*@output show datatable aos style
	*@author Nutchapon 
	*@Create Date 2563-05-13
	*/
function make_dataTable_byId(id_name){
	var datatable = $('#'+id_name).DataTable({
        "pagingType": "full_numbers",
		"lengthMenu": [
		  [10, 25, 50, -1],
		  [10, 25, 50, "ทั้งหมด"]
		],
		responsive: true,
		language: {
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหา :_INPUT_",
			searchPlaceholder: "ค้นหาข้อมูลในตาราง...",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
    });
	
	return datatable;
}
	/*
	*@input class name
	*@output show datatable aos style
	*@author Nutchapon 
	*@Create Date 2563-05-13
	*/
function make_dataTable_classname(cls_name){
	var datatable = $('.'+cls_name).DataTable({
        "pagingType": "full_numbers",
		"lengthMenu": [
		  [10, 25, 50, -1],
		  [10, 25, 50, "ทั้งหมด"]
		],
		responsive: true,
		language: {
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหา :_INPUT_",
			searchPlaceholder: "ค้นหาข้อมูลในตาราง...",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
    });
	
	return datatable;
}
/*
	*@input id name
	*@output show datatable aos style length 5 for sha system 
	*@author Nutchapon 
	*@Create Date 2563-05-13
	*/
function make_dataTable_classname_length5(id_name){
	var datatable = $('.'+id_name).DataTable({
        "pagingType": "full_numbers",
		"lengthMenu": [
		  [5, 10, 50, -1],
		  [5, 10, 50, "ทั้งหมด"]
		],
		responsive: true,
		language: {
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหา :_INPUT_",
			searchPlaceholder: "ค้นหาข้อมูลในตาราง...",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",			
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
    });
	
	return datatable;
}
/*
	*@input id name
	*@output show datatable aos style length 5 for sha system 
	*@author Nutchapon 
	*@Create Date 2563-05-13
	*/
function make_dataTable_classname_length5_people(id_name){
	var datatable = $('.'+id_name).DataTable({
        "pagingType": "full_numbers",
		"lengthMenu": [
		  [5, 10, 50, -1],
		  [5, 10, 50, "ทั้งหมด"]
		],
		responsive: true,
		language: { 
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหาผู้ใช้บริการ :_INPUT_",
			searchPlaceholder: "ค้นหา.....",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",			
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
    });
	$("input.form-control-sm").addClass("input-lg");	
	return datatable;
} 
 
function make_dataTable_classname_length10_people(id_name){
	var datatable = $('.'+id_name).DataTable({
        "pagingType": "full_numbers",
		"lengthMenu": [
		  [10, 20, 50, -1],
		  [10, 20, 50, "ทั้งหมด"]
		],
		responsive: true,
		language: { 
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหาผู้ใช้บริการ :_INPUT_",
			searchPlaceholder: "ค้นหา.....",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",			
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
    });
	$("input.form-control-sm").addClass("input-lg");	
	return datatable;
}

/**
 * @author Jirayus Arbking
 * prototype function replaceAt
 * เป็น function แก้ข้อมูล ณ ตำแหน่งๆ หนึ่ง
 */

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
	/*
	*@input class name
	*@output show datatable aos style all
	*@author Patiya 
	*@Create Date 2563-05-13
	*/
function make_dataTable_classname_all(cls_name){
	var datatable = $('.'+cls_name).DataTable({
        "pagingType": "full_numbers",
		"lengthMenu": [
		  [-1],
		  ["ทั้งหมด"]
		],
		responsive: true,
		language: {
			lengthMenu: "แสดง _MENU_ รายการ",	
			emptyTable: "ไม่พบข้อมูลในตาราง",
			search: "ค้นหา :_INPUT_",
			searchPlaceholder: "ค้นหาข้อมูลในตาราง...",
			info:"แสดงหน้าที่ _START_ จาก _END_ หน้า ทั้งหมด _TOTAL_ รายการ",
			infoEmpty: "แสดงหน้าที่ 0 จาก 0 หน้า รายการทั้งหมด 0 รายการ",
			zeroRecords: "ไม่พบข้อมูลที่ค้นหาในตาราง",
			infoFiltered: "",
			paginate : {
				"first":      "",
				"last":       "",
				"next":       "หน้าถัดไป",
				"previous":   "ก่อนหน้า"
			},			
		}
    });
	$("input.form-control-sm").addClass("input-lg");	
	return datatable;
}


