// Call the dataTables jQuery plugin
$(document).ready(function () {
  $('#dataTable').DataTable({
    select: true,
    dom: '<"top">rt<"bottom-table">',
    lengthMenu: [
      [5, 10, 25, 50, -1],
      [5, 10, 25, 50, 'All']
    ],
    ordering: false
  })
})
