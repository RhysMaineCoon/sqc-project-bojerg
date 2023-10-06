$(document).ready(function () {
  $('.bars-icon').on('click', function () {
    $('.nav-bars-dropdown').toggle()
  })

  $('#dark-mode-btn').on('click', function () {
    if ($('body').hasClass('dark')) {
      $('body').removeClass('dark')
      $('h2, h3').removeClass('dark')
      $('header').removeClass('dark-accent')
      $('.nav-bars-dropdown').removeClass('dark-accent')
    } else {
      $('body').addClass('dark')
      $('h2, h3').addClass('dark')
      $('header').addClass('dark-accent')
      $('.nav-bars-dropdown').addClass('dark-accent')
    }
  })

  $('.sidebar-li').on('click', function () {
    let $selected = $(this).find('.section-sublist')
    $selected.toggle()

    // Hide any previously selected section sublists
    $('.section-sublist').each( function () {
      if ($(this).id !== $selected.id) {
        $(this).hide()
      }
    })
  })
})
