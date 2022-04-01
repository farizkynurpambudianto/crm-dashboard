// Call the dataTables jQuery plugin
$(document).ready(function () {
  $('#dataTable').DataTable({
    dom: '<"top">rt<"bottom-table"lp>',
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, 'All']
    ],
    ordering: false,
    columnDefs: [
      {
        targets: 0,
        searchable: false,
        orderable: false,
        className: 'dt-body-center'
        // render: function (data, type, full, meta) {
        //   return '<div class="custom-control custom-checkbox"><input type="checkbox" class="custom-control-input"><label class="custom-control-label"></label></div>'
        // }
      }
    ],
    select: {
      style: 'multi',
      selector: 'td:first-child'
    }
  })
})
