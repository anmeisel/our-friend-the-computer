$(document).ready(function() {
  $('.ep-title').click(function() {
    $(this)
      .parents()
      .children('.ep-desc')
      .toggle()
  })
})
